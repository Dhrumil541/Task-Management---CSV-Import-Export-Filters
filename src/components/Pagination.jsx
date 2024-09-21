const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center my-4 bg-gradient-to-r from-purple-200 to-purple-300 p-4 rounded-lg shadow-lg">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold mr-4 transition duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-600 hover:to-blue-700'}`}
      >
        Previous
      </button>
      <span className="mx-4 text-2xl font-bold text-purple-800">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold ml-4 transition duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-600 hover:to-blue-700'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
