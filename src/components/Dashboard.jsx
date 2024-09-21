import React, { useEffect, useState } from 'react';
import TaskFilters from '../components/TaskFilters';
import TaskList from '../components/TaskList';
import Pagination from '../components/Pagination';
import ExportButton from '../components/ExportButton';
import ImportCSV from '../components/ImportCSV';
import TaskForm from '../components/TaskForm'; // Import your TaskForm component
import { fetchTasks } from '../services/taskService';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks(currentPage);
      setTasks(data.tasks);
      setTotalPages(data.totalPages);
    };
    loadTasks();
  }, [currentPage]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to the list
    setShowForm(false); // Close the form after adding
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks((prevTasks) => 
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    ); // Update the existing task
  };

  return (
    <div className="dashboard p-6 bg-gradient-to-br from-indigo-600 via-purple-400 to-pink-300 min-h-screen">
      <h1 className="text-6xl font-extrabold text-white mb-12 text-center drop-shadow-lg">Task Management Dashboard</h1>

      {/* Add Task Button */}
      <div className="mb-6 text-center">
        <button 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          onClick={() => setShowForm(true)}
        >
          Add Task
        </button>
      </div>

      {/* Task Form Section */}
      {showForm && <TaskForm onAddTask={handleAddTask} onClose={() => setShowForm(false)} />}

      {/* Export & Import Section */}
      <div className="bg-yellow-200 shadow-lg rounded-lg p-8 mb-8 border-l-8 border-yellow-500">
        <h2 className="text-4xl font-semibold text-center text-yellow-800 mb-6 drop-shadow-lg">Export & Import Tasks</h2>
        <div className="flex justify-center space-x-4">
          <ExportButton className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300" />
          <ImportCSV className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300" />
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-blue-200 shadow-lg rounded-lg p-8 mb-8 border-l-8 border-blue-500">
        <h2 className="text-4xl font-semibold text-center text-blue-800 mb-6 drop-shadow-lg">Task Filters</h2>
        <div className="flex justify-center">
          <TaskFilters onFilterChange={handleFilterChange} className="w-full max-w-3xl" />
        </div>
      </div>

      {/* Task List Section */}
      <div className="bg-green-200 shadow-lg rounded-lg p-8 mb-8 border-l-8 border-green-500">
        <h2 className="text-4xl font-semibold text-center text-green-800 mb-6 drop-shadow-lg">Task List</h2>
        <TaskList 
          tasks={tasks} 
          onEdit={(id) => {
            // Handle the edit functionality if necessary
          }} 
          onDelete={(id) => {
            setTasks(tasks.filter(task => task.id !== id)); // Remove task by ID
          }}
          onUpdate={handleUpdateTask} // Pass the update function
        />
      </div>

      {/* Pagination Section */}
      <div className="bg-blue-100 shadow-lg rounded-lg p-8 mb-8 border-l-8 border-blue-500">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-6 drop-shadow-lg">
          Pagination
        </h2>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="flex justify-center space-x-4"
        />
      </div>
    </div>
  );
};

export default Dashboard;
