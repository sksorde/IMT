var express = require('express');
var router = express.Router();
var employee = require("../controllers/EmployeeController.js");
var employeeDetails = require("../controllers/EmployeeDetailController.js");	//Added to store incident updates
//var exportcsv = require("/controllers/");
console.log("inside routes\employees");

// Get all employees
router.get('/', function (req, res) {
	//console.log("Incident list triggered");
    employee.list(req, res);
});

// Get single employee by id
router.get('/show/:id', function (req, res) {
    employee.show(req, res);
});

// Create employee
router.get('/create', function (req, res) {
    employee.create(req, res);
});

// Save employee
router.post('/save', function (req, res) {
    employee.save(req, res);
});

// Edit employee
router.get('/edit/:id', function (req, res) {
    employee.edit(req, res);
});

// Edit update
router.post('/Addupdate/:id', function (req, res) {
	//console.log('Incident detail triggered'+res._id);
    //employee.update(req, res);
    employeeDetails.save(req,res);	// Added to store child updates
});


// Edit update
router.post('/delete/:id', function (req, res, next) {
    employee.delete(req, res);
});

module.exports = router;
