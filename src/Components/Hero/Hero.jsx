import { motion } from 'framer-motion';
import React from 'react';

const Hero = ({ header, description, prompt, background }) => {
  const backgroundStyle = background
    ? {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        zIndex: 1
      }
    : {};

  return (
    <>
      {/* Overlayer */}
      {background && (
        <div className="absolute h-[110%] md:h-[106%] lg:h-[111%] xl:h-[107%] inset-0 bg-black opacity-30 z-2"></div>
      )}
      <div
        style={backgroundStyle}
        className="hero bg-gray-900 text-white h-screen flex items-center justify-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-4xl z-2"
        >
          {/* Overlay to darken the background */}
          <h1 className="text-5xl font-bold mb-4 drop-shadow-xl">{header}</h1>
          <p className="text-xl mb-6 drop-shadow-xl">{description}</p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block px-6 py-3 bg-indigo-600 rounded-lg text-lg font-medium"
          >
            {prompt}
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
