import React from "react";
import "../assets/styles/pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const prevPage = () => {
    onPageChange(currentPage - 1);
  };

  const nextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
