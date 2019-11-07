const db = require('../data/db-config');

module.exports = {
    getRecipes, 
    getShoppingList,
    getInstructions
}


function getRecipes() {
    return db.select('*').from('recipes');
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
    .where({ id })//or recipe_id: id
    .first();
}

function getInstructions(recipe_id) {
    return db('instructions')
    .where({ id })
    .first();
}