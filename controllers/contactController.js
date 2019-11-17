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
    return db.Contact.findAll({
      include: [ { model: db.ContactField, include: [ db.Field ]} ], 
      //FIX-ME: ordering is done by Id here, we have an 'order' column that seems to be ignored due to it's name
      order: [[ db.ContactField, 'FieldId', 'ASC' ]]
    });
  })
  .then( contacts => {
    //console.log(contacts[2].ContactFields)
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
      time: req.body.time,
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