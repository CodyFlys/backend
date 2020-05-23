exports.up = function(knex) {
  return knex.schema
    .createTable('users', users => {
        users.increments();
        users.string('username', 32)
            .unique()
            .notNullable();
        users.string("password", 32)
            .notNullable();
    })

    .createTable('posts', posts => {
        posts.increments();
        posts.integer('user_id')
        .unsigned()
        .notNullable()
        .references('users.id');
        posts.string('title', 32)
        .notNullable();
        posts.string('photo_url')
        posts.string('location', 32)
        posts.string('content')
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('posts')
};
