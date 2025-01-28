import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-xl font-bold text-white">Bridge of Hope</span>
            </div>
            <p className="mt-4 text-base text-gray-400">
              Connecting kindness to needs, one donation at a time.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Navigation</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/causes" className="text-base text-gray-300 hover:text-white">Causes</a></li>
              <li><a href="/donate" className="text-base text-gray-300 hover:text-white">Donate</a></li>
              <li><a href="/campaigns" className="text-base text-gray-300 hover:text-white">Campaigns</a></li>
              <li><a href="/about" className="text-base text-gray-300 hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:contact@bridgeofhope.org" className="ml-2 text-base text-gray-300 hover:text-white">
                  contact@bridgeofhope.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-base text-gray-300">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Follow Us</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Bridge of Hope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}