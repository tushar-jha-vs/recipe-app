//Pagination(5) use memo,ref and all hooks taught
import React from "react";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import { useState } from "react";
import RecipeList from "./components/RecipeList/RecipeList";
import Container from "./components/Containers/Container";
import InnerContainer from "./components/Containers/InnerContainer";
import RecipeDetails from "./components/RecipeDetailes/RecipeDetails";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeId, setRecipeId] = useState("656329");
  const [page,setPage] = useState(1);
  return (
    <>
      <Header />
      <Search setRecipes={setRecipes} />
      <Container>
        <InnerContainer>
          <RecipeList setRecipeId={setRecipeId} recipes={recipes} page={page} />
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails recipeId={recipeId} />
        </InnerContainer>
      </Container>
      {recipes.length > 0  && <Pagination page={page} setPage={setPage} recipes={recipes}/>}
    </>
  );
};

export default App;
