
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, titulo: 'Checklist', descricao: 'atualizar monitoramento', status: 'pendente'},
        {id: 2, titulo: 'Enviar Relatório', descricao: 'Atualizar SLA mensal e encaminhar por email', status: 'pendente'},
        {id: 3, titulo: 'Atendimento PMM', descricao: 'Avaliar circuitos da prefeitura', status: 'pendente'},
        {id: 4, titulo: 'Monitorar VM', descricao: 'Realizar snapshot das maquinas virtuais', status: 'pendente'}
        
      ]);
      
    });
};
