import { motion } from 'framer-motion';
import React from 'react';


const Figure = ({ id, index, value, suffix, label, icon: Icon, counterVariants}) => {
    return (
        <motion.div
            key={id}
            className="stat-card text-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={counterVariants}
        >
            <Icon className="h-12 w-12 text-indigo-600 mb-4 mx-auto" />
            <div className="text-5xl font-bold text-gray-900">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0 }}
                >
                    {value}
                </motion.span>
                {suffix && <span>{suffix}</span>}
            </div>
            <p className="text-lg text-gray-600">{label}</p>
        </motion.div>
    )
}

export default Figure