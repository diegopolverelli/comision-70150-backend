import { DataTypes } from "sequelize"
// const sequelize = new Sequelize('sqlite::memory:');
import {sequelize} from "../../connDB.js"

export const User = sequelize.define(
  'usuarios',
  {
    // Model attributes are defined here
    // id: {
    //     type: DataTypes.INTEGER
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    // createdAt:{
    //     type: DataTypes.DATE
    // },
    // updatedAt:{
    //     type: DataTypes.DATE
    // },
  },
  {
    // Other model options go here
  },
);

