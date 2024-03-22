import mongoose, { mongo } from "mongoose";
import cookieParser from "cookie-parser";
import Express from "express";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";
import VideoRouter from "./routes/video.route.js";
import CommentRouter from "./routes/comment.route.js";
import AuthRouter from "./routes/auth.route.js";
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
app.use(Express.json());
app.use(cookieParser());

app.use("/api/auth", AuthRouter);
app.use("/api/users", UserRouter);
app.use("/api/videos", VideoRouter);
app.use("/api/comments", CommentRouter);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went Wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
