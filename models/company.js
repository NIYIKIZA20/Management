'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Model) {
      // define association here
     // this.hasMany(user);
    }
  }
  company.init({
    compName: DataTypes.STRING
  }, {
    sequelize,
    tableName:'companies',
    modelName: 'company',
  });
  return company;
};