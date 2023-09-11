//***** Import express module *****
const express = require("express")
//***** Import mongoose module *****
const mongoose = require('mongoose');
//***** Import body-parser module *****
const bodyParser = require("body-parser");


//create express application
const app = express()

//connect APP with DataBase
mongoose.connect('mongodb://127.0.0.1:27017/test-technique');

// Configure Body-parser
// Send JSON responses
app.use(bodyParser.json());

// Get objects from Request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


//make app importable
module.exports = app;
