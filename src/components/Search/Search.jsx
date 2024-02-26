import React from "react";
import { useEffect,useState } from "react";
import "./SearchStyles.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch";

const Search = ({ setRecipes }) => {
  const [query, setQuery] = useState("pizza");
  const fetchFood = async () => {
    const res = await fetch(
      `${URL}?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
    );
    const data = await res.json();
    setRecipes(data.results);
  };
  useEffect(() => {
    fetchFood();
  }, [query]);
  return (
    <div className="search-container">
      <input
      className="search-input"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
};

export default React.memo(Search);
