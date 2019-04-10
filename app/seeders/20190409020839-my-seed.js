'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      
      email: 'demo@demo.com',
      fullname: 'John Doe',
      age: 32,
      photo: "https://media.thetab.com/blogs.dir/279/files/2018/06/person-people-human-39.jpg",
      userName: "johnnyboy69",
      password: "GettinLaid88",
      bio: "Hot guy on the beach",
      datingPreference: "Female",
      location: "Oakland, California"
      
    },
    {
      email: 'demo2@demo.com',
      fullname: 'Jane Doe',
      age: 26,
      photo: "https://i.pinimg.com/originals/be/30/67/be30673ee820adc2f4bdd8e2fa8d6a8d.jpg",
      userName: "janeygirl69",
      password: "GettinLaid88",
      bio: "Hot girl on the beach",
      datingPreference: "Male",
      location: "Oakland, California"
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
