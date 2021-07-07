
exports.seed = function(knex) {

      return knex('instructions').insert([
        {steps: 'take lettuce', recipes_id: 1},
        {steps: 'take tomatoes', recipes_id: 1},
        {steps: 'throw them in the bowl together and enjoy', recipes_id: 1},
        {steps: 'cook protein', recipes_id: 2},
        {steps: 'put protein on bun', recipes_id: 2},
        {steps: 'put cheese on', recipes_id: 2},
        {steps: 'place lettuce and tomato on and enjoy', recipes_id: 2},
        {steps: 'cook rice', recipes_id: 3},
        {steps: 'spread rice acoross seaweed sheet', recipes_id: 3},
        {steps: 'place a slice of salmon longways on the rice', recipes_id: 3},
        {steps: 'roll seaweed, cut into pieces and enjoy', recipes_id: 3},
      ]);

};
