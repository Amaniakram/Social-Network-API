// routes/userRoutes.js
import express from 'express';
import userController from '../controllers/userController.js';
const router = express.Router();

// Routes
router.get('/', userController.getAllUsers); // Fetch all users
router.post('/:id/friends/:friendId', userController.addFriend); // Add a friend to a user
router.get('/:id', userController.getUserById); // Fetch a user by ID
router.put('/:id', userController.updateUser); // Update a user by ID
router.delete('/:id/friends/:friendId', userController.removeFriend); // Remove a friend from a user
export default router;
