import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffdf6]">
      <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Left Section - Illustration */}
        <div className="hidden lg:flex w-1/2 bg-[#ffefe3] items-center justify-center relative">
          <img
            src="https://i.ibb.co/HKcnZNx/IMG-20250125-WA0034.jpg"
            alt="Illustration"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800">Hello Again!</h2>
          <p className="text-gray-600 mt-2">Welcome back, you&apos;ve been missed!</p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter username"
                className="w-full px-10 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#ff6b6b] focus:outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-10 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#ff6b6b] focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#ff6b6b] focus:ring-[#ff6b6b] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-[#ff6b6b] hover:text-[#e25555]"
              >
                Recovery Password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#ff6b6b] text-white font-medium rounded-lg hover:bg-[#e25555] focus:outline-none"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Not a member?{' '}
              <Link to="/sign-up" className="font-medium text-[#ff6b6b] hover:text-[#e25555]">
                Register now
              </Link>
            </p>
          </form>

          <div className="mt-6 flex items-center justify-center space-x-4">
            <span className="text-gray-400 text-sm">Or continue with</span>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="h-6 w-6" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="h-6 w-6" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <img src="https://www.svgrepo.com/show/157810/facebook.svg" alt="Facebook" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
