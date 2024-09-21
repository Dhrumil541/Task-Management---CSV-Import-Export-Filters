import { useState } from 'react';

const TaskFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ status: '', priority: '', dueDate: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = { status: '', priority: '', dueDate: '' };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-x-2 my-4 bg-gradient-to-r from-blue-200 to-blue-300 p-6 rounded-lg shadow-lg">
      <select 
        name="status" 
        value={filters.status} 
        onChange={handleFilterChange} 
        className="border border-blue-500 rounded-lg p-3 shadow-md bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold transition duration-300 hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <select 
        name="priority" 
        value={filters.priority} 
        onChange={handleFilterChange} 
        className="border border-blue-500 rounded-lg p-3 bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md transition duration-300 hover:bg-gradient-to-l hover:from-blue-900 hover:to-blue-800 focus:outline-none focus:ring focus:ring-blue-700"
      >
        <option value="">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <input 
        type="date" 
        name="dueDate" 
        value={filters.dueDate} 
        onChange={handleFilterChange} 
        className="border border-blue-500 rounded-lg p-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg transition duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      />

      <button 
        onClick={handleClearFilters} 
        className="mt-4 md:mt-0 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default TaskFilters;
