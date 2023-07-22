import express from 'express';

const teste = express.Router();

teste.get('/', (req, res) => {
  res.send('Choo Choo! Welcome to your Express app 🚅');
});

export default teste;
