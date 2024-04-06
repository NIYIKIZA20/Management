'use strict';
const { date } = require('joi');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Model) {
      // define association here
      //this.belongsTo(company);
    }
  }
  user.init({
    name:{
       type:DataTypes.STRING,
       allowNull:false  
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false  
    },
    phone: {
      type: DataTypes.STRING,
      default: '0785556465' 
    },
    role: {
      type: DataTypes.STRING,
      default: 'production manager' 
    },
    age: {
      type: DataTypes.INTEGER,
      default:22
    },
    description: {
      type: DataTypes.STRING,
      default: 'user' 
    },
    password: {
      type: DataTypes.STRING,
      default: '1111' 
    },
    companyName: {
      type: DataTypes.STRING,
      default: 'sayHi'
    },
      
  }, {
    sequelize,
    tableName:'users',
    modelName: 'user',
  });
  return user;
};