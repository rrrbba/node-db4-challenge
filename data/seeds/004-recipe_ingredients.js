
exports.seed = function(knex) {

      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 'one cup of lettuce'},
        {recipe_id: 1, ingredient_id: 2, quantity: 'a half of a tomato, sliced'},
        {recipe_id: 3, ingredient_id: 3, quantity: 'three sheets of seaweed'},
        {recipe_id: 3, ingredient_id: 4, quantity: 'a cup and half of rice'},
        {recipe_id: 2, ingredient_id: 6, quantity: 'two buns'},
        {recipe_id: 2, ingredient_id: 2, quantity: 'a half of a tomato'},
        {recipe_id: 2, ingredient_id: 1, quantity: 'a handful of lettuce'},
        {recipe_id: 2, ingredient_id: 5, quantity: 'one slice'},
        {recipe_id: 2, ingredient_id: 7, quantity: 'one patty'},
        {recipe_id: 3, ingredient_id: 8, quantity: 'half a pound'},
      ]);

};
