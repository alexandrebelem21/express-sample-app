module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      endereco: DataTypes.STRING,
      celular: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tablename: 'usuarios',
    },
  );

  // Usuario.associate = (models) => {
  //   Usuario.hasMany(models.Curso, {
  //     foreignKey: 'usuario_id', // Coluna que armazena a chave estrangeira na tabela "Usuario"
  //     as: 'cursos', // Alias para a associação (opcional)
  //     tablename: 'cursos',
  //     onDelete: 'CASCADE',
  //   });
  // };

  return Usuario;
};
