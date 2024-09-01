
/*
** MONGODB DATABASE SCHEMA AND MODULE = Mongoose works with modules and schemas to define how Object and Data in the database should look like
*/


// #### IMPORT MONGOOSE PACKAGE
const mongoose = require('mongoose');

// #### CREATE MONGOOSE SCHEMA (schema is the layout)
const salesmanSchema = mongoose.Schema({  // JavaScript Object of how my Salesman should look like
    salesmanId: { type: Number, required: [true, 'A employee must have an ID']},
    firstname:  { type: String, required: [true, 'A employee must have a firstname']},
    lastname:   { type: String, required: [true, 'A employee must have a lastname']}
}); 

// #### Export this Schema wrapped into a Model
const Salesman = mongoose.model('Salesman', salesmanSchema);   // First Argument = Name of the model ( = Collection name in DB) .. Second Argument = which schema to export
module.exports = Salesman;