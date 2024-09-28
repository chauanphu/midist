import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectFeature = ({ to, id, index, imageUrl, title, description, counterVariants }) => {
    return (
        <motion.div
            key={id}
            initial="hidden"
            whileInView="visible"
            variants={counterVariants}
            custom={index}
            viewport={{ once: true }}
            whileTap={{ scale: 0.94 }}
            whileHover={{ scale: 1.06 }}
            className="project-card bg-gray-100 rounded-lg shadow-lg overflow-hidden"
        >
            {/* Project Image */}
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover"
            />

            {/* Project Details */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-indigo-600 transition">
                    <a href="#">{title}</a>
                </h3>
                <p className="text-gray-700 mb-6">{description}</p>

                {/* Learn More Link */}
                <Link to={to} className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Learn More &rarr;
                </Link>
            </div>
        </motion.div>
    )
}

export default ProjectFeature