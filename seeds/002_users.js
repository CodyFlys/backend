
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Cody', password: '123'},
        {id: 2, username: 'Tyler', password: '123'},
        {id: 3, username: 'Frances', password: '123'},
        {id: 4, username: 'Brian', password: '123'},
        {id: 5, username: 'Shantel', password: '123'}
      ]);
    });
};
