const Role = require('../models/role.model.mjs');

exports.createRole = async (req, res) => {
  try {
    const newRole = new Role(req.body);
    await newRole.save();
    res.status(201).json({ message: 'Role created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRoleById = async (req, res) => {
  try {
    const role = await Role.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.status(200).json({ message: 'Role updated successfully', role });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRoleById = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};