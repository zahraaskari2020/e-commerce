module.exports = (sequelize, type) => {
  return sequelize.define('User', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: type.STRING,
      email: type.STRING,
      password: type.STRING,
      user_token: type.STRING,
      created_at: type.DATE,
      updated_at: type.DATE,
      
    },{
      tableName: 'users',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
}
