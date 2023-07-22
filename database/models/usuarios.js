const usuariosModel = (sequelize, DataTypes) => {
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
      tableName: 'usuarios',
    },
  );

  Usuario.associate = (models) => {
    Usuario.hasMany(models.Curso, {
      foreignKey: 'usuario_id',
      as: 'cursos',
      tableName: 'cursos',
      onDelete: 'CASCADE',
    });
  };

  return Usuario;
};

export default usuariosModel;
