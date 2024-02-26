import React from "react";
import "./PaginationStyles.css";
const Pagination = ({ recipes, page, setPage }) => {
  const handlePrev = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(
      page === Math.ceil(recipes.length / import.meta.env.VITE_LIMIT)
        ? 1
        : page + 1
    );
  };
  return (
    <div className="pagination">
      <button onClick={handlePrev}>Prev</button>
      <span>{page}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default React.memo(Pagination);
