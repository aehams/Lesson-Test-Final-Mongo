const User = require('../models/User');

exports.createUser = (data) => User.create(data);
exports.getUsers = () => User.find();
