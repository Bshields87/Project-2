
module.exports = function (sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    question1: DataTypes.TEXT,
    question2: DataTypes.TEXT,
    question3: DataTypes.TEXT,
    question4: DataTypes.TEXT,
    question5: DataTypes.TEXT,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  
  });
  Survey.associate = function (models) {
    // We're saying that a Survey should belong to an Author
    // A Survey can't be created without an Author due to the foreign key constraint
    Survey.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  //   Survey.associate = function (models) {
  //     console.log(models)
  //     // Associating Survey with Posts
  //     // When an Survey is deleted, also delete any associated Posts
  //     Survey.hasMany(models.Answers, {
  //       onDelete: "cascade"
  //     });
  
  //   };
};
  return Survey;
 

}









