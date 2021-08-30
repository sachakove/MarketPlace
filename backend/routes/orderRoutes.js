import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createOrder,
  getOrdersByUserId,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").post(protect, createOrder);
router.route("/").get(protect, getOrdersByUserId);

export default router;
