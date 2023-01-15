
exports.up = function(knex) {
    return knex.schema .createTable('user', (table) => {
        table.increments();
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.timestamps(true, true);
      })
      .createTable('wallet', (table) => {
        table.increments();
        table.integer('balance').defaultTo(0);
        table.integer('user_id',11).unsigned().references('id').inTable('user');  
      });
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('user')
    .dropTableIfExists('wallet')
};