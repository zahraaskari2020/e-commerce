const Sequelize  = require('sequelize');
const dotenv = require('dotenv');

global.dotenv=dotenv.config();

const sequelize = new Sequelize('test', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false
});
module.exports = sequelize;