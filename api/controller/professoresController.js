// const professoresService = require('../service/professoresService');

// // const getAll = async (req, res) => {
// //   try {
// //     const professores = await professoresService.getAll();
// //     res.json(professores);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Erro ao buscar os professores.' });
// //   }
// // };

// // const getById = async (req, res) => {
// //   try {
// //     // const { id } = req.params;
// //     const userEmail = req.userEmail; // Obtém o e-mail do usuário autenticado a partir do middleware
// //     const professor = await professoresService.getById(userEmail);
// //     res.json(professor);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Erro ao buscar o professor.' });
// //   }
// // };

// // const create = async (req, res) => {
// //   try {
// //     const { nome } = req.body;
// //     const novoProfessor = await professoresService.create(nome);
// //     res.status(201).json(novoProfessor);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Erro ao criar o professor.' });
// //   }
// // };

// const getByEmail = async (req, res) => {
//   try {
    
//     const  email  = req.params.email;
//     console.log('controle ', email);
//     // Busca o professor pelo email
//     const professor = await professoresService.getByUserEmail(email);
//     console.log('controler', res.json(professor));
//     res.json(professor);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erro ao buscar o professor.' });
//   }
// };

// module.exports = { getByEmail };

const professoresService = require('../service/professoresService');

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

module.exports = { getByEmail, getAll };
