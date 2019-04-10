module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING,
    fullname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING,
    datingPreference: DataTypes.STRING,
    location: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }

  });

  User.associate = function (models) {
    console.log(models)
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasOne(models.Survey, {
      onDelete: "cascade"
    });

<<<<<<< HEAD
  };
  return User;
}




=======
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
>>>>>>> 3176fb08ae1b8511c37625e10d75558235623103
