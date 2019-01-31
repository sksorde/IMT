var express = require('express');
var ply = express.Router();
var employee = require("../controllers/EmployeeController.js");


// Get all incidents where area is PLY
ply.get('/', function (req, res) {
    console.log("inside ply file");

    employee.ply(req, res);
});


module.exports = ply;
