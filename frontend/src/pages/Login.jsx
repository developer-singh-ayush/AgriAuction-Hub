import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('agriUser'));
    if (user && email === user.email && password === user.password) {
      alert(`Welcome, ${user.name}!`);
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = '/crops';
    } else {
      alert('Invalid login credentials.');
    }
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617957746230-75d2f6c77f5d?auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Section */}
        <div className="md:w-1/2 p-8 text-white bg-gradient-to-br from-green-600 to-green-400 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">We help farmers thrive</h2>
          <p className="text-lg leading-relaxed">Join our transparent auction platform to sell crops at better prices with real-time bidding.</p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-white p-8 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-green-700">AgriAuction Hub</h3>
            <p className="text-gray-600">Sign in to access your dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="font-medium text-gray-700 block mb-1">Email</label>
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
            <div>
              <label htmlFor="password" className="font-medium text-gray-700 block mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-sm text-gray-700">I agree to the <a href="#" className="text-green-600 underline">Terms & Conditions</a></label>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition">Sign In</button>
            <a href="/signup" className="w-full block mt-3 text-center border border-yellow-500 text-yellow-500 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition">Sign up as a new user</a>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
