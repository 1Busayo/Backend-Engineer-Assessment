import Knex from 'knex';
import { Model } from 'objection';


// Initialize knex.
const knex = Knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'root',
      database : 'walletservice'
    }
  });
  

  Model.knex(knex);

  export {knex}