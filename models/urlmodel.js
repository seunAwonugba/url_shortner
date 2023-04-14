'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UrlModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UrlModel.init({
    urlCode: DataTypes.STRING,
    originalUrl: DataTypes.STRING,
    shortUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UrlModel',
  });
  return UrlModel;
};