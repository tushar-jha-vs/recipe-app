import React from "react";
import "./RecipeItemStyles.css";
const RecipeItem = ({ recipe, setRecipeId }) => {
  return (
    <div className="recipe-item-container">
      <img className="recipe-item-image" src={recipe.image} />
      <div className="title-container">
        <h1 className="recipe-item-title">{recipe.title}</h1>
      </div>
      <div className="btn-container">
        <button className="recipe-item-btn" onClick={() => setRecipeId(recipe.id)}>
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default React.memo(RecipeItem);
