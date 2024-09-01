
// #### ROUTER FOR AXIOS OPENCRX

const express = require('express');
const router = express.Router();

const axiosOrangeHRM = require('./../axios/axios.OrangeHRM');

router
    .route('/')
    .get(axiosOrangeHRM.getAllSalesman);
    

router
    .route('/:id')
    .get(axiosOrangeHRM.getSalesmanById);


router
    .route('/:id/bonussalary')
    .get(axiosOrangeHRM.getSalesmanBonusSalary)
    .post(axiosOrangeHRM.postSalesmanBonusSalary)


module.exports = router;