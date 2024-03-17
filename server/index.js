import mongoose, { mongo } from "mongoose";
import Express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = Express();
const Port = process.env.PORT || 3000;
const MongoConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((error) => {
      console.log("There Was an Error connecting to database");
      console.log(error.message);
    });
};

app.listen(Port, () => {
  MongoConnect();
  console.log(`Server Running on Port ${Port}`);
});
