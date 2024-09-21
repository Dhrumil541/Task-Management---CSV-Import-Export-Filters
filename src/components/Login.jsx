import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false); 
      navigate("/dashboard"); 
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Login Here</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-gray-700">
        <p className="text-sm">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a></p>
      </div>

        {/* Success notification */}
        {success && (
          <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Login Successful!</strong>
            <span className="block sm:inline"> You have successfully logged in.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
