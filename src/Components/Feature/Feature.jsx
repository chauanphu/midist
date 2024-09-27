import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import ProjectFeature from './ProjectFeature/ProjectFeature';

const projects = [
    {
        id: 1,
        title: 'Parcel Locker',
        description: 'Developing AI-driven technologies for self-driving vehicles and autonomous robotics.',
        imageUrl: 'https://via.placeholder.com/400x300'
    },
    {
        id: 2,
        title: 'Student Tracking',
        description: 'Leveraging machine learning to improve diagnostics and patient outcomes.',
        imageUrl: 'https://via.placeholder.com/400x300'
    },
    {
        id: 3,
        title: 'AI4Health',
        description: 'Enhancing AI’s understanding of human language for better communication and automation.',
        imageUrl: 'https://via.placeholder.com/400x300'
    }
];

const Feature = () => {
    const ref = useRef(null);
    const inView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView]);

    const counterVariants = {
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2, 
                duration: 0.5,
                ease: 'easeOut',
            },
        }),
        hidden: { opacity: 0, y: 20 },
    };

    return (
        <div ref={ref} className="featured-projects py-20 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1.4 }}
                >
                    <h2 className="text-4xl font-semibold mb-10 text-gray-900">Featured Projects</h2>
                    <p className="text-lg mb-12 text-gray-700">
                        Explore some of our groundbreaking research projects that are shaping the future of AI and Data Science.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    {projects.map((project, index) => (
                        <ProjectFeature
                            key={project.id}
                            id={project.id}
                            index={index}
                            imageUrl={project.imageUrl}
                            title={project.title}
                            description={project.description}
                            counterVariants={counterVariants}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feature;
