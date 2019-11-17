'use strict';
module.exports = (sequelize, DataTypes) => {
  const ContactField = sequelize.define('ContactField', {
    value: DataTypes.STRING,
    FieldId: DataTypes.INTEGER,
    ContactId: DataTypes.INTEGER
  }, {});
  ContactField.associate = function(models) {
    // associations can be defined here
  };
  return ContactField;
};