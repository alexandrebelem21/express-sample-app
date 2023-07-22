const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const saltRounds = 10; // Defina o número de salt rounds para o bcrypt
    const usuarios = [
      {
        id: 1,
        name: 'Aluno Teste',
        email: 'aluno@ead.com',
        password: await bcrypt.hash('aluno123', saltRounds), // Criptografa a senha
        role: 'aluno',
        endereco: 'Rua Teste, 123',
        celular: '999999999',
      },
      {
        id: 2,
        name: 'Professor Teste',
        email: 'professor@ead.com',
        password: await bcrypt.hash('prof123', saltRounds), // Criptografa a senha
        role: 'professor',
        endereco: 'Avenida Teste, 456',
        celular: '888888888',
      },
      {
        id: 3,
        name: 'Adm',
        email: 'adm@ead.com',
        password: await bcrypt.hash('adm123', saltRounds), // Criptografa a senha
        role: 'adm',
        endereco: 'Praça Teste, 789',
        celular: '777777777',
      },
    ];
  
    await queryInterface.bulkInsert('usuarios', usuarios);
  },
  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};
