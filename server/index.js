import mongoose from "mongoose";
import Express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = Express();
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server Running on Port ${Port}`);
});
