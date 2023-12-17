import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

/* CONFIGURATIONS */
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


/* MONGODB SETUP */
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(`${error} did not work`);
  });


/* ROUTES */
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

/* MIDDLEWARES */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error!";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});