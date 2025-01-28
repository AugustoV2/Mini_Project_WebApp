import React from 'react';
import { Heart, ArrowRight, Coins, Package, BookOpen, Users, Target, Calendar, Facebook, Twitter, Instagram, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

// Hero Section
function Hero() {
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

// Donation Options Section
const donationOptions = [
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

function DonationOptions() {
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
          {donationOptions.map((option) => (
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

// Featured Causes Section
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

function FeaturedCauses() {
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

// Impact Section
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

function ImpactSection() {
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

// Footer Section
function Footer() {
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
              <li><Link to="/causes" className="text-base text-gray-300 hover:text-white">Causes</Link></li>
              <li><Link to="/donate" className="text-base text-gray-300 hover:text-white">Donate</Link></li>
              <li><Link to="/campaigns" className="text-base text-gray-300 hover:text-white">Campaigns</Link></li>
              <li><Link to="/about" className="text-base text-gray-300 hover:text-white">About Us</Link></li>
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

// Main Welcome Component
export function Welcome() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <DonationOptions />
      <FeaturedCauses />
      <ImpactSection />
      <Footer />
    </div>
  );
}