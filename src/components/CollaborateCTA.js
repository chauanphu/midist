import React from 'react';
import { motion } from 'framer-motion';

function CollaborateCTA() {
  return (
    <div className="collaborate-cta py-16 bg-indigo-600 text-white text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">Collaborate with Us</h2>
        <p className="text-lg mb-8">
          Interested in working together on groundbreaking AI research? Let’s connect and explore partnership opportunities.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-indigo-600 rounded-lg text-lg font-medium"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </div>
  );
}

export default CollaborateCTA;
