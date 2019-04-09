var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../connection");




    var User = sequelize.define("User", {
      email: Sequelize.STRING,
      fullname: Sequelize.STRING,
      age: Sequelize.INTEGER,
      photo: Sequelize.STRING,
      userName: Sequelize.STRING,
      password: Sequelize.STRING,
      bio: Sequelize.STRING,
      datingPreference: Sequelize.STRING,
      createdAt: {
        field: 'beginTime',
        defaultValue: sequelize.literal('NOW()')
      },
      timestamps: true
    });
    User.sync();
    module.exports = User;