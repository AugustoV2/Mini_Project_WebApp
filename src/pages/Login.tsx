import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import image from '../assests/heart_hands.png'; // Import local image

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const imageLink = "https://i.ibb.co/7b2xD0t/freepik-the-style-is-candid-image-photography-with-natural-27776.png";

  return (
    <div className="flex h-screen bg-gray-100 items-center justify-center">
      <div className="flex w-[800px] h-[600px] bg-white rounded-2xl shadow-2xl shadow-gray-800 overflow-hidden">
        {/* Left Side - Image with Link */}
        <a href={imageLink} target="_blank" rel="noopener noreferrer" className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
          {/* Optional: You can add an overlay or any other content here if needed */}
        </a>

        {/* Right Side - Login Form */}
        <div className="w-1/2 flex items-center justify-center px-8 py-8">
          <div className="w-full space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">Login</h1>
              <p className="text-gray-600">Welcome back!</p>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Mail size={20} />
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Passwor
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Lock size={20} />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                className="w-full py-2 bg-red-600 text-white rounded-lg font-medium 
                           hover:bg-white hover:text-red-600 transition-colors duration-300
                           border-2 border-red-600"
              >
                Login
              </button>

              <div className="text-right">
                <button className="text-blue-400 hover:text-blue-600 text-sm">
                  Forgot Password?
                </button>
              </div>

              {/* OR Line with Sign Up Button */}
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-800"></div>
                <span className="mx-4 text-gray-600">OR</span>
                <div className="flex-grow border-t border-gray-800"></div>
              </div>

              <button
                className="w-full py-2 bg-red-600 text-white rounded-lg font-medium 
                           hover:bg-white hover:text-red-600 transition-colors duration-300
                           border-2 border-red-600"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
