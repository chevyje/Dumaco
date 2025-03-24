import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      <button
        className="chevron"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </button>

      <button className="active-page">{currentPage}</button>
      {currentPage < totalPages - 1 && (
        <>
          <button className="page-button" onClick={() => goToPage(currentPage + 1)}>
            {currentPage + 1}
          </button>
          <span className="ellipsis">...</span>
          <button className="page-button" onClick={() => goToPage(totalPages)}>
            {totalPages}
          </button>
        </>
      )}

      <button
        className="chevron-right"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </button>
    </div>
  );
}


