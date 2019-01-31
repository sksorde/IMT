var mongoose = require('mongoose');

var EmployeeDetailSchema = new mongoose.Schema({
  empid: String,
  //raisedby: String,
  //location: String,
  //team: String,
  otherupdates: [],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('EmployeeDetails', EmployeeDetailSchema);
