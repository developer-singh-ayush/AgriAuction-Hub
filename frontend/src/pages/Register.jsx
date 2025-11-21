import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Load existing users
    const storedUsers = JSON.parse(localStorage.getItem('agriUsers')) || [];

    // Check if email already exists
    const emailExists = storedUsers.some((u) => u.email === email);
    if (emailExists) {
      alert('Email already registered. Please log in.');
      return;
    }

    // Create new user
    const user = { name, email, password, role };
    storedUsers.push(user);

    // Save updated list
    localStorage.setItem('agriUsers', JSON.stringify(storedUsers));

    alert('Registration successful! You can now log in.');
    window.location.href = '/login';
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1617957746230-75d2f6c77f5d?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Section */}
        <div
          className="md:w-1/2 bg-[url('https://images.unsplash.com/photo-1580555704900-206b54c5f1f2?auto=format&fit=crop&w=1000&q=80')] 
          bg-cover bg-center min-h-[300px]"
        />

        {/* Right Section */}
        <div className="md:w-1/2 bg-white p-8 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-green-700">Create Account</h3>
            <p className="text-gray-600">Join AgriAuction Hub as a Farmer or Buyer</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="font-medium text-gray-700 block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="font-medium text-gray-700 block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="font-medium text-gray-700 block mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="font-medium text-gray-700 block mb-1">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Role</option>
                <option value="farmer">Farmer</option>
                <option value="buyer">Buyer</option>
              </select>
            </div>

            {/* Terms */}
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-green-600 underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Register button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
            >
              Register
            </button>

            {/* Login Link */}
            <Link
              to="/login"
              className="w-full block mt-3 text-center border border-yellow-500 text-yellow-500 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition"
            >
              Already have an account? Log In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
