
/*
** MONGODB DATABASE SCHEMA AND MODULE = Mongoose works with modules and schemas to define how Object and Data in the database should look like
*/


// #### IMPORT MONGOOSE PACKAGE
const mongoose = require('mongoose');

// #### CREATE MONGOOSE SCHEMA (schema is the layout)
const performanceRecordSchema = mongoose.Schema({  // JavaScript Object of how my PerformanceRecord should look like
    
    salesmanId:     { type: Number},
    recordId:       { type: Number},

    leadershipCompetence:       { targetValue: { type: Number}, actualValue: { type: Number}, earnedBonus: { type: Number} },
    opennesToEmployee:          { targetValue: { type: Number}, actualValue: { type: Number}, earnedBonus: { type: Number} },
    socialBehaviourToEmployee:  { targetValue: { type: Number}, actualValue: { type: Number}, earnedBonus: { type: Number} },
    attitudeTowardsClient:      { targetValue: { type: Number}, actualValue: { type: Number}, earnedBonus: { type: Number} },
    communicationSkills:        { targetValue: { type: Number}, actualValue: { type: Number}, earnedBonus: { type: Number} },
    integrityToCompany:         { targetValue: { type: Number}, actualValue: { type: Number}, earnedBonus: { type: Number} },

    remarks:     { type: String, required: [true, 'A Performance Record must contain a remark']},
    socialBonus: { type: Number },
    year:        { type : Date, default: Date.now }

}); 

// #### Export this Schema wrapped into a Model
const Record = mongoose.model('performanceRecords', performanceRecordSchema);   // First Argument = Name of the model ( = Collection name in DB)
module.exports = Record;                                                        // Second Argument = which schema to export
