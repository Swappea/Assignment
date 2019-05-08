const express = require('express');
const router = express.Router();
const signinauth = require('../middleware/signinauth');
const userData = require('../model/userdata');

router.get('/', signinauth, (req, res) => {
    const userId = req.user.id;
    const user = userData().find(user => user.id === userId);
    res.render('userdetails.pug', { title: 'Login Application', username: user.username });
});



module.exports = router;