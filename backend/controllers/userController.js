const service = require('../services/userService');

exports.getUsers = async (req, res) => {
  const users = await service.getUsers();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const user = await service.createUser(req.body);
  res.status(201).json(user);
};
