import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};


function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <a href="/welcome" className="text-2xl font-bold text-red-600">
                <FontAwesomeIcon icon={faHeart} /> 
                <span className="ml-2 text-2xl font-bold text-gray-900">Bridge of Hope</span>
              </a>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <a href="#home" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-m font-medium">About</a>
              <a href="#features" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-m font-medium">Features</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-m font-medium">Contact</a>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <a href="/login" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Login</a>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <header className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/portrait-male-friends-sharing-affectionate-moment-friendship_23-2151310371.jpg?t=st=1737996752~exp=1738000352~hmac=674bd5a0c7e8a137d0eab883486448ad9ef185ff662f156bc9677a8739fcb4ec&w=996')` }}>
      
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-white text-5xl font-bold mb-4">Transforming Giving: Easy, Transparent, and Private</h1>
          <p className="text-white text-lg mb-8">Bolt AI connects donors with verified causes, ensuring seamless contributions in both monetary and non-monetary forms, while prioritizing transparency and donor anonymity.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Start Donating</button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">Register Your Organization</button>
          </div>
        </div>
      </header>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              title: 'Verified Causes',
              description: 'All organizations and causes are vetted for authenticity.',
              icon: '🔍'
            }, {
              title: 'Multiple Contribution Options',
              description: 'Donate money, clothes, food, books, and more.',
              icon: '📦'
            }, {
              title: 'Anonymity',
              description: 'Choose to remain anonymous while donating.',
              icon: '🕶️'
            }, {
              title: 'Transparency Reports',
              description: 'Get real-time updates on fund usage.',
              icon: '📊'
            }].map((feature, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              step: 'Choose a Cause',
              description: 'Browse verified organizations and campaigns.',
              icon: '🎯'
            }, {
              step: 'Make a Contribution',
              description: 'Donate money or items easily.',
              icon: '💳'
            }, {
              step: 'Track Your Impact',
              description: 'Receive transparent reports on how your donation is used.',
              icon: '📈'
            }].map((step, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{step.step}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[{
              label: 'Total Donations',
              value: '25,000+'
            }, {
              label: 'Causes Supported',
              value: '500+'
            }, {
              label: 'Donors',
              value: '10,000+'
            }].map((stat, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-center mb-4">What Our Users Say</h3>
            <div className="carousel flex gap-4 overflow-auto">
              {["Bolt AI makes donating so easy and secure!", "I love how I can track my impact.", "Their anonymity feature is a game changer!"].map((testimonial, index) => (
                <div key={index} className="p-4 bg-white rounded shadow-md text-center">{testimonial}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: 'Donors',
              description: 'Start contributing to meaningful causes.',
              icon: '🤝'
            }, {
              title: 'Organizations',
              description: 'Register your cause to reach more donors.',
              icon: '🏢'
            }, {
              title: 'Volunteers',
              description: 'Sign up to help with logistics and more.',
              icon: '🛠️'
            }].map((option, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-6 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#" className="text-blue-300 hover:text-blue-500">FAQ</a>
            <a href="#" className="text-blue-300 hover:text-blue-500">Contact Us</a>
            <a href="#" className="text-blue-300 hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-blue-500">Terms of Use</a>
          </div>
          <div className="mb-4">Follow us on:
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="text-blue-300 hover:text-blue-500">Facebook</a>
              <a href="#" className="text-blue-300 hover:text-blue-500">Twitter</a>
              <a href="#" className="text-blue-300 hover:text-blue-500">LinkedIn</a>
            </div>
          </div>
          <p>&copy; 2025 Bolt AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Welcome;
