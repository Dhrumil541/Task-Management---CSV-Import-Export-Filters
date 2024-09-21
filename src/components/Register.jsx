import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle redirection

const Register = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();  // Hook for navigation

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration logic
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false); // Hide notification after 3 seconds
      navigate('/login'); // Redirect to login page after success
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Register Here</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              required 
              className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              required 
              className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              required 
              className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-gray-700">
        <p className="text-sm"> I have Account Already? <a href="/login" className="text-blue-500 hover:underline">Login here</a></p>
      </div>

        {/* Success notification */}
        {success && (
          <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Registration Successful!</strong>
            <span className="block sm:inline"> Redirecting to login page...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
