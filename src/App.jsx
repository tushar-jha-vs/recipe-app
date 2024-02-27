//Pagination(5) use memo,ref and all hooks taught
import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const Header = lazy(() => import("./components/Header/Header"));
const Search = lazy(() => import("./components/Search/Search"));
const Pagination = lazy(() => import("./components/Pagination/Pagination"));
const RecipeDetails = lazy(() =>
  import("./components/RecipeDetailes/RecipeDetails")
);
const RecipeList = lazy(() => import("./components/RecipeList/RecipeList"));

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  return (
    <Router>
      <>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Search setRecipes={setRecipes} />
                  <RecipeList recipes={recipes} page={page} />
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
        </Suspense>
      </>
    </Router>
  );
};

export default App;
