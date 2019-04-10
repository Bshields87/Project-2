var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection");

//var Survey = require("./surveys")


    var User = sequelize.define("User", {
      email: Sequelize.STRING,
      fullname: Sequelize.STRING,
      age: Sequelize.INTEGER,
      photo: Sequelize.STRING,
      userName: Sequelize.STRING,
      password: Sequelize.STRING,
      bio: Sequelize.STRING,
      datingPreference: Sequelize.STRING,
      location: Sequelize.STRING,
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
     
    });

    // User.associate = function(models) {
    //   // Associating User with Posts
    //   // When an User is deleted, also delete any associated Posts
    //   User.hasMany(models.Survey, {
    //     onDelete: "cascade"
    //   });
      
    // };
  
  // User.hasOne(Survey)
    User.sync();
    module.exports = User;
