
exports.up = knex => knex.schema.createTable('instituicao', table  =>{
    table.text('nome_instituicao').primary().notNullable()
    table.text('endereco').notNullable()
    table.text('telefone').notNullable()
})

exports.down = knex => knex.schema.dropTable('instituicao')