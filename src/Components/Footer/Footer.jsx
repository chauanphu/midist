import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon
} from '@heroicons/react/outline';
import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding and Description */}
          <div>
            <img
              src="https://via.placeholder.com/150x50" // Replace with actual logo
              alt="MIDIS Lab Logo"
              className="mb-4"
            />
            <p className="text-lg mb-4">
              Pioneering the Future of Machine Intelligence & Data Science.
            </p>
            <p className="text-sm">
              MIDIS Lab is dedicated to advancing AI through cutting-edge
              research and global collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-indigo-500">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <a className="hover:text-indigo-500">Projects</a>
              </li>
              <li className="mb-2">
                <a className="hover:text-indigo-500">Team</a>
              </li>
              <li className="mb-2">
                <a className="hover:text-indigo-500">Publications</a>
              </li>
              <li className="mb-2">
                <a className="hover:text-indigo-500">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Information and Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-start mb-4">
              <LocationMarkerIcon className="h-6 w-6 text-indigo-500 mr-4" />
              <p>Quarter 6, Thu Duc City, Ho Chi Minh City</p>
            </div>
            <div className="flex items-start mb-4">
              <MailIcon className="h-6 w-6 text-indigo-500 mr-4" />
              <p>
                <a
                  href="mailto:info@midislab.com"
                  className="hover:text-indigo-500"
                >
                  nttloan@hcmiu.edu.vn
                </a>
              </p>
            </div>
            <div className="flex items-start mb-4">
              <PhoneIcon className="h-6 w-6 text-indigo-500 mr-4" />
              <p>
                <a href="tel:+1234567890" className="hover:text-indigo-500">
                  +1 (234) 567-890
                </a>
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-indigo-500"
              >
                <FaLinkedin size={24} />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-indigo-500">
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-indigo-500"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-indigo-800 text-center text-gray-500 text-sm">
          <p>&copy; 2024 MIDIS Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
