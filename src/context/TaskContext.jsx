import React, { createContext, useState } from 'react';

// Create the TaskContext
export const TaskContext = createContext();

// Create a provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Function to remove a task by id
  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
  };

  // Function to update an existing task
  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
      <div className="bg-gradient-to-br from-indigo-200 to-purple-200 p-4 rounded-lg shadow-lg">
        {children}
      </div>
    </TaskContext.Provider>
  );
};
