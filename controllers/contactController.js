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
    return db.Contact.findAll({include: [ db.ContactField ]});
  })
  .then( contacts => {
    res.render('index',{
      title: 'Contact Log',
      fields,
      contacts
    })
  })
}

exports.createContact = ( req, res, next ) => {
  const contact_fields = req.body.contact_fields;

  console.log('req.body', req.body);
  let contact;
  db.Contact.create( {
      date: req.body.date,
      operator: req.body.operator,
      dxCall: req.body.dxCall,
      ContactFields: Object.keys(contact_fields).map( cf => {
        return {
          value: contact_fields[cf],
          FieldId: parseInt( cf, 10 ),
        };
      })
  },{include: [db.ContactField]})
  .then( c => {
    res.redirect('/');
  })
  .catch( err => {
    console.log('err', err)

  })
}