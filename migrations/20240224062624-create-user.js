'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type:DataTypes.STRING,
        default:'0785556465'
      },
      role: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER,
        default: '12'
      },
    description: {
        type: DataTypes.STRING,
        default: 'admin '
        
      },
      password: {
        type: DataTypes.STRING,
        default: '1111'
      },
      companyName: {
        type: DataTypes.STRING,
        default: 'jb company' 
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('users');
  }
};