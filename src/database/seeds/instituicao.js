
exports.seed = function(knex) {
  
  return knex('instituicao').del()
    .then(function () {
      
      return knex('instituicao').insert([
        { nome_instituicao: "Varejão do Ensino", endereco:"Rua Los Angeles 385 Vila Almeida" , telefone: "(67)981505726"}
      ]);
    });
};
