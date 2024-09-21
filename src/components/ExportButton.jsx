import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { saveAs } from 'file-saver';
import { exportTasksToCSV } from '../utils/csvHelper';

const ExportButton = () => {
  const { tasks } = useContext(TaskContext); // Get tasks from context or state

  const handleExport = () => {
    const csvData = exportTasksToCSV(tasks);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'tasks.csv');
  };

  return (
    <div className="flex justify-center items-center my-4">
      <button 
        onClick={handleExport} 
        className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-lg rounded-lg shadow-lg hover:from-teal-500 hover:to-green-600 transition duration-300 transform hover:scale-105"
      >
        Export CSV
      </button>
    </div>
  );
};

export default ExportButton;
