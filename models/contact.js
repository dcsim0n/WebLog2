'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    time: DataTypes.STRING,
    operator: DataTypes.STRING,
    dxCall: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
    Contact.hasMany( models.ContactField )
    Contact.belongsToMany( models.Field, { through: models.ContactField } )
  };
  return Contact;
};