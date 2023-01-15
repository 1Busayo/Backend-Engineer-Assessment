const { knexSnakeCaseMappers } = require('objection');
import dotenv from "dotenv";
dotenv.config({});

module.exports = {


  development: {
    client: 'mysql',
    connection: {
      host : process.env.DBHOST,
      port : process.env.DBPORT,
      database: process.env.DBNAME,
      user:     process.env.DBUSER,
      password: process.env.DBPASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  ,seeds: {
    directory: './seeds',
  },
  // automatically convert camelCase to snake case
  // so table names are in snake case
  // but we can use camelCase fields per default
  ...knexSnakeCaseMappers(),
},

};
