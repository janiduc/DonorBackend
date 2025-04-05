const sponsorshipService = require('../services/sponsorship');
const nodemailer = require('nodemailer'); // For sending emails

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com', // Replace with your email
        pass: 'your_email_password'  // Replace with your email password
    }
});

async function addSponsorship(req, res) {
    try {
        const { name, address, amount, remarks } = req.body;
        const photo = req.file ? req.file.path : null; // Get the uploaded photo path
        const customerId = req.user.id; // Get the logged-in customer's ID from the token

        if (!photo) {
            return res.status(400).json({ message: 'Photo is required' });
        }

        const sponsorship = await sponsorshipService.addSponsorship({
            name,
            address,
            amount,
            remarks,
            photo,
            customerId
        });

        res.status(201).json({ message: 'Sponsorship added successfully and is pending approval', sponsorship });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateSponsorshipStatus(req, res) {
    try {
        const { status } = req.body; // Get the new status from the request body
        const sponsorshipId = req.params.id;

        const sponsorship = await sponsorshipService.updateSponsorshipStatus(sponsorshipId, status);
        if (!sponsorship) {
            return res.status(404).json({ message: 'Sponsorship not found' });
        }

        // Send email notification to the customer
        const customerEmail = sponsorship.customerId.email;
        const mailOptions = {
            from: 'your_email@gmail.com',
            to: customerEmail,
            subject: 'Sponsorship Status Update',
            text: `Dear ${sponsorship.customerId.name}, your sponsorship has been ${status}.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(200).json({ message: `Sponsorship status updated to ${status}`, sponsorship });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { addSponsorship, getAllSponsorships, getSponsorshipById, updateSponsorshipStatus, deleteSponsorship };