exports.up = function(knex, Promise) {
  const query = knex.schema.createTable('pets', (table) => {
    table.increments('id')
    table.string('type')
    table.string('name')
    table.string('breed')
    table.string('age')
    table.string('gender')
    table.string('image')
    table.boolean('noCats')
    table.boolean('noDogs')
  })
  return query
}

exports.down = function(knex, Promise) {
  const query = knex.schema.dropTable('pets')
  return query
}
