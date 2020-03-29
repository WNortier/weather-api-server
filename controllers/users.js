const User = require('../models/user');

exports.addUser = (req, res, next) => {
    const user = new User(req.body);
    user.save();
    const users = User.fetchAll();
    console.log(users)
    res.status(201).json({
        message: 'Account created',
        details: { users }
    })
};