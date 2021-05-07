'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
        await queryInterface.bulkInsert('teachers', [{
          first_name: 'Somsri',
          last_name: 'JunOcha',
          age: "23",
          gender:"femel",
          salary: 25000,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});*/

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('teachers', null, {});

  }
};
