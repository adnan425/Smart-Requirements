const jwt = require('jsonwebtoken');
const { User, validateUser } = require('../models/user');
const _ = require('lodash');
const express = require('express');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();


router.get('/me', auth, async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.send(user);
    } catch (err) {
        next();
    }
})

// storing new user
router.post('/', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // findOne = looking for one of property
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');

    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    res.status(200).send("Successfully registered.");
})

//get all managers
router.get('/', async (req, res) => {
    const users = await User.find({role: 'manager'})
        .select('id name email');

    res.status(200).send(users); 

        
});
module.exports = router;