import React from "react";
import "./RecipeItemStyles.css";
import { Link } from "react-router-dom";
const RecipeItem = ({ recipe }) => {
  return (
    <div className="recipe-item-container">
      <img className="recipe-item-image" src={recipe.image} />
      <div className="title-container">
        <h1 className="recipe-item-title">{recipe.title}</h1>
      </div>
      <div className="btn-container">
        <Link className="recipe-item-btn" to={`recipe/${recipe.id}`}>
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default React.memo(RecipeItem);
