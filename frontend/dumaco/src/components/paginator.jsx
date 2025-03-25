import { useState } from "react";
import '../styling/paginator.css'


export default function Paginator({ totalPages = 50 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="paginator">
      {/* Left Arrow */}
      <button
        className="chevron"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
      <img src="../../icons/chevron-left.svg" alt="chevron left" />
      </button>

      {/* First Page Always Visible */}
      <button
        className={`page-button ${currentPage === 1 ? "active-page" : ""}`}
        onClick={() => goToPage(1)}
      >
        1
      </button>

      {/* Ellipsis if needed */}
      {currentPage > 4 && <span className="ellipsis">...</span>}

      {/* Show Page Before Current (If it's not Page 1 or 2) */}
      {currentPage > 2 && (
        <button className="page-button" onClick={() => goToPage(currentPage - 1)}>
          {currentPage - 1}
        </button>
      )}

      {/* Current Page */}
      {currentPage !== 1 && currentPage !== totalPages && (
        <button className="active-page">{currentPage}</button>
      )}

      {/* Show Page After Current (If it's not the last page) */}
      {currentPage < totalPages - 1 && (
        <button className="page-button" onClick={() => goToPage(currentPage + 1)}>
          {currentPage + 1}
        </button>
      )}

      {/* Ellipsis if needed before last page */}
      {currentPage < totalPages - 3 && <span className="ellipsis">...</span>}

      {/* Last Page Always Visible */}
      <button
        className={`page-button ${currentPage === totalPages ? "active-page" : ""}`}
        onClick={() => goToPage(totalPages)}
      >
        {totalPages}
      </button>

      {/* Right Arrow */}
      <button
        className="chevron-right"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src="../../icons/chevron-rigth.svg" alt="chevron right" />
      </button>
    </div>
  );
}



