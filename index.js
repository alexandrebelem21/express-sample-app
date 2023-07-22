import express from 'express';
import cors from 'cors';
import router from './api/routes/professoresRouter.js'
const app = express();

app.use(cors());
app.use(express.json());
// console.log(teste);
app.use('/professor', router); // Registra as rotas do módulo professoresRouter

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
