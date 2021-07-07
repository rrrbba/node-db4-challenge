
exports.seed = function(knex) {

      return knex('ingredients').insert([
        {name: 'lettuce'}, //1
        {name: 'tomatoes'},  //2
        {name: 'seaweed'}, //3
        {name: 'rice'}, //4
        {name: 'cheese'}, //5
        {name: 'buns'}, //6
        {name: 'protein'}, //7
        {name: 'salmon'} //8
      ]);

};
