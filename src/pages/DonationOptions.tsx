import React from 'react';
import { Coins, Package, BookOpen, Heart, ArrowRight } from 'lucide-react';

const options = [
  {
    title: 'Monetary Donations',
    description: 'Support causes with direct financial contributions, enabling organizations to address immediate needs and plan for long-term impact.',
    icon: Coins,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100'
  },
  {
    title: 'Essential Items',
    description: 'Donate clothing, food, and other essential items to help families and individuals in need of immediate support.',
    icon: Package,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    title: 'Educational Resources',
    description: 'Contribute books and learning materials to support education initiatives and empower communities through knowledge.',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  }
];

export function DonationOptions() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ways to Make a Difference
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Choose how you'd like to contribute and make an impact in someone's life today.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((option) => (
            <div key={option.title} className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className={`inline-flex rounded-xl ${option.bgColor} p-3`}>
                <option.icon className={`h-6 w-6 ${option.color}`} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{option.title}</h3>
              <p className="mt-2 text-base text-gray-500">{option.description}</p>
              <div className="mt-6">
                <a href={`/donate/${option.title.toLowerCase().replace(' ', '-')}`} className="inline-flex items-center text-rose-600 hover:text-rose-700">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/donate" className="inline-flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-8 py-3 text-base font-medium text-white hover:bg-rose-700">
            Start Donating <Heart className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}