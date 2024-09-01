
// #### AXIOS OpenCRX

const axios = require('axios');

const baseUrl = 'http://sepp-crm.inf.h-brs.de/opencrx-rest-CRX';


// AUTHENTICATION
const credentials = {
    username: 'guest',
    password: 'guest'
};

const config = {
    headers: {'Accept': 'application/json'},
    auth: credentials
};


// GET ALL CUSTOMERS FROM OpenCRX
exports.getCustomers = (req, res) => {   

    const contacts = axios.get(`${baseUrl}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account`, config)
                    .then(data => { 
                        console.log(data);
                        res.status(200).send("All Customer data fetched from OpenCRX");
                    })
                    .catch(err => console.log(err));
};


// GET SPECIFIC CUSTOMER FROM OpenCRX BY ID
exports.getCustomerByID = (req, res) => {   

    const contacts = axios.get(`${baseUrl}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account/${req.params.id}`, config)
                    .then(data => { 
                        console.log(data);
                        console.log(`${req.params.id}`);
                        res.status(200).send(`Customer data fetched from OpenCRX by ID: ${req.params.id}`);
                    })
                    .catch(err => console.log(err));
};
