import React, { useRef } from "react";
import RecipeItem from "../RecipeItem/RecipeItem";
import "./RecipeListStyles.css"

const RecipeList = ({ recipes, page }) => {
  const paginatedRecipes = useRef([]);
  const skip = (page - 1) * import.meta.env.VITE_LIMIT;
  const lastIndex = page * import.meta.env.VITE_LIMIT;
  paginatedRecipes.current = recipes.slice(skip,lastIndex)
  return (
    <div className="list-container">
      {console.log(paginatedRecipes.current)}
      {paginatedRecipes.current.length > 0 &&
        paginatedRecipes.current.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
          />
        ))}
    </div>
  );
};

export default RecipeList;
