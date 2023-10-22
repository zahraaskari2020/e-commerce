const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

class OrderModel {
    static async orderTable() {
      return sequelize.define('Order', {
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            user_is: {
              type: DataTypes.INTEGER,
              allowNull: false,
            },
            product_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
            },
            status: {
              type: DataTypes.STRING,
              allowNull: false,
            }
        }, {
          tableName: 'orders',
          timestamps: true,
          createdAt: 'created_at',
          updatedAt: 'updated_at',
        }
      );
    }
}
      
module.exports = OrderModel;