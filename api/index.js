

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.route.js';
import postRouter from './routes/post.route.js'
import commentRoutes from './routes/comment.route.js'
import cors from 'cors';
import path from 'path';  


dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({origin : "http://localhost:5173", credentials: true}));

const __directory = path.resolve();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
const PORT = 3000;
mongoose.connect(process.env.MONGO             
).then(() => {
    console.log('MongoDB Connected');
})
app.use("/api/user" , userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client','dist','index.html'));
})
app.listen(PORT , () => {
    console.log(`server running on port ${PORT}`);
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });