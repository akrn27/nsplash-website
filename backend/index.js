import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

import { db1 } from "./config/Database.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

try {
    await db1.authenticate();
    console.log('Database Connected...');
}catch(error){
    console.log(error)
}

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser())
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(5000, () => console.log('Server Up and Running...'));