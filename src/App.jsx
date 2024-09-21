import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import {TaskProvider} from './context/TaskContext';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <TaskProvider> 
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </TaskProvider>
  );
}

export default App;
