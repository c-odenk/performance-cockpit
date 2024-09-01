
// #### ROUTER FOR SALESMAN

const express = require('express');
const router = express.Router();

const salesmanController = require('./../controllers/salesmanController');


router
    .route('/')
    .get(salesmanController.getAllSalesman)
    .post(salesmanController.createSalesman);

router
    .route('/:id')
    .get(salesmanController.getSalesman)
    .patch(salesmanController.updateSalesman)
    .delete(salesmanController.deleteSalesman);

module.exports = router;