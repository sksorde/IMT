var mongoose = require("mongoose");
var EmployeeDetail = require("../models/EmployeeDetails");
//var csv      = require('csv-express');		// Adde by Parag for Export functionality
//var csvimport = require('fast-csv');	// Added by Parag for Import functionality

var employeeDetailController = {};


// Show list of employees
employeeDetailController.list = function (req, res) {
    EmployeeDetails.find({}).exec(function (err, employees) {
        if (err) {
            console.log("Error:", err);
        }
        else {
		
            res.render("../views/employees/index", { employees: employees });
        }
    });
};

employeeDetailController.home = function (req, res) {
    EmployeeDetails.find({}).exec(function (err, employees) {
        if (err) {
            console.log("Error:", err);
        }
        else {
		console.log("inside home");
            res.render("../views/employees/TTTPage", { "": "" });
        }
    });
};

// Show employee by id
employeeDetailController.show = function (req, res) {
    EmployeeDetails.findOne({ _id: req.params.id }).exec(function (err, employee) {
        if (err) {
            console.log("Error:", err);
        }
        else {

            res.render("../views/employees/show", { employee: employee });
        }
    });
};



// Save new employee
employeeDetailController.save = function (req, res) {
    var employeedetail = new EmployeeDetail(req.body);

    employeedetail.save(function (err) {
        if (err) {
            console.log(err);
            res.render("../views/employees/create");
        } else {
            console.log("Successfully Added an incident update."+ employeedetail);
            //res.redirect("/employees/show/" + employeedetail._id); use employee._id 
            res.redirect("/employees/show/" + employeedetail.empid);
        }
    });
};


module.exports = employeeDetailController;
