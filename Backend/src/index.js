import express from 'express';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
import {connectDB} from './lib/db.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const PORT = process.env.PORT ;

app.use(express.json());



app.use ("/api/auth", authRoutes);
app.use(cookieParser());


connectDB()
  .then(() => {
    app.listen(5001, () => {
      console.log("🚀 Server running on port 5001");
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB", err);
    process.exit(1);
  });
// app.listen(PORT, () => {
//   console.log('Server is running on port:'+ PORT);
//   connectDB();
// });