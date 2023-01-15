const  bcrypt = require('bcryptjs');

const password = '1234'
const hash = bcrypt.hashSync(password, 10);


exports.seed = async function(knex) {
  // Deletes ALL existing entries
 // truncate all existing tables

//  await knex.raw('TRUNCATE TABLE wallet ');
//  await knex.raw('TRUNCATE TABLE user ');



 // insert seed data
 await knex('user').insert([
   {
     id: 1,
     username: 'user1',
     password: hash
   }
 ]);


 return knex('wallet').insert([
   {
     id: 1,
     balance: 100,
     user_id: 1,
   }
 ]);
};
