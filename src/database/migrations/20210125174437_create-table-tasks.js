exports.up = async knex =>  knex.schema.createTable("tasks",  table => {

    table.increments("id").primary(); 
    table.string("descricao", 255).notNullable(); 
    table.string("status", 255).notNullable();
    table.string("titulo", 255).notNullable();
    table.timestamps(true, true);
    });


exports.down = knex => knex.schema.dropTable("tasks");