

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';

dotenv.config();
const app = express();
const PORT = 3000;
mongoose.connect(process.env.MONGO             
).then(() => {
    console.log('MongoDB Connected');
})
app.use("/api/user" , userRoutes)

app.listen(PORT , () => {
    console.log(`server running on port ${PORT}`);
});

