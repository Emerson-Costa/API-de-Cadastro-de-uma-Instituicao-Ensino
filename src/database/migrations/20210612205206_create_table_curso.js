
exports.up = knex => knex.schema.createTable('curso', table  =>{
    table.text('nome_curso').primary().notNullable()
    table.text('horas_curso').notNullable()
    
    // 1 - N instituicao
    table.text('nome_instituicao')
         .references('instituicao.nome_instituicao')
         .notNullable()
         .onDelete('CASCADE')
})

exports.down = knex => knex.schema.dropTable('curso')