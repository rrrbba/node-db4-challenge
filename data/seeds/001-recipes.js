
exports.seed = function(knex) {

      return knex('recipes').insert([
        {name: 'salad'}, //1
        {name: 'burger'}, //2
        {name: 'sushi'} //3
      ]);
};
