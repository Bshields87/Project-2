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
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
   
    });
    // Survey.associate = function(models) {
    //   // We're saying that a Survey should belong to an Author
    //   // A Survey can't be created without an Author due to the foreign key constraint
    //   Survey.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    //return Survey;
    Survey.belongsTo(User)
    Survey.sync();
  


    module.exports = Survey;
