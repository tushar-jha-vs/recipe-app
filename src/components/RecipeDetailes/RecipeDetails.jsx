import React from "react";
import "./RecipeDetailsStyles.css";
import { useEffect, useState } from "react";
import Ingredients from "../Ingredients/Ingredients";

const RecipeDetails = ({ recipeId }) => {
  const URL = `https://api.spoonacular.com/recipes/${recipeId}/information`;
  const [recipeDetail, setRecipeDetail] = useState("");
  const [loading, setLodaing] = useState(true);

  const fetchRecipeDetail = async () => {
    const res = await fetch(`${URL}?apiKey=${import.meta.env.VITE_API_KEY}`);
    const data = await res.json();
    setRecipeDetail(data);
    console.log(data);
    setLodaing(false);
  };

  useEffect(() => {
    fetchRecipeDetail();
  }, [recipeId]);

  return (
    <div>
      <div className="recipe-card">
        <h1 className="recipe-title">{recipeDetail.title}</h1>
        <img className="recipe-img" src={recipeDetail.image} />
        <div className="recipe-details">
          <span>
            <strong>{recipeDetail.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Serves {recipeDetail.servings}</strong>
          </span>
          <span>
            <strong>
              {recipeDetail.vegetarian ? "🌱 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
        </div>
        <div>
          💲{" "}
          <span>
            <strong>{recipeDetail.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <div>
          <h2>Ingrdients</h2>
          <Ingredients recipeDetail={recipeDetail} loading={loading} />
          <h2>Instructions</h2>
          <div className="recipe-instructions">
            <ol>
              {loading ? (
                <p>Loading....</p>
              ) : (
                recipeDetail.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
