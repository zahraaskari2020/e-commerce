const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

class UserModel {
    static async userTable() {
      return sequelize.define('User', {
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            name: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            email: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            password: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            user_token: {
              type: DataTypes.STRING,
              allowNull: false,
            }
        }, {
          tableName: 'users',
          timestamps: true,
          createdAt: 'created_at',
          updatedAt: 'updated_at',
        }
      );
    }
}
      
module.exports = UserModel;