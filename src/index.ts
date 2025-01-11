import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import dataRouter from "./routes/dataRoutes";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONODB_URL || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/", dataRouter);

app.get("/", (req, res) => {
  res.send("this is koinx assignment");
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  console.log(`server running at port: http;//localhost:${PORT}}`);
});
