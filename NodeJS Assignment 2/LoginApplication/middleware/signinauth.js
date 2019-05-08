const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = function checkSignIn(req, res, next){
    const token = req.session.token;
    console.log('Token inside signinauth middleware',token);
    if (!token) return res.status(401).send('Access denied. No token provided');
    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token');
    }
}