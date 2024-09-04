import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle scroll behavior for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50" // Placeholder for team logo
              alt="MIDIS Lab Logo"
              className="h-10 w-10"
            />
            <span className={`ml-2 text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              MIDIS Lab
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-indigo-600`}>
              Home
            </a>

            {/* Projects with Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`${isScrolled ? 'text-gray-800' : 'text-white'} flex items-center hover:text-indigo-600`}
              >
                Projects
                <ChevronDownIcon className="h-5 w-5 ml-1" />
              </button>

              {/* Animate the Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2"
                  >
                    <a
                      href="#project1"
                      className="block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white"
                    >
                      Parcel Locker
                    </a>
                    <a
                      href="#project2"
                      className="block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white"
                    >
                      Student Tracking
                    </a>
                    <a
                      href="#project3"
                      className="block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white"
                    >
                      AI4Health
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#team" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-indigo-600`}>
              Research Team
            </a>
            <a href="#publications" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-indigo-600`}>
              Publications
            </a>
            <a href="#events" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-indigo-600`}>
              Events & News
            </a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-indigo-600`}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <XIcon className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              ) : (
                <MenuIcon className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block px-4 py-2 text-gray-800 hover:bg-indigo-600">
            Home
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-600"
            >
              Projects
              <ChevronDownIcon className="h-5 w-5 inline ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="ml-4">
                <a href="#project1" className="block px-4 py-2 text-gray-800 hover:bg-indigo-600 ">
                  Project 1
                </a>
                <a href="#project2" className="block px-4 py-2 text-gray-800 hover:bg-indigo-600">
                  Project 2
                </a>
                <a href="#project3" className="block px-4 py-2 text-gray-800 hover:bg-indigo-600">
                  Project 3
                </a>
              </div>
            )}
          </div>
          <a href="#team" className="block px-4 py-2 text-gray-800 hover:bg-indigo-600">
            Research Team
          </a>
          <a href="#publications" className="block px-4 py-2 text-gray-800 hover:bg-indigo-600">
            Publications
          </a>
          <a href="#events" className="block px-4 py-2 text-gray-800 hover:bg-indigo-600">
            Events & News
          </a>
          <a href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-indigo-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
