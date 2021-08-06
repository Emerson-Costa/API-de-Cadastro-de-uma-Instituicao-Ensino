
exports.seed = function(knex) {
  
  return knex('professor').del()
    .then(function () {
      
      return knex('professor').insert([
        { nome_professor: "Elias Macedo"},
        { nome_professor: "Marcos Machado"},
        { nome_professor: "Marta Gonçalves"},
        { nome_professor: "Nilzete Arruda"},
        { nome_professor: "André Luíz"} 
      ]);
    });
};
