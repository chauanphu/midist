import { ChevronDownIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const DesktopMenu = ({ className, scroll, dropDown, handleDropDown, scrollToFooter }) => {
    return (
        <div className={`hidden md:flex space-x-6 ${className}`} >
            <Link
                to="/"
                className={` hover:cursor-pointer hover:text-indigo-600 ${scroll ? 'text-gray-800' : 'text-white'}`}
            >
                Home
            </Link>

            <div className='relative'>
                <button
                    onClick={handleDropDown}
                    className={`flex items-center hover:text-indigo-600 ${scroll ? 'text-gray-800' : 'text-white'}`}
                >
                    Projects
                    <ChevronDownIcon className={`h-5 w-5 ml-1 transform transition-transform duration-500  ${dropDown ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                    {dropDown &&
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className='absolute rounded-xl left-0 mt-2 w-48 bg-white shadow-xl'
                        >
                            <Link
                                to="/parcel_locker"
                                className='rounded-t-xl block px-4 py-2 text-gray-800  hover:cursor-pointer hover:bg-indigo-600 hover: hover:text-white'
                            >
                                Parcel Locker
                            </Link>

                            <Link
                                to="/student_tracking"
                                className='block px-4 py-2 text-gray-800 hover:cursor-pointer hover:bg-indigo-600 hover:text-white'
                            >
                                Student Tracking
                            </Link>

                            <Link
                                to="/ai4health"
                                className='rounded-b-xl block px-4 py-2 text-gray-800 hover:cursor-pointer hover:bg-indigo-600 hover:text-white'
                            >
                                AI4Health
                            </Link>
                        </motion.div>
                    }
                </AnimatePresence>


            </div>

            <a className={`${scroll ? 'text-gray-800' : 'text-white'} hover:cursor-pointer hover:text-indigo-600`}>Team</a>
            <a className={`${scroll ? 'text-gray-800' : 'text-white'} hover:cursor-pointer hover:text-indigo-600`}>Publications</a>
            <a className={`${scroll ? 'text-gray-800' : 'text-white'} hover:cursor-pointer hover:text-indigo-600`}>News</a>
            <a
                onClick={() => scrollToFooter()}
                className={`${scroll ? 'text-gray-800' : 'text-white'} hover:cursor-pointer hover:text-indigo-600`}
            >
                Contact
            </a>
        </div>
    )
}

export default DesktopMenu;