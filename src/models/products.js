const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

class ProductModel {
    static async productTable() {
      return sequelize.define('Product', {
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            title: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            image: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            price: {
              type: DataTypes.STRING,
              allowNull: false,
            }
        }, {
          tableName: 'products',
          timestamps: true,
          createdAt: 'created_at',
          updatedAt: 'updated_at',
        }
      );
    }
}
      
module.exports = ProductModel;