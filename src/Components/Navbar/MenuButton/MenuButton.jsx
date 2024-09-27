import { motion } from "framer-motion";
import React from 'react';

const MenuButton = ({ scroll, openMenu, handleOpenMenu }) => {
    return (
        <button 
            onClick={handleOpenMenu}
            className='md:hidden relative w-5 h-11 flex flex-col justify-center items-center' 
        >
            <motion.span
                animate={openMenu ? { rotate: 45, y: 6, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                transition={{ duration: 0.4 }}
                className={`block h-0.5 w-full ${scroll ? 'bg-gray-800' : 'bg-white'} `}
            />
            <motion.span
                animate={openMenu ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`block h-0.5 w-full my-1 ${scroll ? 'bg-gray-800' : 'bg-white'} `}
            />
            <motion.span
                animate={openMenu ? { rotate: -45, y: -6, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                transition={{ duration: 0.4 }}
                className={`block h-0.5 w-full ${scroll ? 'bg-gray-800' : 'bg-white'} `}
            />
        </button>
    )
}

export default MenuButton