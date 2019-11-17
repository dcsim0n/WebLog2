/**
|--------------------------------------------------
| Controller for managing Contacts
| Dana Simmons 2019
|--------------------------------------------------
*/

const db = require('../models/index');

exports.allContacts = ( req, res, next ) => {
  let fields;
  db.Field.findAll( {where: {visible: true }})
  .then( f => {
    fields = f;

    res.render('index',{
      title: 'Contact Log',
      fields,
      contacts: []
    })
  })
}