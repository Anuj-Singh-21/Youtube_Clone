import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  addVideo,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.controller.js";

const router = express.Router();

// Create Video
router.post("/", verifyToken, addVideo);
// Delete Video
router.put("/:id", verifyToken, updateVideo);
// Update Video
router.delete("/:id", verifyToken, deleteVideo);
// Get Video
router.get("/find/:id", getVideo);
// Increase Views when User Visits video page
router.put("/view/:id");
// Get Random videos on home page
router.get("/random", random);
// Get Trending Videos
router.get("/trend", trend);
// Get Videos from Subscribed Channels
router.get("/sub", verifyToken, sub);
// Get Videos by tags
router.get("/tags", getByTag);
// Get videos by search
router.get("/search", search);

export default router;
