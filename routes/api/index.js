import thoughtRoutes from "./thoughtRoutes.js";
import userRoutes from "./userRoutes.js";
import express from "express";

const router=express.Router();
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;