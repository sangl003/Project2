module.exports = (sequelize, DataTypes) => {
  const Example = sequelize.define('Example', {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.TEXT,
  });
  return Example;
};
