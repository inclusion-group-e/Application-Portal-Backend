'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Form', [
      {
        title: 'Inclusion Winter 2020',
        question1: "Why do you want to be in Inclusion?",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Form', null, {});
  }
};
