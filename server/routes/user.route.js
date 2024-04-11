import express from "express";
import {
  getUser,
  updateUser,
  deleteUser,
  subscribeUser,
  unsubscribeUser,
  likeVideo,
  dislikeVideo,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Update User
router.put("/:id", verifyToken, updateUser);
// Delete User
router.delete("/:id", verifyToken, deleteUser);
// Get User
router.get("/find/:id", getUser);
// Subscribe a User
router.put("/sub/:id", verifyToken, subscribeUser);
// Unsubscribe a User
router.put("/unsub/:id", verifyToken, unsubscribeUser);
// Like Video
router.put("/like/:videoId", verifyToken, likeVideo);
// Dislike Video
router.put("/dislike/:videoId", verifyToken, dislikeVideo);

export default router;
