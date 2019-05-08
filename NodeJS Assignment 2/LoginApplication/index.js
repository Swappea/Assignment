
// loading express
const express = require('express');
const app = express();

// session
const session = require('express-session');
const config = require('config');

// loading routes
const home = require('./routes/home');
const login = require('./routes/login');
const userdetails = require('./routes/userdetails');

// templating engine
app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(session({secret: config.get('jwtPrivateKey')}));


// setting the router api
app.use('/', home);
app.use('/login', login);
app.use('/userdetails', userdetails);


// setting up server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on Port ${port}...`);
});