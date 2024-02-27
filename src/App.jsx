//Pagination(5) use memo,ref and all hooks taught
import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  const [page, setPage] = useState(1);
  return (
    <Router>
      <>
        <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Search setRecipes={setRecipes} />
                    <RecipeList
                      recipes={recipes}
                      page={page}
                    />
                    {recipes.length > 0 && (
                      <Pagination
                        page={page}
                        setPage={setPage}
                        recipes={recipes}
                      />
                    )}
                  </>
                }
              />
              <Route path="recipe/:id" element={<RecipeDetails />} />
            </Routes>
      </>
    </Router>
  );
};

export default App;
