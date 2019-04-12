'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [{
      answer1: "My eyes",
      answer2: "My bed" ,
      answer3: "Art museums and cafes" ,
      answer4: "Muscle tamales" ,
      answer5: "My home" ,
      Surveyid: 1  
    },
    {
      answer1: "My eyes",
      answer2: "My bed" ,
      answer3: "Art museums and cafes" ,
      answer4: "Muscle tamales" ,
      answer5: "My home" ,
      Surveyid: 2  
    },
    {
      answer1: "My eyes",
      answer2: "My bed" ,
      answer3: "Art museums and cafes" ,
      answer4: "Muscle tamales" ,
      answer5: "My home" ,
      Surveyid: 3  
    },
    {
      answer1: "My eyes",
      answer2: "My bed" ,
      answer3: "Art museums and cafes" ,
      answer4: "Muscle tamales" ,
      answer5: "My home" ,
      Surveyid: 4  
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
