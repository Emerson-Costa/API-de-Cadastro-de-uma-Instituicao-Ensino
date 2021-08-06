
exports.up = knex => knex.schema.createTable('aluno', table  =>{
    table.text('RGA').primary().notNullable()
    table.text('nome_aluno').notNullable()
    
    // 1 - N instituicao
    table.text('nome_instituicao')
         .references('instituicao.nome_instituicao')
         .notNullable()
         .onDelete('CASCADE')

    // 1 - N curso
    table.text('nome_curso')
         .references('curso.nome_curso')
         .notNullable()
         .onDelete('CASCADE')
})

exports.down = knex => knex.schema.dropTable('aluno')