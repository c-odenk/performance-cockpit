
// #### ROUTER FOR AXIOS OPENCRX

const express = require('express');
const router = express.Router();

const axiosOpenCRX = require('./../axios/axios.OpenCRX');

router
    .route('/')
    .get(axiosOpenCRX.getCustomers);

router
    .route('/:id')
    .get(axiosOpenCRX.getCustomerByID);

module.exports = router;