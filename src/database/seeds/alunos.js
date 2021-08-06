
exports.seed = function(knex) {

  return knex('aluno').del()
    .then(function () {
    
      return knex('aluno').insert([
        { RGA: "20210101", nome_aluno: "Adalberto França de Almeida", nome_instituicao: "Varejão do Ensino", nome_curso:"Técnico em Informática"},
        { RGA: "20210102", nome_aluno: "Agnaldo Pereira", nome_instituicao: "Varejão do Ensino", nome_curso:"Técnico em Informática"},

        { RGA: "20210301", nome_aluno: "Emerson Leão", nome_instituicao: "Varejão do Ensino", nome_curso:"Programação de Computadores"},
        { RGA: "20210302", nome_aluno: "Eva Antonia", nome_instituicao: "Varejão do Ensino", nome_curso:"Programação de Computadores"},

        { RGA: "20210201", nome_aluno: "Alair Silva Costa", nome_instituicao: "Varejão do Ensino", nome_curso:"Desenho Técnico"},
        { RGA: "20210202", nome_aluno: "Eudes Vasconceos", nome_instituicao: "Varejão do Ensino", nome_curso:"Desenho Técnico"}
      ]);
    });
};
