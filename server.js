import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/dbConnection.js";
import { BASE_URL } from "./utils/constant.js";
import { AdminRouter } from "./api/routes/admin/adminRouter.js";

dotenv.config();
const app = express();
const DATABASE_URL = process.env.DATABASE_URL;

//Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//MongoDB Connections
connectDB(DATABASE_URL);

// Routes
app.use(`${BASE_URL}`, AdminRouter);

//Server Listen
app.listen(5000, () => {
  console.log(`Server is running on localhost:5000 `);
});
