const Sequelize = require("sequelize");
const UserModel = require("./users");
const ProductModel = require("./products");
const OrderModel = require("./orders");

const dotenv = require('dotenv');


global.dotenv=dotenv.config();
const sequelize = new Sequelize('test', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false
});

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Order = OrderModel(sequelize, Sequelize);

User.belongsToMany(Product, { through: Order,foreignKey:"user_id" });
Product.belongsToMany(User, { through: Order,foreignKey:"product_id" });
User.hasMany(Order, {foreignKey: 'user_id' });
Order.belongsTo(User, {foreignKey: 'user_id' });
Product.hasMany(Order, {foreignKey: 'product_id' });
Order.belongsTo(Product, {foreignKey: 'product_id' });

sequelize.sync({ force: false }).then(() => {
});
module.exports = {
    User,
    Product,
    Order,
    Op:Sequelize.Op
};
