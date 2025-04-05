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

// async function getChildByName(req, res) {
//     try {
//         const name = req.params.name; // Extract the name from the request parameters
//         const child = await childrenService.getChildByName(name);
//         if (!child) {
//             return res.status(404).json({ message: 'Child not found' });
//         }
//         res.status(200).json(child);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

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

const updateChildDetails = async () => {
    console.log("Updating child:", selectedChild); // Debugging
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:5000/api/children/${selectedChild._id}`,
        selectedChild,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Child updated successfully!");
      closeUpdateModal();
      fetchAllChildren(); // Refresh the list
    } catch (error) {
      alert("Error updating child: " + error.message);
    }
  };

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

async function searchChild(req, res){
    try {
        const children = await childrenService.searchChild(req);
        res.status(200).json(children);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { addChild, getChildById, getAllChildren, updateChild, deleteChild, searchChild, updateChildDetails };