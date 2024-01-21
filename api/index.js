

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.route.js';


dotenv.config();
const app = express();

app.use(express.json());
const PORT = 3000;
mongoose.connect(process.env.MONGO             
).then(() => {
    console.log('MongoDB Connected');
})
app.use("/api/user" , userRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT , () => {
    console.log(`server running on port ${PORT}`);
});

