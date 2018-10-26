module.exports = (sequelize, DataTypes) => {
  const API = sequelize.define('API', {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.TEXT,
    WebsiteURL: DataTypes.TEXT,
    Authentication: DataTypes.TEXT,
    OverallRating: DataTypes.INTEGER,
    Documentation: DataTypes.INTEGER,
    Easy: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });
  return API;
};
