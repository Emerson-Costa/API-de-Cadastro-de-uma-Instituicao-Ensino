
exports.up = knex => knex.schema.createTable('professor', table  =>{
    table.text('nome_professor').primary().notNullable()
})

exports.down = knex => knex.schema.dropTable('professor')
