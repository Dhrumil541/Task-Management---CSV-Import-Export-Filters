import { useState } from 'react';
import { importTasksFromCSV } from '../services/taskService';

const ImportCSV = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(''); // Clear any previous error
    }
  };

  const handleImport = async () => {
    if (!file) {
      setError('Please select a file to import.');
      return;
    }

    try {
      await importTasksFromCSV(file);
      alert('Tasks imported successfully!');
      setFile(null); // Reset the file state after successful import
    } catch (err) {
      setError('Error importing tasks.');
    }
  };

  return (
    <div className="flex flex-col items-center my-4 bg-yellow-200 p-6 rounded-lg shadow-lg border-2 border-yellow-400">
      <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Import Tasks from CSV</h2>
      <input 
        type="file" 
        accept=".csv" // Restrict to CSV files
        onChange={handleFileChange} 
        className="mb-4 border border-gray-400 rounded p-2 bg-white hover:border-yellow-500 transition duration-300"
      />
      {file && <p className="text-gray-700 font-medium">Selected file: {file.name}</p>} {/* Show selected file name */}
      <button 
        onClick={handleImport} 
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-300"
      >
        Import Tasks
      </button>
      {error && <p className="mt-2 text-red-600 font-medium">{error}</p>}
    </div>
  );
};

export default ImportCSV;
