import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white">
    <h1 className="text-5xl font-extrabold mb-4">Welcome Task Management</h1>
    <p className="text-xl mb-6 max-w-md text-center">Discover and share amazing content with the world. Join our community today!</p>
    <div className="flex space-x-4">
      <Link to="/login">
        <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">Login</button>
      </Link>
      <Link to="/register">
        <button className="px-6 py-3 bg-white text-teal-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">Register</button>
      </Link>
    </div>
  </div>
  )
}

export default Welcome