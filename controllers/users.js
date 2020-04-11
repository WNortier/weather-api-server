const User = require('../models/user');

exports.addUser = async (req, res, next) => {
    const user = new User(req.body);
    await user.save();
    const users = await User.fetchAll();
    console.log(users[0])
    res.status(201).json({
        message: 'Account created',
        details: { users }
    })
};