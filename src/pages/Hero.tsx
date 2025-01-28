import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-transparent"></div>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div className="text-center">
            <div className="flex justify-center">
              <Heart className="h-12 w-12 text-rose-600 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Connecting</span>
              <span className="block text-rose-600">Kindness to Needs</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Join us in creating a world where every act of kindness bridges the gap between those who can give and those in need. Together, we can make a difference.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="/donate" className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-8 py-3 text-base font-medium text-white hover:bg-rose-700 md:px-10 md:py-4 md:text-lg">
                  Start Giving
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="/causes" className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-rose-600 hover:bg-gray-50 md:px-10 md:py-4 md:text-lg">
                  Explore Causes <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}