module.exports = (sequelize, type) => {
   return sequelize.define('Order', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: type.INTEGER,
        product_id: type.INTEGER,
        status: type.STRING,
        created_at: type.DATE,
        updated_at: type.DATE,
    }, {
      tableName: 'orders',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
}
