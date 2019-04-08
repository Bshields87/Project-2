var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection");
var User = require("./users")

 var Survey = sequelize.define("Survey", {
      question1: Sequelize.TEXT,
      question2: Sequelize.TEXT,
      question3: Sequelize.TEXT,
      question4: Sequelize.TEXT,
      question5: Sequelize.TEXT,
    });

    Survey.hasOne(User)
    Survey.sync();
  


    module.exports = Survey;