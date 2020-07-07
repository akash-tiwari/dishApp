const express = require("express");
var http = require("http");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const dishRouter = require("./routes/dishRouter");
var router = express.Router();

const hostname = "localhost";
var port = process.env.PORT || 3000;


var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter); //mounting dishRouter

app.use(express.static(__dirname));


app.use((req, res, next)=>{
    res.statusCode =200;
    res.setHeader("Content-Type","text/html");
    res.end('<html><body><h1>express server</h1></body></html>');
})

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log('this is express server running at http://${hostname}:${port}');
});
