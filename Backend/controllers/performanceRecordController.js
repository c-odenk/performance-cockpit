
// #### PERFORMANCE RECORDS CONTROLLER

const Record = require('../models/performanceRecordModel');

// #### MONGOONSE

const mongoose = require('mongoose');

// C
exports.createRecord = (req, res) => { 
   
    console.log("Create Performance Record")
    
    const performanceRecord = new Record({

        salesmanId:     req.body.salesmanId,
        recordId:       req.body.recordId,

        leadershipCompetence: {
            targetValue: 4,
            actualValue: req.body.leadershipCompetenceActualValue,
            earnedBonus: Math.round(26 / 4 * req.body.leadershipCompetenceActualValue)
        },

        opennesToEmployee: {
            targetValue: 4,
            actualValue: req.body.opennesToEmployeeActualValue,
            earnedBonus: Math.round(26 / 4 * req.body.opennesToEmployeeActualValue)
        },

        socialBehaviourToEmployee: {
            targetValue: 4,
            actualValue: req.body.socialBehaviourToEmployeeActualValue,
            earnedBonus: Math.round(80 / 4 * req.body.socialBehaviourToEmployeeActualValue)
        },

        attitudeTowardsClient: {
            targetValue: 4,
            actualValue: req.body.attitudeTowardsClientActualValue,
            earnedBonus: Math.round(26 / 4 * req.body.attitudeTowardsClientActualValue)
        },

        communicationSkills: {
            targetValue: 4,
            actualValue: req.body.communicationSkillsActualValue,
            earnedBonus: Math.round(50 / 4 * req.body.communicationSkillsActualValue)
        },

        integrityToCompany: {
            targetValue: 4,
            actualValue: req.body.integrityToCompanyActualValue,
            earnedBonus: Math.round(50 / 4 * req.body.integrityToCompanyActualValue)
        },

        remarks: req.body.remarks,

        socialBonus:  Math.round((26 / 4 * parseInt(req.body.leadershipCompetenceActualValue))) + 
                      Math.round((26 / 4 * parseInt(req.body.opennesToEmployeeActualValue))) +
                      Math.round((80 / 4 * parseInt(req.body.socialBehaviourToEmployeeActualValue))) +
                      Math.round((26 / 4 * parseInt(req.body.attitudeTowardsClientActualValue))) +
                      Math.round((50 / 4 * parseInt(req.body.communicationSkillsActualValue))) +
                      Math.round((50 / 4 * parseInt(req.body.integrityToCompanyActualValue))),

    });

    // save new Performance Record to DB
    performanceRecord.save()
        .then(result => {
            console.log(result)
            res.status(200).send("Performance Record created and saved in database");
        })
        .catch(err => console.log(err));

};

// R
exports.getAllRecord = (req, res) => {

    // find all Performance Record
    Record.find({}, function(err, result) {
        if (err) {
          console.log(err)
        } else {
          res.json(result);
          // res.status(200).send("List of all Performance Record from database");
        }
    });
};

exports.getRecord = (req, res) => {

    // find one Performance Record
    Record.find({recordId: req.params.id})
    .then(record => {
        if(!record) {
            return res.status(404).send("No Record found").end();
        } else {
            res.json(record);
        }
    })
};

exports.getAllEmployeeRecords = (req, res) => {

    // find one Performance Record
    Record.find({recordId: req.params.id})
    .then(record => {
        if(!record) {
            return res.status(404).send("No Record found").end();
        } else {
            res.json(record);
        }
    })
};

// U
exports.updateRecord = (req, res) => {
    res.status(200).send("Performance Record updated");
};

// D
exports.deleteRecord = (req, res) => {
    console.log("Salesman deleted");
    res.status(204).send("Performance Record deleted");
};

/*
** Über exports. werden einzelne Methoden für andere Java Files zur verfügung gestellt !
*/