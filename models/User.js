/* eslint-disable indent */
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      },
    },
    attending: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false 
    },
    dietary_preference: {
      type: DataTypes.TEXT,
      allowNull: false 
    },
    plus_one: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false 
    },
    guest_dietary_preference: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);
  
  
module.exports = User;
