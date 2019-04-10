'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Surveys', [{
      question1: "What Makes You Unique? ",
      question2: "What’s Your Favorite Place on Earth?" ,
      question3: "What do your days off look like?" ,
      question4: "What’s the best meal you’ve ever had?" ,
      question5: "What’s your most valuable possession?" ,
      },
      {
        question1: "What Makes You Unique? ",
        question2: "What’s Your Favorite Place on Earth?" ,
        question3: "What do your days off look like?" ,
        question4: "What’s the best meal you’ve ever had?" ,
        question5: "What’s your most valuable possession?" ,
      }


    
    ], {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Surveys', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
