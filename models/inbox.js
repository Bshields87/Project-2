

module.exports = function(sequelize, DataTypes){
    var Message = sequelize.define("Message", {
  from: DataTypes.TEXT,
  body: DataTypes.TEXT,
  post_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW},
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

return Message;
};