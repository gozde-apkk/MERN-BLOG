

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.route.js';
import postRouter from './routes/post.route.js'



dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
const PORT = 3000;
mongoose.connect(process.env.MONGO             
).then(() => {
    console.log('MongoDB Connected');
})
app.use("/api/user" , userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRouter);


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