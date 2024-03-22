import { createError } from "../error.js";
import { User } from "../models/user.model.js";

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      ).select("-password");
      res.status(200).json({ updatedUser });
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only delete your account"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "User Deleted Successfylly" });
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only update your account"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    return res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

export const subscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    const channel = await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json(`Subscribed to Channel ${channel.name}`);
  } catch (error) {
    next(error);
  }
};

export const unsubscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    const channel = await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json(`Unsubscribed to Channel ${channel.name}`);
  } catch (error) {
    next(error);
  }
};

export const likeVideo = async (req, res, next) => {};

export const dislikeVideo = async (req, res, next) => {};
