import React from 'react'
import { motion } from 'framer-motion';

const Topic = ({ id, headline, description}) => {
    return (
        <motion.div 
            id={id}
            key={id} 
            whileHover={{ scale: 1.06 }}
            className="project-card p-6 bg-white rounded-lg shadow-lg hover:bg-indigo-700 hover:text-white"
        >
            <h3 className="text-2xl font-bold mb-4">{headline}</h3>
            <p>
                {description}
            </p>
        </motion.div>
    )
}

export default Topic