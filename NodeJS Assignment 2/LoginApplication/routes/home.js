const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.redirect('/login');
});

router.get('/logout', (req, res) => {
    req.session.destroy(function(){
        console.log("user logged out.")
     });
    res.redirect('/login');
});

module.exports = router;