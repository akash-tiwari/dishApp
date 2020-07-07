const express = require("express");
var http = require("http");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const dishRouter = express.Router();

dishRouter.route("/")
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res, next)=>{
    res.end("will send dish data");
})
.post((req, res, next)=>{
    res.end("will add dish data");
})
.put((req, res, next)=>{
    res.statusCode = 403;
    res.end("this operation not allowed.");
})
.delete((req, res, next)=>{
    res.end("will delete dish data");
});

dishRouter.route("/:id")
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res, next)=>{
    res.end("will send dish data with id = " + req.params.id);
})
.post((req, res, next)=>{
    res.statusCode = 403;
    res.end("this operation not allowed.");
})
.put((req, res, next)=>{
    res.end("will change dish data at id = " + req.params.id);
})
.delete((req, res, next)=>{
    res.end("will delete dish data at id = "+ req.params.id);
});

module.exports = dishRouter;