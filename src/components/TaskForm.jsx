// TaskForm.jsx
import React, { useState } from 'react';

const TaskForm = ({ onAddTask, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');
  const [assignedUser, setAssignedUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // Temporary ID generation, replace with actual ID handling
      title,
      description,
      dueDate,
      priority,
      status: 'pending', // Default status
      assignedUser,
    };
    onAddTask(newTask); // Call the function to add the task
    resetForm(); // Reset the form after submission
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
    setAssignedUser('');
  };

  return (
    <form className="border border-gray-300 p-4 rounded mb-4" onSubmit={handleSubmit}>
      <h2 className="font-bold mb-2">Add New Task</h2>
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
          className="border p-1 w-full"
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
          className="border p-1 w-full"
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input 
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
          required 
          className="border p-1 w-full"
        />
      </div>
      <div>
        <label>Priority:</label>
        <select 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)} 
          className="border p-1 w-full"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label>Assigned User:</label>
        <input 
          type="text" 
          value={assignedUser} 
          onChange={(e) => setAssignedUser(e.target.value)} 
          required 
          className="border p-1 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Add Task
      </button>
      <button 
        type="button" 
        className="bg-gray-300 text-black px-4 py-2 rounded mt-2 ml-2"
        onClick={onClose} // Close the form
      >
        Cancel
      </button>
    </form>
  );
};

export default TaskForm;
