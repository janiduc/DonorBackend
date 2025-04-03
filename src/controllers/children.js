const childrenService = require('../services/children');

async function addChild(req, res) {
    try {
        const child = await childrenService.addChild(req.body);
        res.status(201).json({ message: 'Child added successfully', child });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getChildById(req, res) {
    try {
        const child = await childrenService.getChildById(req.params.id);
        if (!child) {
            return res.status(404).json({ message: 'Child not found' });
        }
        res.status(200).json(child);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAllChildren(req, res) {
    try {
        const children = await childrenService.getAllChildren();
        res.status(200).json(children);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateChild(req, res) {
    try {
        const child = await childrenService.updateChild(req.params.id, req.body);
        if (!child) {
            return res.status(404).json({ message: 'Child not found' });
        }
        res.status(200).json({ message: 'Child updated successfully', child });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteChild(req, res) {
    try {
        const child = await childrenService.deleteChild(req.params.id);
        if (!child) {
            return res.status(404).json({ message: 'Child not found' });
        }
        res.status(200).json({ message: 'Child deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { addChild, getChildById, getAllChildren, updateChild, deleteChild };