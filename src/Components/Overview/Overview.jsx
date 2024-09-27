import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Topic from './Topic/Topic';

const Overview = ({ header, description, topics = [] }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView])

    return (
        <div ref={ref} className="projects-overview py-20 bg-gray-50">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1.4 }}
                className="max-w-6xl mx-auto text-center"
            >
                <h2 className="text-4xl font-semibold mb-6">{header}</h2>
                <p className="text-lg mb-12">
                    {description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topics.map(topic => 
                        <Topic id={topic.id} key={topic.id} headline={topic.headline} description={topic.description}/>
                    )}
                </div>

            </motion.div>
        </div>
    )
}

export default Overview