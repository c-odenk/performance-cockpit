
// 0) IMPORTS
const express = require('express');
const app = express();
const cors = require('cors');

const performanceRecordRouter = require('./routes/performanceRecordRoutes');
const openCRXRouter = require('./routes/axios.OpenCRXRoutes');
const orangeHRMRouter = require('./routes/axios.OrangeHRMRoutes');


// #### HANDLER FUNCTION LANDING PAGE
const landing = (req, res) => {  
    res.status(200).send("Welcome from Landing Page");
};

app.use(cors());
app.use(express.json());

// ROUTES
app.use('/salesmen', orangeHRMRouter);
app.use('/records', performanceRecordRouter);
app.use('/customers', openCRXRouter);


app
    .route('/')
    .get(landing);


module.exports = app;