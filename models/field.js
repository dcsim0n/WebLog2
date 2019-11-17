'use strict';
module.exports = (sequelize, DataTypes) => {
  const Field = sequelize.define('Field', {
    name: DataTypes.STRING,
    visible: DataTypes.BOOLEAN,
    order: DataTypes.INTEGER
  }, {});
  Field.associate = function(models) {
    // associations can be defined here
    Field.belongsTo( models.FieldType );
  };
  return Field;
};