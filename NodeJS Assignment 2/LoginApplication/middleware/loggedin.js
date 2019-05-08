const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = function checkSignIn(req, res, next){
    const token = req.session.token;
    console.log('Token inside loggedin middleware',token);
    if (!token) {
        next();
        return ;
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        console.log(decoded);
        req.user = decoded;
        res.redirect('/userdetails');
    } catch (ex) {
        res.status(400).send('Invalid token');
    }
}