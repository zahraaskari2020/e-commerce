module.exports = (sequelize, type) => {
  return sequelize.define('Product', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: type.STRING,
    price: type.STRING,
    image: type.STRING,
    created_at: type.DATE,
    updated_at: type.DATE,
    
  },{
    tableName: 'products',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
}

      