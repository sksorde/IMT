var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  area: String,	
  raisedby: String,
  casewoker:String,
contactnum:String,
teamleader:String,
location: String,
team: String,
workgroup: String,
g7: String,
achieved: String,
comp_area: String,
subarea: String,
fun_area_affe: String,
srnumber: String,
srsubstatus: String,
casenum: String,
mastcasenum: String,
pp_nino: String,
pp_name: String,
rp_nino: String,
rp_name: String,
bicc_rep_name: String,
bicc_ans_subj_area: String,
report_name: String,
report_num: String,
folder_name: String,
report_col_name: String,
col_item_name: String,
SER: Boolean,
SET: Boolean,
case_prog_aff: Boolean,
pay_affect: Boolean,
reputation_risk: Boolean,
case_affected: Boolean,
bginfo: String,
procedural_path: String,
error_msg: String,
other_info: String,
otherupdates: [],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
