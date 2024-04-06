import express from "express";
import { config } from "dotenv";
import  connectToDb  from "./db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload"; // use for upload file from file manager
import messageRouter from "./routes/messageRoute.js";
import userRouter from "./routes/userRoute.js";
import appintmentRouter from "./routes/appointmentRoute.js";


const app = express();
config({ path: "./config/config.env" }); // setup dotenv file 

// middleware
app.use(
    cors({
      origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL,process.env.LIVE_FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );// cors policy only access backend for frontend and dashboard url with request
  
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/", 
    })
  );
  

connectToDb();


// console.log(process.env.PORT)

app.use("/api/v1/",messageRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/appointment",appintmentRouter)


export default app;
