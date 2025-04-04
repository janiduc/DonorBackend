const eldersService = require('../services/elders');

async function addElder(req, res) {
    try {
        const elder = await elderService.addElder(req.body);
        res.status(201).json({ message: 'Elder added successfully', elder });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getElderById(req, res) {
    try {
        const elder = await eldersService.getElderById(req.params.id);
        if (!elder) {
            return res.status(404).json({ message: 'Elder not found' });
        }
        res.status(200).json(elder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAllElders(req, res) {
    try {
        const elders = await eldersService.getAllElders();
        res.status(200).json(elders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateElder(req, res) {
    try {
        const elder = await eldersService.updateElder(req.params.id, req.body);
        if (!elder) {
            return res.status(404).json({ message: 'Elder not found' });
        }
        res.status(200).json({ message: 'Elder updated successfully', elder });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteElder(req, res) {
    try {
        const elder = await eldersService.deleteElder(req.params.id);
        if (!elder) {
            return res.status(404).json({ message: 'Elder not found' });
        }
        res.status(200).json({ message: 'Elder deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { addElder, getElderById, getAllElders, updateElder, deleteElder };