module.exports = function (sequelize, DataTypes) {
    var Answer = sequelize.define("Answer", {
      answer1: DataTypes.TEXT,
      answer2: DataTypes.TEXT,
      answer3: DataTypes.TEXT,
      answer4: DataTypes.TEXT,
      answer5: DataTypes.TEXT,
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    
    });
    Answer.associate = function (models) {
      // We're saying that a Survey should belong to an Author
      // A Survey can't be created without an Author due to the foreign key constraint
      Answer.belongsTo(models.Survey, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    // Answer.associate = function (models) {
    //   // We're saying that a Answer should belong to an Author
    //   // A Answer can't be created without an Author due to the foreign key constraint
    //   Answer.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
      // });
    
    
 // };
  return Answer;
};
  
  
  
  
  