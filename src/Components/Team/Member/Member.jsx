import { motion } from 'framer-motion';
import React from 'react';

const Member = ({
  id,
  index,
  avatar,
  name,
  title,
  organization,
  counterVariants
}) => {
  return (
    <motion.div
      key={id}
      initial="hidden"
      whileInView="visible"
      variants={counterVariants}
      custom={index}
      viewport={{ once: true }}
      className="team-member relative min-w-60 max-h-80 py-12 px-3 flex-1 text-center p-6 bg-gray-100 rounded-lg shadow-lg  "
    >
      <img
        src={avatar}
        alt={name}
        className="w-28 h-28 rounded-full mx-auto mb-2"
      />
      <h3 className="max-w-38 mx-auto text-2xl font-bold text-balance">
        {name}
      </h3>
      <div className="absolute bottom-8 right-0 left-0">
        <p className="text-gray-700 ">{organization}</p>
        <p className="text-gray-700">{title}</p>
      </div>
    </motion.div>
  );
};

export default Member;
