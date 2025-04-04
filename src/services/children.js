const Children = require('../models/children');

async function addChild(childData) {
    try {
        const child = new Children(childData);
        return await child.save();
    } catch (error) {
        throw new Error('Error adding child: ' + error.message);
    }
}

async function getChildById(childId) {
    try {
        return await Children.findById(childId).populate('parentId', 'name email');
    } catch (error) {
        throw new Error('Error fetching child: ' + error.message);
    }
}

// async function getChildByName(name) {
//     try {
//         return await Children.findOne({ name: name }); // Search for a child by name
//     } catch (error) {
//         throw new Error('Error fetching child by name: ' + error.message);
//     }
// }

async function getAllChildren() {
    try {
        return await Children.find({}).populate('parentId', 'name email');
    } catch (error) {
        throw new Error('Error fetching children: ' + error.message);
    }
}

async function updateChild(childId, updatedData) {
    try {
        return await Children.findByIdAndUpdate(childId, updatedData, { new: true });
    } catch (error) {
        throw new Error('Error updating child: ' + error.message);
    }
}

async function deleteChild(childId) {
    try {
        return await Children.findByIdAndDelete(childId);
    } catch (error) {
        throw new Error('Error deleting child: ' + error.message);
    }
}

module.exports = { addChild, getChildById, getAllChildren, updateChild, deleteChild };