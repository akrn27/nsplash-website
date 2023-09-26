import { Sequelize } from "sequelize";
import { db1 } from "../config/Database.js";

const {DataTypes} = Sequelize;

const Users = db1.define('users',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
})

export default Users;