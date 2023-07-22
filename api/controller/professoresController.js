import  getAllSs from '../service/professoresService.js';

// const getByEmail = async (req, res) => {
//   try {
//     const { email } = req.params;
//     const usuario = await getByEmailS(email);
//     res.json(usuario);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erro ao buscar o usuário.' });
//   }
// };

const getAll = async (req, res) => {
  try {
    const professores = await getAllSs();
    res.json(professores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os professores.' });
  }
};

export {getAll};
