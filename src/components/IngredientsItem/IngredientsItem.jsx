import React from "react";
import "./IngredientsItemStyles.css";
const IngredientsItem = ({ item }) => {
  return (
    <>
      <div className="item-container">
        <div className="item-img">
          <img
          className="image"
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
          />
        </div>
        <div className="name-container">
          <div className="name">{item.name}</div>
          <div className="amount">
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(IngredientsItem);
