--gets the recipe, quantity and instructions for a recipe
select * from recipes as r
join recipe_ingredients as ri
    on r.id = ri.recipe_id
join ingredients as i
    on i.id = ri.ingredient_id
where r.id =1;