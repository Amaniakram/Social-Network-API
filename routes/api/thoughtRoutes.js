// routes/thoughtRoutes.js
import express from 'express';
import thoughtController from '../controllers/thoughtController.js';
const router = express.Router();
// Thoughts
router.get('/', thoughtController.getAllThoughts);
router.post('/', thoughtController.createThought);
router.get('/:id', thoughtController.getThoughtById);
router.put('/:id', thoughtController.updateThought);
router.delete('/:id', thoughtController.deleteThought);

// Reactions
router.post('/:id/reactions', thoughtController.addReaction);
router.delete('/:id/reactions/:reactionIndex', thoughtController.deleteReaction);

export default  router;
