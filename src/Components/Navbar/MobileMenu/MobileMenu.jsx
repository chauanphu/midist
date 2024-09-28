import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const MobileMenu = ({
    scroll,
    dropDown,
    handleDropDown,
    openMenu,
    handleOpenMenu,
    scrollToFooter
}) => {
    return (
        <AnimatePresence>
            {openMenu && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`md:hidden ${openMenu && 'pb-4'}`}
                >
                    <div>
                        <Link
                            to="/"
                            className={`block px-4 py-2 hover:bg-indigo-600 hover:text-white ${scroll ? 'text-gray-800' : 'text-white'}`}
                        >
                            Home
                        </Link>

                        <div className="relative">
                            <div
                                className={`relative block px-4 py-2  hover:bg-indigo-600 hover:text-white ${scroll ? 'text-gray-800' : 'text-white'}`}
                            >
                                <button onClick={handleDropDown}>
                                    Projects
                                    <ChevronDownIcon
                                        className={`h-5 inline ml-1 flex-1 ${dropDown ? 'rotate-180' : ''}`}
                                    />
                                </button>
                            </div>
                            {dropDown && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-4 w-full"
                                >
                                    <Link
                                        to="/parcel_locker"
                                        className={`block px-4 py-2  hover:bg-indigo-600 hover:text-white ${scroll ? 'text-gray-800' : 'text-white'}`}
                                    >
                                        Parcel Locker
                                    </Link>
                                    <Link
                                        to="/student_tracking"
                                        className={`block px-4 py-2  hover:bg-indigo-600 hover:text-white ${scroll ? 'text-gray-800' : 'text-white'}`}
                                    >
                                        Student Tracking
                                    </Link>
                                    <Link
                                        to="/ai4health"
                                        className={`block px-4 py-2  hover:bg-indigo-600 hover:text-white ${scroll ? 'text-gray-800' : 'text-white'}`}
                                    >
                                        AI4Health
                                    </Link>
                                </motion.div>
                            )}
                        </div>
                        <a
                            href="#team"
                            className={`block px-4 py-2  hover:bg-indigo-600 hover:text-white ${scroll ? 'text-gray-800' : 'text-white'}`}
                        >
                            Research Team
                        </a>
                        <a
                            href="#publications"
                            className={`block px-4 py-2  hover:bg-indigo-600 hover:text-white ${scroll ? 'text-gray-800' : 'text-white'}`}
                        >
                            Publications
                        </a>
                        <a
                            href="#events"
                            className={`block px-4 py-2  hover:bg-indigo-600 hover:text-white ${scroll ? 'text-gray-800' : 'text-white'}`}
                        >
                            Events & News
                        </a>
                        <a
                            onClick={() => scrollToFooter()}
                            className={`block px-4 py-2  hover:bg-indigo-600 hover:text-white ${scroll ? 'text-gray-800' : 'text-white'}`}
                        >
                            Contact
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
