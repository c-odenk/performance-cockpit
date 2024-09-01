// #### ROUTER FOR PERFORMANCE RECORDS

const express = require('express');
const router = express.Router();

const performanceRecordController = require('../controllers/performanceRecordController');

router
    .route('/')
    .get(performanceRecordController.getAllRecord)
    .post(performanceRecordController.createRecord);

router
    .route('/:id')
    .get(performanceRecordController.getRecord)
    .patch(performanceRecordController.updateRecord)
    .delete(performanceRecordController.deleteRecord);

module.exports = router;