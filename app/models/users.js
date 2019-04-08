module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      photo: DataTypes.STRING,
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      bio: DataTypes.STRING,
      datingPreference: DataTypes.STRING
    });
    return User;
  };