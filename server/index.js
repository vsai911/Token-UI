const path = require('path');
const url = require('url');
const express = require('express');
const fs    = require('fs');
const http = require('http');
const bodyParser = require('body-parser');

//Initialise express application
const app = express();

//Set port to listen on -> Defaults to 3000
const PORT = process.env.PORT || 3000;

/*Create a http server 
*The app returned by express() is in fact a JavaScript Function, 
*designed to be passed to Node’s HTTP servers as a callback to handle requests. 
*/
const server = http.createServer(app);

//Middleware for from and url encoded data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//Host up entire React front end -> default selection index.html
app.use('/',express.static(path.join(__dirname, '/../client')));


server.listen(PORT,function(){
	console.log('server started on',PORT);
})