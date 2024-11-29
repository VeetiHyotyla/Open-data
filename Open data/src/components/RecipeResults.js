import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeResults = ({ recipes }) => {
  return (
    <div id="search-results">
      {recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />)
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeResults;
