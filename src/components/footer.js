import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 body-font relative overflow-hidden">
      {/* Decorative space elements */}
      <div className="absolute inset-0 opacity-5">
        <Star className="absolute top-12 right-24 text-white" size={12} />
        <Star className="absolute top-36 left-48 text-white" size={14} />
        <Star className="absolute bottom-24 right-96 text-white" size={10} />
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-widest text-sm mb-3">EXPLORE</h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link to={"/"} className="text-gray-300 hover:text-blue-400 transition-colors">Mission Control</Link>
              </li>
              <li className="mb-2">
                <a className="text-gray-300 hover:text-blue-400 transition-colors">Deep Space Projects</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-300 hover:text-blue-400 transition-colors">Cosmic Timeline</a>
              </li>
              <li className="mb-2">
                <Link to={"/about"} className="text-gray-300 hover:text-blue-400 transition-colors">Our Mission</Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-widest text-sm mb-3">FEATURED ARTICLES</h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <a className="text-gray-300 hover:text-blue-400 transition-colors">Exoplanet Discoveries</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-300 hover:text-blue-400 transition-colors">Black Hole Mysteries</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-300 hover:text-blue-400 transition-colors">Mars Colonization</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-300 hover:text-blue-400 transition-colors">Space Technology</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-widest text-sm mb-3">COSMIC EVENTS</h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <a className="text-gray-300 hover:text-blue-400 transition-colors">Meteor Showers</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-300 hover:text-blue-400 transition-colors">Solar Eclipses</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-300 hover:text-blue-400 transition-colors">Space Launches</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-300 hover:text-blue-400 transition-colors">Astronomical Phenomena</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-widest text-sm mb-3">JOIN OUR MISSION</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-300">Launch with Us</label>
                <input type="text" id="footer-field" name="footer-field" placeholder="Your email" 
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex items-center text-gray-100 bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2 md:text-left text-center">Join the Cosmic Chronicles
              <br/>Get weekly space updates
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-100">
            <Rocket className="text-blue-400" size={32} />
            <span className="ml-3 text-xl">Vyomnauts</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© 2024 Vyomnauts —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-blue-400 ml-1" target="_blank">@psitvyomnauts</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 hover:text-blue-400 transition-colors">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 hover:text-blue-400 transition-colors">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 hover:text-blue-400 transition-colors">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;