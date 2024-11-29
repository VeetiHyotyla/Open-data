import React from 'react';

const RecipeCard = ({ recipe }) => {
  const createIngredientsList = () => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  return (
    <div className="recipe">
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Cuisine:</strong> {recipe.strArea}</p>
      <h4>Ingredients:</h4>
      <ul>
        {createIngredientsList().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeCard;
