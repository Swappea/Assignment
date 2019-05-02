
// loading http module
const http = require('http');
// loading file system module 
const fs = require('fs');


var html = fs.readFileSync('./index.html');

// creating http server and handling all the request and response 
const httpServer = http.createServer((request, response) => {
    var requestUrl = request.url;

    switch(requestUrl){
        case '/monday': 
        case '/tuesday':
        case '/wednesday': 
        case '/thursday':
        case '/friday':
        case '/saturday':
        case '/sunday':
                response.write('<h1>Today is : ' + requestUrl.slice(1).charAt(0).toUpperCase() + requestUrl.slice(2) +'<h1>'); 
                // getting date object
                const date = new Date();
                response.write('<h4>Time is : ' + date.toTimeString() + '</h4>');
                response.write('<a href="/">Go back to Home Page</a>');
                response.end();
                break;
        case '/': 
                response.write(html); 
                response.end();
                break;
        default : 
                response.write('<h1>URL Not found!!! 404</h1>');
                response.write('<a href="/">Go back to Home Page</a>');
                response.end();
                break;
    }
});

// listening on port 4000
httpServer.listen(4000, () => {
    console.log('Listening on port 4000');
});