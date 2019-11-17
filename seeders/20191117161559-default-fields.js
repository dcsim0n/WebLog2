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
    return queryInterface.bulkInsert('Fields',[
      { name: 'RX RST', visible: true, order:0,fieldTypeId: 4, createdAt: new Date(), updatedAt: new Date()  },
      { name: 'TX RST', visible: true, order:1,fieldTypeId: 4, createdAt: new Date(), updatedAt: new Date()  }
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
