import React from 'react';
import { Heart, Search, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-600" />
              <span className="font-bold text-xl text-gray-900">Bridge of Hope</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            <Link to="/causes" className="text-gray-700 hover:text-rose-600">Causes</Link>
            <Link to="/campaigns" className="text-gray-700 hover:text-rose-600">Campaigns</Link>
            <Link to="/donate" className="text-gray-700 hover:text-rose-600">Donate</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-rose-600">Dashboard</Link>
            <button className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700">
              Start Giving
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button className="text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}