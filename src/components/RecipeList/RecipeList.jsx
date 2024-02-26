import React, { useRef } from "react";
import RecipeItem from "../RecipeItem/RecipeItem";

const RecipeList = ({ recipes, setRecipeId, page }) => {
  const paginatedRecipes = useRef([]);
  const skip = (page - 1) * import.meta.env.VITE_LIMIT;
  const lastIndex = page * import.meta.env.VITE_LIMIT;
  paginatedRecipes.current = recipes.slice(skip,lastIndex)
  return (
    <div>
      {console.log(paginatedRecipes.current)}
      {paginatedRecipes.current.length > 0 &&
        paginatedRecipes.current.map((recipe) => (
          <RecipeItem
            setRecipeId={setRecipeId}
            key={recipe.id}
            recipe={recipe}
          />
        ))}
    </div>
  );
};

export default RecipeList;
