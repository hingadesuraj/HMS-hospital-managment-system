import express from "express";
import { config } from "dotenv";
import  connectToDb  from "./db.js";

const app = express();
config({ path: "./config/config.env" }); // setup dotenv file 
connectToDb();

// console.log(process.env.PORT)


export default app;
