const express = require('express');
const cors = require('cors');
const router = require('./api/routes/professoresRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/professor', router); // Registra as rotas do módulo professoresRouter

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
