import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-transparent sticky w-full inset-x-0 top-0 z-30 transition-all duration-300 ${
      scrolled ? 'bg-black/20' : ''
    }`}>
      <div className={`absolute container backdrop-blur-lg flex flex-col lg:flex-row justify-between items-center px-4 py-4 w-full
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-blue-500/10 before:to-transparent before:opacity-0 
        hover:before:opacity-100 before:transition-opacity before:duration-500`}>
        
        {/* Join/Sponsor Links */}
        <div className="flex space-x-4 order-2 lg:order-none">
          <a className="text-white relative overflow-hidden group px-2 py-1" href='#'>
            <span className="relative z-10 transition-transform duration-300 group-hover:transform group-hover:translate-y-[-2px]">
              Join Us
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a className="text-white relative overflow-hidden group px-2 py-1" href='#'>
            <span className="relative z-10 transition-transform duration-300 group-hover:transform group-hover:translate-y-[-2px]">
              Sponsor Us
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="order-1 lg:order-none w-min ml-auto block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none right-0 transition-transform duration-300 hover:scale-110"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 hidden' : ''}`} 
                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
            <svg className={`${isOpen ? '' : 'hidden'} w-6 h-6 transform transition-transform duration-300`} 
                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-8 order-3 lg:order-none mt-4 lg:mt-0 w-full lg:w-auto
          transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 lg:translate-y-0 lg:opacity-100'}`} 
          id="mobile-menu">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0 text-center">
            <li className="group relative">
              <Link className="text-white px-2 py-1 inline-block w-full transition-colors duration-300 group-hover:text-blue-400" to="/">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li className="group relative">
              <a className="text-white px-2 py-1 inline-block w-full transition-colors duration-300 group-hover:text-blue-400" href="#">
                Projects
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
            <li className="relative group">
              <a className="text-white px-2 py-1 inline-block w-full transition-colors duration-300 group-hover:text-blue-400" href="#">
                TimeLine
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <ul className="absolute hidden group-hover:block bg-black/50 backdrop-blur-lg text-white p-4 mt-1 space-y-2 rounded-lg
                transform transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
                <li className="group/item relative">
                  <a href="/blogs" className="block px-2 py-1 transition-colors duration-300 group-hover/item:text-blue-400">
                    Blogs
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover/item:scale-x-100" />
                  </a>
                </li>
                <li className="group/item relative">
                  <a href="#" className="block px-2 py-1 transition-colors duration-300 group-hover/item:text-blue-400">
                    Our Events
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover/item:scale-x-100" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="group relative">
              <Link className="text-white px-2 py-1 inline-block w-full transition-colors duration-300 group-hover:text-blue-400" to="/about">
                About Us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;