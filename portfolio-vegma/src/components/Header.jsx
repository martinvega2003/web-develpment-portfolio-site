import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isExamplesOpen, setIsExamplesOpen] = useState(false);

  const toggleExamplesMenu = () => {
    setIsExamplesOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl font-bold">
          My Website
        </Link>
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <a
            href="#about"
            className="relative group text-lg transition-all transform hover:scale-105"
          >
            About
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href="#service"
            className="relative group text-lg transition-all transform hover:scale-105"
          >
            Service
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href='#examples'
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsExamplesOpen(true)}
            onMouseLeave={() => setIsExamplesOpen(false)}
          >
            Examples
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            {isExamplesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-purple-600 rounded-lg shadow-lg py-2">
                <Link
                  to="#example1"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Project 1
                </Link>
                <Link
                  to="#example2"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Project 2
                </Link>
                <Link
                  to="#example3"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Project 3
                </Link>
              </div>
            )}
          </a>
          {/* Contact Me Button */}
          <Link
            to="/form"
            className="px-4 py-2 rounded-full bg-white text-purple-600 font-bold transition-all hover:bg-purple-200"
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;



