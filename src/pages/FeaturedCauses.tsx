import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const causes = [
  {
    id: 1,
    title: "Children's Education Fund",
    organization: "Hope Foundation",
    raised: 15000,
    goal: 25000,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
    category: "Education"
  },
  {
    id: 2,
    title: "Food for Families",
    organization: "Community Outreach",
    raised: 8000,
    goal: 10000,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    category: "Food"
  },
  {
    id: 3,
    title: "Shelter Renovation",
    organization: "Safe Haven",
    raised: 30000,
    goal: 50000,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80",
    category: "Shelter"
  }
];

export function FeaturedCauses() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Causes
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Make a difference today by supporting these verified causes
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <div key={cause.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={cause.image} alt={cause.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-rose-600">
                    {cause.category}
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{cause.title}</p>
                    <p className="mt-3 text-base text-gray-500">{cause.organization}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-rose-200">
                      <div 
                        style={{ width: `${(cause.raised/cause.goal)*100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-rose-600"
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      ${cause.raised.toLocaleString()} raised
                    </div>
                    <div className="text-sm text-gray-600">
                      Goal: ${cause.goal.toLocaleString()}
                    </div>
                  </div>
                  <a
                    href={`/causes/${cause.id}`}
                    className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
                  >
                    Donate Now <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}