// file: challenge.js
// author: Leo Battalora
//
// description:
//   an express app to handle the Slack url_verification event
//
// instructions:
//   1) place challenge.js in an empty directory
//   2) cd into the new directory
//   3) $ npm install express
//   4) $ npm challenge.js
//   5) in Slack verify the Request URL: http://server.url:port/challenge
//
// tested on: node v10.21.0, npm v6.14.4, express v4.17.1
//
// modification history:
//   20200614 (LB): initial version
//

// specify port to listen on
//
let port = 8080;

const express = require('express'); // include express module
const app = express(); // create express app
app.use(express.json()); // use the express.json middleware to parse JSON

// handle challenge post request
//
app.post('/challenge', (req, res) => {
    
    // print request body to terminal
    //
    console.log(req.body);

    // create response body from challenge attribute
    //
    const body = JSON.stringify({ challenge: req.body.challenge});
    
    // send response
    //
    res
	.writeHead(200, {
	    'Content-Length': Buffer.byteLength(body),
	    'Content-Type': 'application/json'
	})
	.end(body);
});

// listen indefinitely on port 8080
//
app.listen(port, '0.0.0.0');

//
// end of file
