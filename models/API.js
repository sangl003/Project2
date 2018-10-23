module.exports = (sequelize, DataTypes) => {
  const API = sequelize.define('API', {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.TEXT,
  });
  return API;
};
