import { Sequelize } from "sequelize";

const db = new Sequelize('upload_db', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
})

const db1 = new Sequelize('auth_db', 'root','',{
    host: 'localhost',
    dialect: "mysql"
});

export { db, db1 };