// const { Usuario, Cursos } = require('../../database/models');

// // const getAll = () => Professor.findAll();

// // const getById = async (id, userEmail) => {
// //   try {
// //     const user = await getByUserEmail({ email: userEmail });
// //     const professor = await Professor.findByPk(id, {
// //       include: [
// //         {
// //           model: Cursos,
// //           as: 'cursos',
// //           include: [
// //             {
// //               model: Materia,
// //               as: 'materias',
// //               include: [
// //                 {
// //                   model: Aula,
// //                   as: 'aulas',
// //                 },
// //               ],
// //             },
// //           ],
// //         },
// //       ],
// //     });
// //     return professor;
// //   } catch (error) {
// //     throw new Error('Failed to fetch professor');
// //   }
// // };

// const getByUserEmail = async (email) => {
//   console.log('servicemeail', email);
//   try {
//     const user = await Usuario.findOne({
//       where: { email },
//     });
//     const professor = await Usuario.findByPk(user.id, 
//       {
//       include: [
//         {
//           model: Cursos,
//           as: 'cursos',
//       //     include: [
//       //       {
//       //         model: Materia,
//       //         as: 'materias',
//       //         include: [
//       //           {
//       //             model: Aula,
//       //             as: 'aulas',
//       //           },
//       //         ],
//       //       },
//       //     ],
//         },
//       ],
//     });
// // console.log(professor);
//     if (!user) {
//       throw new Error('User not found');
//     }
//     return user;
//   } catch (error) {
//     throw new Error('Failed to fetch user');
//   }
// };


// // const create = async (nome) => {
// //   try {
// //     const novoProfessor = await Professor.create({ nome });
// //     return novoProfessor;
// //   } catch (error) {
// //     throw new Error('Erro ao criar o professor.');
// //   }
// // };

// module.exports = {  getByUserEmail};

const { Usuario, Curso, Materia, Aula } = require('../../database/models');

const getAll = () => Usuario.findAll();

const getByEmail = async (email) => {
  try {
    const usuario = await Usuario.findOne({
      where: { email },
              include: [
                {
                  model: Curso,
                  as: 'cursos',
                  include: [
                    {
                      model: Materia,
                      as: 'materias',
                      include: [
                        {
                          model: Aula,
                          as: 'aulas',
                        },
                      ],
                    },
                  ],
                },
              ],
    });

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    return usuario;
  } catch (error) {
    throw new Error('Falha ao buscar o usuário');
  }
};

module.exports = { getByEmail, getAll };
