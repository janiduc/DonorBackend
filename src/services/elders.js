const Elders = require('../models/elders');

async function addElder(elderData) {
    try {
        const elder = new Elders(elderData);
        return await elder.save();
    } catch (error) {
        throw new Error('Error adding elder: ' + error.message);
    }
}

async function getElderById(elderId) {
    try {
        return await Elders.findById(elderId).populate('parentId', 'name email');
    } catch (error) {
        throw new Error('Error fetching elder: ' + error.message);
    }
}

async function getAllElders() {
    try {
        return await Elders.find({}).populate('parentId', 'name email');
    } catch (error) {
        throw new Error('Error fetching elders: ' + error.message);
    }
}

async function updateElder(elderId, updatedData) {
    try {
        return await Elders.findByIdAndUpdate(elderId, updatedData, { new: true });
    } catch (error) {
        throw new Error('Error updating elder: ' + error.message);
    }
}

async function deleteElder(elderId) {
    try {
        return await Elders.findByIdAndDelete(elderId);
    } catch (error) {
        throw new Error('Error deleting elder: ' + error.message);
    }
}

module.exports = { addElder, getElderById, getAllElders, updateElder, deleteElder };