import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import errorHandler from './middlewares/error.js';
import videoRoutes from './routes/video.js';
import signUploadRoutes from './routes/sign-upload.js';
import { connectDB } from './config/db.js';
dotenv.config();
const app=express();
const port= 8000;

//middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use("/api/videos",videoRoutes);
app.use("/api/sign-upload",signUploadRoutes);

app.listen(port ,()=>{
    connectDB
    console.log("Server started listening on port",port);
})