module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      role: Sequelize.STRING,
      endereco: Sequelize.STRING,
      celular: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};