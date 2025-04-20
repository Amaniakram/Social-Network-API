import express from "express";
import apiRoutes from "./api/index.js";

const router=express.Router();

router.use('/api',apiRoutes);


// 404 Handler
router.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

export default router;