'use strict';
module.exports = (sequelize, DataTypes) => {
  const FieldType = sequelize.define('FieldType', {
    desc: DataTypes.STRING
  }, {});
  FieldType.associate = function(models) {
    // associations can be defined here
    FieldType.hasMany( models.Fields );
  };
  return FieldType;

};