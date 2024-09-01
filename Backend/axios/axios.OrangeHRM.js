
// #### AXIOS OpenCRX

const { RSA_NO_PADDING } = require('constants');
const axios = require('axios'); 
const qs = require('querystring');

// AUTHENTICATION

const baseUrl = 'https://sepp-hrm.inf.h-brs.de/symfony/web/index.php'; 
let accessToken = null; 

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    }
};

async function getOrangeHRMToken () {
    const body = qs.stringify({     
        client_id: 'api_oauth_id',     
        client_secret: 'oauth_secret',     
        grant_type: 'password',     
        username: 'demouser',     
        password: '*Safb02da42Demo$' 
    });

    const res = await axios.post(`${baseUrl}/oauth/issueToken`, body, config); 
    
    if (res.data.error) {     
        throw Error(res.data.error); 
    }

   accessToken = res.data['access_token']; 
   config.headers.Authorization = `Bearer ${accessToken}`;
}


// R - GET ALL SALESMEN FROM OrangeHRM
async function getAllEmployee (req, res) {

    const contacts = await axios.get(`${baseUrl}/api/v1/employee/search`, config)
    .then(contacts => { 
        console.log(contacts.data)
        res.json(contacts.data);
        // res.status(200).json(contacts.data).send("All Employee data fetched from OrangeHRM");
    })
    .catch(err => console.log(err));      
}


// R - GET SALESMAN BY ID FROM OrangeHRM
async function getEmployeeById (req, res) {

    const contact = await axios.get(`${baseUrl}/api/v1/employee/${req.params.id}`, config)
    .then(contact => { 
        console.log(contact.data)
        res.json(contact.data);
        // res.status(200).json(contact.data).send(`Employee data fetched from OrangeHRM by ID: ${req.params.id}`);
    }) 
    .catch(err => console.log(err));
}


// R - GET SALESMAN BONUS SALARY BY ID FROM OrangeHRM
async function getEmployeeBonusSalary (req, res) {

    const bonus = await axios.get(`${baseUrl}/api/v1/employee/${req.params.id}/bonussalary`, config)
    .then(bonus => { 
        console.log(bonus.data)
        res.json(bonus.data);
        // res.status(200).json(bonus.data).send(`Employee Bonus Salary fetched from OrangeHRM by ID: ${req.params.id}`);
    }) 
    .catch(err => console.log(err));
}

// C - POST SALESMAN BONUS SALARY BY ID FROM OrangeHRM
async function postEmployeeBonusSalary (id, body) {
    console.log(`[POST] Salesman Bonus Salary by ID:`);
    let bonus = await axios.post(`${baseUrl}/api/v1/employee/search/${id}/bonussalary`, body, config);
    console.log(bonus.data);
    // return bonus.data;
}


// #### EXPORTET METHODS FOR ROUTER

exports.getAllSalesman = function(req, res) {
    getOrangeHRMToken()
    .then(() => getAllEmployee(req, res))
    .catch(err => console.log(err));
}


exports.getSalesmanById = function(req, res) {
    getOrangeHRMToken()
    .then(() => getEmployeeById(req, res))
    .catch(err => console.log(err));
}

exports.getSalesmanBonusSalary = function(req, res) {
    getOrangeHRMToken()
    .then(() => getEmployeeBonusSalary(req, res))
    .catch(err => console.log(err));
}

exports.postSalesmanBonusSalary = function(req, res, body) {
    console.log("Bonus Salary posted")
    /*
    getOrangeHRMToken()
    .then(() => postEmloyeeBonusSalary())
    .catch(err => console.log(err));
    */
}
