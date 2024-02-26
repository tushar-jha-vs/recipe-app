import React from "react";
import IngredientsItem from "../IngredientsItem/IngredientsItem";

const Ingredients = ({ recipeDetail, loading }) => {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        recipeDetail.extendedIngredients.map((item) => (
          <IngredientsItem key={item.id} item={item}/>
        ))
      )}
    </div>
  );
};

export default React.memo(Ingredients);
