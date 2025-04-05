const Sponsorship = require('../models/sponsorship');

async function addSponsorship(sponsorshipData) {
    try {
        const sponsorship = new Sponsorship(sponsorshipData);
        return await sponsorship.save();
    } catch (error) {
        throw new Error('Error adding sponsorship: ' + error.message);
    }
}

async function getAllSponsorships() {
    try {
        return await Sponsorship.find({}).populate('customerId', 'name email');
    } catch (error) {
        throw new Error('Error fetching sponsorships: ' + error.message);
    }
}

async function getSponsorshipById(sponsorshipId) {
    try {
        return await Sponsorship.findById(sponsorshipId).populate('customerId', 'name email');
    } catch (error) {
        throw new Error('Error fetching sponsorship: ' + error.message);
    }
}

async function updateSponsorshipStatus(sponsorshipId, status) {
    try {
        return await Sponsorship.findByIdAndUpdate(
            sponsorshipId,
            { status },
            { new: true }
        );
    } catch (error) {
        throw new Error('Error updating sponsorship status: ' + error.message);
    }
}

async function deleteSponsorship(sponsorshipId) {
    try {
        return await Sponsorship.findByIdAndDelete(sponsorshipId);
    } catch (error) {
        throw new Error('Error deleting sponsorship: ' + error.message);
    }
}

module.exports = { addSponsorship, getAllSponsorships, getSponsorshipById, updateSponsorshipStatus, deleteSponsorship };