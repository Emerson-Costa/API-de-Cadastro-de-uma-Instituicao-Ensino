
exports.seed = function(knex) {
  
  return knex('curso').del()
    .then(function () {
      
      return knex('curso').insert([
        {nome_curso: "Técnico em Informática", horas_curso:"64 horas", nome_instituicao:"Varejão do Ensino"},
        {nome_curso: "Programação de Computadores", horas_curso:"232 horas", nome_instituicao:"Varejão do Ensino"},
        {nome_curso: "Desenho Técnico", horas_curso:"128 horas", nome_instituicao:"Varejão do Ensino"}
      ]);
    });
};
