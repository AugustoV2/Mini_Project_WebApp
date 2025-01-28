import React from 'react';
import { Users, Target, Calendar } from 'lucide-react';

const stats = [
  { label: 'Lives Impacted', value: '10,000+', icon: Users },
  { label: 'Success Rate', value: '95%', icon: Target },
  { label: 'Active Projects', value: '50+', icon: Calendar }
];

const testimonials = [
  {
    quote: "Bridge of Hope made it incredibly easy for me to support causes I care about. Their transparency and impact tracking give me confidence in my contributions.",
    author: "Sarah M.",
    role: "Regular Donor"
  },
  {
    quote: "Thanks to the platform's support, we've been able to reach more people in need and make a bigger impact in our community.",
    author: "David Chen",
    role: "Non-profit Partner"
  }
];

export function ImpactSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Collective Impact
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Together, we're creating lasting change in communities around the world.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="relative rounded-lg bg-white p-8 text-center shadow-sm">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
              <stat.icon className="mx-auto h-8 w-8 text-rose-600" />
              <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">{stat.value}</p>
              <p className="mt-2 text-base text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="relative rounded-lg bg-white p-8 shadow-sm">
                <div className="absolute inset-0 rounded-lg border-2 border-gray-200"></div>
                <div className="relative">
                  <p className="text-lg text-gray-600">"{testimonial.quote}"</p>
                  <div className="mt-6">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}