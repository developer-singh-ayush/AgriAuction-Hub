import express from "express";
import Auction from "../models/Auction.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

// Create Auction
router.post("/", protect, async (req, res) => {
  try {
    const auction = await Auction.create({
      title: req.body.title,
      description: req.body.description,
      basePrice: req.body.basePrice,
      image: req.body.image,
      createdBy: req.userId
    });

    res.json(auction);
  } catch (err) {
    res.status(500).json({ message: "Error", err });
  }
});

// Get all auctions
router.get("/", async (req, res) => {
  try {
    const auctions = await Auction.find().populate("createdBy", "name email");
    res.json(auctions);
  } catch (err) {
    res.status(500).json({ message: "Error", err });
  }
});

export default router;
