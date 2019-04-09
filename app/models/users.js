var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection");




    var User = sequelize.define("User", {
      email: Sequelize.STRING,
      fullname: Sequelize.STRING,
      age: Sequelize.INTEGER,
      photo: Sequelize.STRING,
      userName: Sequelize.STRING,
      password: Sequelize.STRING,
      bio: Sequelize.STRING,
      datingPreference: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
     
    });

    console.log("table created")
    User.sync();
    module.exports = User;