import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <div className="hero bg-gray-900 text-white h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl font-bold mb-4">
          Welcome to MIDIS Lab
        </h1>
        <p className="text-xl mb-6">
          Pioneering the future of Machine Intelligence and Data Science.
        </p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-indigo-600 rounded-lg text-lg font-medium"
        >
          Explore Our Research
        </motion.a>
      </motion.div>
    </div>
  );
}

export default HeroSection;
