import usuariosModel from '../../database/models/usuarios.js';

const getAll = () => usuariosModel.findAll();

const getByEmail = async (email) => {
  console.log('olaa', email);
  // try {
  //   const usuario = await Usuario.findOne({
  //     where: { email },
  //             include: [
  //               {
  //                 model: Curso,
  //                 as: 'cursos',
  //                 include: [
  //                   {
  //                     model: Materia,
  //                     as: 'materias',
  //                     include: [
  //                       {
  //                         model: Aula,
  //                         as: 'aulas',
  //                       },
  //                     ],
  //                   },
  //                 ],
  //               },
  //             ],
  //   });

  //   if (!usuario) {
  //     throw new Error('Usuário não encontrado');
  //   }

  //   return usuario;
  // } catch (error) {
  //   throw new Error('Falha ao buscar o usuário');
  // }
};

export default {getByEmail, getAll};
