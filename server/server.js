import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js"
import userRoute from "./routes/userRoute.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/auth', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});