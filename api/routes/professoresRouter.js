import express from 'express';
import  { getAll, getByEmail} from '../controller/professoresController.js';
// import validateToken from '../middlewares/validateToken';

const router = express.Router();

router.get('/', getAll);
router.get('/:email', getByEmail);

export default router;
