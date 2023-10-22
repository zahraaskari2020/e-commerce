const Sequelize = require("sequelize");
const UserModel = require("./users");

const dotenv = require('dotenv');


global.dotenv=dotenv.config();
const sequelize = new Sequelize('test', 'postgres', 'zz153369987', {
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

sequelize.sync({ force: false }).then(() => {
});
module.exports = {
    User,
    Op:Sequelize.Op
};
