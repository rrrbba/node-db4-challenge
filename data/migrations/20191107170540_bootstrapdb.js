
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
  })
  .createTable('instructions', tbl => {
      tbl.increments();
      tbl.string('steps', 255).notNullable()
      tbl.integer('recipes_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable()
  })
  .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

      tbl.integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

      tbl.float('quantity').notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('instructions')
  .dropTableIfExists('recipes')
};
