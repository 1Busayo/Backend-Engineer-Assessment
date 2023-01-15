const { knexSnakeCaseMappers } = require('objection');


module.exports = {


  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      database: 'walletservice',
      user:     'root',
      password: 'root'
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
