import { Sequelize } from "sequelize";
import {db} from "../config/Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('product', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    rating: DataTypes.INTEGER,
}, {
    freezeTableName: true
})

export default Product;

(async() => {
    await db.sync();
})();