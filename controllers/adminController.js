/**
|--------------------------------------------------
| Administer settings, users, and contact fields
| 2019 Dana Simmons
|--------------------------------------------------
*/

const db = require('../models/index');

// GET /admin
exports.adminPage = function(req, res, next) {
  let fields
  let fieldTypes
  db.Field.findAll({include: [ {model: db.FieldType} ]})
  .then( f => {
    fields = f
    return db.FieldType.findAll();
  })
  .then( types =>{
    fieldTypes = types
  //  return Setting.findAll();
  //})
  //.then( settings =>{
    console.log('fields', fields)
    res.render('admin', { 
      title: 'Admin Settings',
      fields,
      fieldTypes,
  //    settings  
    });
  })
  .catch( err =>{
    console.log( err )
  })
}

// POST /field
exports.createField = ( req, res, next ) =>{
  const field = req.body
  console.log("Creating field: ", field);
  db.Field.max('order')
  .then( max_order =>{
    field.visible=true; //visibile by default
    field.order = max_order + 1;
    return db.Field.create(field)
  })
  .then( field =>{
    res.redirect('/admin');
  })
}