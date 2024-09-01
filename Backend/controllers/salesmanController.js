
// #### SALESMAN CONTROLLER

const Salesman = require('./../models/salesmanModel');   // imports mongoose model / schema

// #### MONGOONSE

const mongoose = require('mongoose');


// C
// WICHTIG: create später nicht erlaubt in der anwendung -> deaktiviert
exports.createSalesman = (req, res) => {      
    
    // create new Salesman
    const salesman = new Salesman({
        salesmanId: req.body.sid,
        firstname:  req.body.firstname,
        lastname:   req.body.lastname
    });

    // save new Salesman to DB
    salesman.save()
        .then(result => {
            console.log(result)
            res.status(200).send("Salesman created and saved in database");
        })
        .catch(err => console.log(err));
        
};

// R
// WICHTIG: read nicht mehr aus MongoDB sondern von OrangeHRM -> deaktiviert
exports.getAllSalesman = (req, res) => {    
    
    // find all Salesman
    Salesman.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
    });
    
};

// WICHTIG: read nicht mehr aus MongoDB sondern von OrangeHRM -> deaktiviert
exports.getSalesman = (req, res) => {
    
    // find specific Salesman by ID
    Salesman.find({sid: req.params.id})
        .then(doc => {
            if(!doc) { return res.status(404).end(); }
            return res.status(200).json(doc);
        })
        .catch(err => console.log(err));
   
};

// U
// WICHTIG: read nicht mehr mit MongoDB sondern  OrangeHRM -> deaktiviert
exports.updateSalesman = (req, res) => {

    // update a specific Salesman
    Salesman.findOneAndUpdate({sid: req.params.id}, {firstname : req.body.firstname, lastname: req.body.lastname}, function(err) {
        if(err) {
            console.log(err);
            return res.status(500).send("No Salesman with this ID found");
        }

        res.status(200).send("Salesman updated");
    })
        
};

// D
// WICHTIG: delete später nicht erlaubt in der anwendung -> deaktiviert   
exports.deleteSalesman = (req, res) => {        

    // delete a specific Salesman
    Salesman.findOneAndRemove({sid: req.params.id}, function(err) {
        if(err) {
            console.log(err);
            return res.status(500).send("No Salesman with this ID found");
        }

        return res.status(200).send("Salesman deleted");
    })
        
};


// FUNKTIONEN MIT TRY, FETCH, PROMISE, THEN WERDEN IN VORLESUNG 6 AUF YT  AB MINUTE 2:08:00 BEHANDELT 