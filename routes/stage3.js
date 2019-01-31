var express = require('express');
var stage3 = express.Router();
var employee = require("../controllers/EmployeeController.js");


// Get all incidents where area is NEW
stage3.get('/', function (req, res) {

    employee.stage3(req, res);
});



module.exports = stage3;
