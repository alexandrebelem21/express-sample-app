import * as professoresService from '../service/professoresService.js';

const getByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const usuario = await professoresService.getByEmail(email);
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o usuário.' });
  }
};

const getAll = async (req, res) => {
  try {
    const professores = await professoresService.getAll();
    res.json(professores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os professores.' });
  }
};

export {getAll, getByEmail};
