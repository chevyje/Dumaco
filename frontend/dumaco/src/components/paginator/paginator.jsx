import { useState } from "react";
import Style from  './paginator.module.css'


export default function Paginator({ totalPages = 50 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={Style.paginator}>
      {/* Left Arrow */}
      <button
        className={Style.chevron}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
      <img src="../../icons/chevron-left.svg" alt="chevron left" />
      </button>

      {/* First Page Always Visible */}
      <button
        className={`{Style.pageButton} ${currentPage === 1 ? Style.active-page : ""}`}
        onClick={() => goToPage(1)}
      >
        1
      </button>

      {/* Ellipsis if needed */}
      {currentPage > 4 && <span className={Style.ellipsis}>...</span>}

      {/* Show Page Before Current (If it's not Page 1 or 2) */}
      {currentPage > 2 && (
        <button className={Style.pageButton} onClick={() => goToPage(currentPage - 1)}>
          {currentPage - 1}
        </button>
      )}

      {/* Current Page */}
      {currentPage !== 1 && currentPage !== totalPages && (
        <button className={Style.activePage}>{currentPage}</button>
      )}

      {/* Show Page After Current (If it's not the last page) */}
      {currentPage < totalPages - 1 && (
        <button className={Style.pageButton} onClick={() => goToPage(currentPage + 1)}>
          {currentPage + 1}
        </button>
      )}

      {/* Ellipsis if needed before last page */}
      {currentPage < totalPages - 3 && <span className={Style.ellipsis}>...</span>}

      {/* Last Page Always Visible */}
      <button
        className={`{Style.page-button} ${currentPage === totalPages ? Style.activePage : ""}`}
        onClick={() => goToPage(totalPages)}
      >
        {totalPages}
      </button>

      {/* Right Arrow */}
      <button
        className={Style.chevronRight}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src="../../icons/chevron-rigth.svg" alt="chevron right" />
      </button>
    </div>
  );
}



