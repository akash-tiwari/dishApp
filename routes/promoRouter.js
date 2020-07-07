const express = require("express");
var http = require("http");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const promoRouter = express.Router();

promoRouter.route("/")
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res, next)=>{
    res.end("will send promo data");
})
.post((req, res, next)=>{
    res.end("will add promo data");
})
.put((req, res, next)=>{
    res.statusCode = 403;
    res.end("this operation not allowed.");
})
.delete((req, res, next)=>{
    res.end("will delete promo data");
});

promoRouter.route("/:promoId")
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res, next)=>{
    res.end("will send promo data with promoId = " + req.params.promoId);
})
.post((req, res, next)=>{
    res.statusCode = 403;
    res.end("this operation not allowed.");
})
.put((req, res, next)=>{
    res.end("will change promo data at promoId = " + req.params.promoId);
})
.delete((req, res, next)=>{
    res.end("will delete promo data at promoId = "+ req.params.promoId);
});

module.exports = promoRouter;