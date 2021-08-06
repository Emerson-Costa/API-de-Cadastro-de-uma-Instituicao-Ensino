
exports.seed = function(knex) {
  
  return knex('disciplina').del()
    .then(function () {
      
      return knex('disciplina').insert([

        // Técnico em informática

        { nome_disciplina: "Introdução ao Hardware", nome_curso: "Técnico em Informática", nome_professor: "Elias Macedo", RGA: "20210101"},
        { nome_disciplina: "Sistemas Operacionais", nome_curso: "Técnico em Informática", nome_professor: "Marta Gonçalves", RGA: "20210101"},
        { nome_disciplina: "Manutenção em Micro Computadores", nome_curso: "Técnico em Informática", nome_professor: "Marcos Machado", RGA: "20210101"},
        { nome_disciplina: "Lógica de Programação", nome_curso: "Técnico em Informática", nome_professor: "Nilzete Arruda", RGA: "20210101"},

        { nome_disciplina: "Introdução ao Hardware", nome_curso: "Técnico em Informática", nome_professor: "Elias Macedo", RGA: "20210102"},
        { nome_disciplina: "Sistemas Operacionais", nome_curso: "Técnico em Informática", nome_professor: "Marta Gonçalves", RGA: "20210102"},
        { nome_disciplina: "Manutenção em Micro Computadores", nome_curso: "Técnico em Informática", nome_professor: "Marcos Machado", RGA: "20210102"},
        { nome_disciplina: "Lógica de Programação", nome_curso: "Técnico em Informática", nome_professor: "Nilzete Arruda", RGA: "20210102"},

        // Programação de computadores

        { nome_disciplina: "Lógica de Programação", nome_curso: "Programação de Computadores", nome_professor: "Marta Gonçalves" , RGA: "20210301"},
        { nome_disciplina: "Matemática Discreta", nome_curso: "Programação de Computadores", nome_professor: "Nilzete Arruda" , RGA: "20210301"},
        { nome_disciplina: "Programação Orientada a Objeto", nome_curso: "Programação de Computadores", nome_professor: "Marta Gonçalves" , RGA: "20210301"},
        { nome_disciplina: "Introdução a Banco de Dados", nome_curso: "Programação de Computadores", nome_professor: "Nilzete Arruda" , RGA: "20210301"},

        { nome_disciplina: "Lógica de Programação", nome_curso: "Programação de Computadores", nome_professor: "Marta Gonçalves" , RGA: "20210302"},
        { nome_disciplina: "Matemática Discreta", nome_curso: "Programação de Computadores", nome_professor: "Nilzete Arruda" , RGA: "20210302"},
        { nome_disciplina: "Programação Orientada a Objeto", nome_curso: "Programação de Computadores", nome_professor: "Marta Gonçalves" , RGA: "20210302"},
        { nome_disciplina: "Introdução a Banco de Dados", nome_curso: "Programação de Computadores", nome_professor: "Nilzete Arruda" , RGA: "20210302"},

        // Desenho Técnico

        { nome_disciplina: "Esbolço de Projetos" , nome_curso: "Desenho Técnico" , nome_professor: "André Luíz" , RGA: "20210201"},
        { nome_disciplina: "Design de Ambientes" , nome_curso: "Desenho Técnico" , nome_professor: "André Luíz" , RGA: "20210201"},
        { nome_disciplina: "Arte aplicada" , nome_curso: "Desenho Técnico" , nome_professor: "André Luíz" , RGA: "20210201"},
        { nome_disciplina: "Projeto Final" , nome_curso: "Desenho Técnico" , nome_professor: "André Luíz" , RGA: "20210201"},

        { nome_disciplina: "Esbolço de Projetos" , nome_curso: "Desenho Técnico" , nome_professor: "André Luíz" , RGA: "20210202"},
        { nome_disciplina: "Design de Ambientes" , nome_curso: "Desenho Técnico" , nome_professor: "André Luíz" , RGA: "20210202"},
        { nome_disciplina: "Arte aplicada" , nome_curso: "Desenho Técnico" , nome_professor: "André Luíz" , RGA: "20210202"},
        { nome_disciplina: "Projeto Final" , nome_curso: "Desenho Técnico" , nome_professor: "André Luíz" , RGA: "20210202"}
      ]);
    });
};
