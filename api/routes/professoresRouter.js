import express from 'express';
import getByEmail from '../controller/professoresController.js';
// import validateToken from '../middlewares/validateToken';

const router = express.Router();

// router.get('/', professoresController.getAll);
router.get('/:email', getByEmail);

export default router;
