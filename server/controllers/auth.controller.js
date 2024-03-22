import mongoose from "mongoose";
import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hashedPassword });
    await newUser.save();
    res.status(200).json({ message: "User has been registers Successfully" });
    res.send(newUser);
  } catch (err) {
    next(err);
  }
};
export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "User not Found!"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Invalid User Credintials"));
    // const data = await User.findOne({ name: req.body.name }).select(
    //   "-password"
    // );

    const { password, ...other } = user._doc;
    const token = jwt.sign({ id: user._id }, process.env.JWT);
    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .json(other);
  } catch (err) {
    next(err);
  }
};
