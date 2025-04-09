import { useState } from "react";
import Style from "./paginator.module.css";  // Ensure your CSS is set up

export default function Paginator2({ totalPages = 50 }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Function to go to the selected page
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Function to render the page numbers with ellipses handling
  const renderPageNumbers = () => {
    const pages = [];

    // Always show the first page
    pages.push(
      <button
        key={1}
        className={`${Style.pageButton} ${currentPage === 1 ? Style.activePage : ""}`}
        onClick={() => goToPage(1)}
      >
        1
      </button>
    );

    // Show ellipsis after the first page if the current page is greater than 4
    if (currentPage > 4) {
      pages.push(<span key="ellipsisStart" className={Style.ellipsis}>...</span>);
    }

    // Show pages around the current page (e.g., current - 1, current, current + 1)
    if (currentPage <= 4) {
      // If current page is within first 4 pages, show next 5 pages (2 to 5)
      for (let i = 2; i <= 5 && i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={`${Style.pageButton} ${currentPage === i ? Style.activePage : ""}`}
            onClick={() => goToPage(i)}
          >
            {i}
          </button>
        );
      }
    } else if (currentPage >= totalPages - 3) {
      // If the current page is near the last pages (e.g., page 47 onwards)
      if (currentPage < totalPages - 4) {
        pages.push(<span key="ellipsisStart" className={Style.ellipsis}>...</span>);
      }
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={`${Style.pageButton} ${currentPage === i ? Style.activePage : ""}`}
            onClick={() => goToPage(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // For pages between 5 and (totalPages - 4), show pages around the current page
      for (let i = currentPage - 1; i <= currentPage + 1 && i <= totalPages - 1; i++) {
        if (i > 1 && i < totalPages) { // Don't show first and last pages multiple times
          pages.push(
            <button
              key={i}
              className={`${Style.pageButton} ${currentPage === i ? Style.activePage : ""}`}
              onClick={() => goToPage(i)}
            >
              {i}
            </button>
          );
        }
      }
    }

    // Show ellipsis before the last page if the currentPage is less than (totalPages - 3)
    if (currentPage < totalPages - 3) {
      pages.push(<span key="ellipsisEnd" className={Style.ellipsis}>...</span>);
    }

    // Always show the last page, but only if it hasn't been added already
    if (!pages.some(page => page.key === `${totalPages}`)) {
      pages.push(
        <button
          key={totalPages}
          className={`${Style.pageButton} ${currentPage === totalPages ? Style.activePage : ""}`}
          onClick={() => goToPage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={Style.paginator}>
      <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>
      {renderPageNumbers()}
      <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
}
