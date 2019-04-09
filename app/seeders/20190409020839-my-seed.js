'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      
      email: 'demo@demo.com',
      fullname: 'John Doe',
      age: 32,
      userName: "johnnyboy69",
      password: "GettinLaid88",
      
    },
    {
      email: 'demo2@demo.com',
      fullname: 'Jane Doe',
      age: 26,
      userName: "janeygirl69",
      password: "GettinLaid88"
    },
  
  ], {});
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
    return queryInterface.bulkDelete('Users', null, {});
  
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
