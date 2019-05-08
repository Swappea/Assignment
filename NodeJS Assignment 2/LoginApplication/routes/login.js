const url = require('url');
const express = require('express');
const router = express.Router();
const loggedin = require('../middleware/loggedin');

const jwt = require('jsonwebtoken');
const config = require('config');

const userData = require('../model/userdata');

router.get('/', loggedin, (req, res) => {
    res.render('login.pug', { title: 'Login Application' });
});

router.post('/', (req, res) => {

    let inputUserData = {
        username: req.body.username,
        password: req.body.password,
    };

    const user = userData().find(user => user.username === inputUserData.username && user.password === inputUserData.password);
    if (!user) return res.status(401).send('<h1>Wrong Login Info!!</h1> <br><a href="/">Go back to Login Page</a>');

    const token = jwt.sign({ id: user.id}, config.get('jwtPrivateKey'), {expiresIn: '2h'});

    //res.header('x-auth-token', token).redirect('/userdetails');
    req.session.token = token;
    res.redirect('/userdetails');
});

module.exports = router;