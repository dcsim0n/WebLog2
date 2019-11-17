'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('FieldTypes',[
      { desc: 'string', createdAt: new Date(), updatedAt: new Date() },
      { desc: 'integer', createdAt: new Date(), updatedAt: new Date() },
      { desc: 'callsign', createdAt: new Date(), updatedAt: new Date() },
      { desc: 'rst', createdAt: new Date(), updatedAt: new Date() },
      { desc: 'utc time', createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
