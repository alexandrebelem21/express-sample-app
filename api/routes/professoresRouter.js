// const express = require('express');
// const professoresController = require('../controller/professoresController');
// // const validateToken = require('../middlewares/validateToken');

// const professoresRouter = express.Router();

// // professoresRouter.get('/', validateToken, professoresController.getAll);
// professoresRouter.get('/:email', professoresController.getByEmail);
// // professoresRouter.post('/', validateToken, professoresController.create);

// module.exports = professoresRouter;


const express = require('express');
const professoresController = require('../controller/professoresController');
// const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', professoresController.getAll);
router.get('/:email', professoresController.getByEmail);

module.exports = router;
