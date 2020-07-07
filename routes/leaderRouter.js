const express = require("express");
var http = require("http");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const leaderRouter = express.Router();

leaderRouter.route("/")
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res, next)=>{
    res.end("will send leader data");
})
.post((req, res, next)=>{
    res.end("will add leader data");
})
.put((req, res, next)=>{
    res.statusCode = 403;
    res.end("this operation not allowed.");
})
.delete((req, res, next)=>{
    res.end("will delete leader data");
});

leaderRouter.route("/:leaderId")
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res, next)=>{
    res.end("will send leader data with leaderId = " + req.params.leaderId);
})
.post((req, res, next)=>{
    res.statusCode = 403;
    res.end("this operation not allowed.");
})
.put((req, res, next)=>{
    res.end("will change leader data at leaderId = " + req.params.leaderId);
})
.delete((req, res, next)=>{
    res.end("will delete leader data at leaderId = "+ req.params.leaderId);
});

module.exports = leaderRouter;