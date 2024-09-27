import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Member = ({ id, index, avatar, name, title, counterVariants }) => {
    return (
        <motion.div
            key={id}
            initial="hidden"
            whileInView="visible"
            variants={counterVariants}
            custom={index}
            viewport={{ once: true }}
            className="team-member text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <img
                src={avatar}
                alt={name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-gray-700">{title}</p>
        </motion.div>
    )
}

export default Member