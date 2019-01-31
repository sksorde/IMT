var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var incidentSchema = new Schema({
    raisedby: String,
    casewoker: String,
    contactnum: String,
    teamleader: String,
    location: String,
    team: String,
    workgroup: String,
    g7: String,
    archieved: String,
    comp_area: String,
    subarea: String,
    func_area: String,
    srnumber: String,
    srsubstatus: String,
    casenum: String,
    mastcasenum: String,
    pp_nino: String,
    pp_name: String,
    rp_nino: String,
    rp_name: String,
    bicc_dashboard: String,
    bicc_subj_area: String,
    bicc_rpt_name: String,
    bicc_rpt_num: String,
    bicc_folder_name: String,
    bicc_rpt_col: String,
    bicc_col_name: String,
    ser: Boolean,
    set: Boolean,
    case_progress_affected: Boolean,
    pay_affected: Boolean,
    reputation_risk: Boolean,
    case_affected: Boolean,
    bginfo: String,
    procedural_path: String,
    error_msg: String,
    other_info: String,
    otherupdates: [],
    updated_at: { type: Date, default: Date.now }
    updates: [{ _id: ObjectId(), created: {type: Date, default: Date.now}, createdby: String, workingteam: String, status: String, responsibleteam: String, reason: String, priority: String, update: String}]
});

var incident = mongoose.model('incident', incidentSchema, 'incident');
module.exports = incident;