module.exports = function(sequelize, DataTypes) {
    var Survey = sequelize.define("Survey", {
      question1: DataTypes.TEXT,
      question2: DataTypes.TEXT,
      question3: DataTypes.TEXT,
      question4: DataTypes.TEXT,
      question5: DataTypes.TEXT,
    });
    return Survey;
  };