'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      
      email: 'demo@demo.com',
      fullname: 'John Doe',
      age: 32,
      photo: "https://i.pinimg.com/originals/b6/40/64/b64064fe8fc20db8d5035178f258c32a.jpg",
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
    {
      email: 'demo@demo.com',
      fullname: 'Alex',
      age: 28,
      photo: "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      userName: "alexboy69",
      password: "GettinLaid88",
      bio: "Hot guy on a bike",
      datingPreference: "Male",
      location: "San Francisco, California"
    },
    {
      email: 'demo2@demo.com',
      fullname: 'Alexa',
      age: 32,
      photo: "https://www.playarida.com/wp-content/uploads/2013/07/tumblr_m7evqvqr7x1qg8ddao1_500.jpg",
      userName: "alexagirl69",
      password: "GettinLaid88",
      bio: "Hot girl on a bike",
      datingPreference: "Female",
      location: "San Francisco, California"
    }
  
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
