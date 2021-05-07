'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

   /* await queryInterface.bulkInsert('courses', [
      {
        course_name: 'Math',
        course_dtion: 'This course you will learning about math',
        teacher_course: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        course_name: 'Chemical',
        course_dtion: 'This course you will learning about chemical',
        teacher_course: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ,
      {
        course_name: 'Golang Programming',
        course_dtion: 'This course you will learning about Golang language Programming',
        teacher_course: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});*/

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('courses', null, {});

  }
};
