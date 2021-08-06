
exports.up = knex => knex.schema.createTable('disciplina', table  =>{
    table.text('nome_disciplina').notNullable()
    
    table.text('nome_curso')
         .references('curso.nome_curso')
         .notNullable()
         .onDelete('CASCADE')

    table.text('nome_professor')
         .references('professor.nome_professor')
         .notNullable()
         .onDelete('CASCADE')

    table.text('RGA')
         .references('aluno.RGA')
         .notNullable()
         .onDelete('CASCADE')
})

exports.down = knex => knex.schema.dropTable('disciplina')