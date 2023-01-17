import PropTypes from 'prop-types';
import ArrowLeft from '../assets/icons/ArrowLeft';
import ArrowRight from '../assets/icons/ArrowRight';

function Pagination({ currentPage, setCurrentPage, totalPageCount }) {
  return (
    <div className="flex justify-end">
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <button
          type="button"
          className="inline-flex items-center rounded-l-lg border
          border-gray-300 bg-white px-2 py-2 text-sm font-medium
          text-gray-500 hover:bg-gray-50 focus:z-20"
          onClick={ () => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          } }
        >
          <ArrowLeft />
        </button>
        { currentPage > 1 && (
          <span
            className="relative inline-flex items-center border
          border-gray-300 bg-white px-4 py-2 text-sm font-medium
          text-gray-500 hover:bg-gray-50"
          >
            { currentPage - 1 }
          </span>
        )}
        <span
          className="relative inline-flex items-center border
          px-4 py-2 text-sm font-medium hover:bg-gray-50 z-20
          text-indigo-600 border-indigo-500 bg-indigo-50"
        >
          { currentPage }
        </span>
        { currentPage < totalPageCount && (
          <span
            className="relative inline-flex items-center border
          border-gray-300 bg-white px-4 py-2 text-sm font-medium
          text-gray-500 hover:bg-gray-50"
          >
            { currentPage + 1 }
          </span>
        )}
        <button
          type="button"
          className="inline-flex items-center rounded-r-md border
          border-gray-300 bg-white px-2 py-2 text-sm font-medium
          text-gray-500 hover:bg-gray-50 focus:z-20"
          onClick={ () => {
            if (currentPage < totalPageCount) setCurrentPage(currentPage + 1);
          } }
        >
          <ArrowRight />
        </button>
      </nav>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalPageCount: PropTypes.number.isRequired,
};

export default Pagination;
