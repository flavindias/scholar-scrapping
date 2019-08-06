require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
const sequelize = require("sequelize");
const Op = sequelize.Op;

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || 'mysql',
  storage: './__tests__/database.sqlite',
  // operatorsAliases: false,
  logging: console.log,
  define: {
    timestamp: true,
    underscored: true, //underline no nome das tabelas
    underscoredAll: true
  },
  maxConcurrentQueries: 100,
  operatorsAliases: Op, // use Sequelize.Op
  // dialectOptions: {
  //   ssl:'Amazon RDS'
  // },
  pool: {
    maxConnections: 8,
    maxIdleTime: 30
  },
  language: 'en'
}