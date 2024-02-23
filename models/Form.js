// models/Form.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Form extends Model {}

Form.init(
  {{
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'form',
  }
);

module.exports = Form;
