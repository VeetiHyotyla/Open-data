import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RecipeResults from './components/RecipeResults';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = (searchTerm) => {
    if (searchTerm) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          if (data.meals) {
            setRecipes(data.meals);
          } else {
            setRecipes([]); 
          }
        })
        .catch(error => console.error('Error fetching recipes:', error));
    } else {
      alert('Please enter a dish name.');
    }
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeResults recipes={recipes} />
    </div>
  );
};

export default App;
