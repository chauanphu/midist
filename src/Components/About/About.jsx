import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Point from './Point/Point';

const About = ({ header, description, points = [], imageUrl, reverse = false, contentSize, iconSize }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView]);

    return (
        <div ref={ref} className="about-section py-20 bg-gray-100">
            <div className={`max-w-6xl mx-auto gap-8 items-center flex sm:flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                {/* Left Column: Mission and Key Focus Areas */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1.4 }}
                    className={`text-section px-6 max-w-${contentSize}`}
                >
                    <h2 className="text-4xl font-semibold mb-6 text-gray-900">{header}</h2>
                    <p className="text-lg mb-6 text-gray-700">
                        {description}
                    </p>

                    {/* Focus Areas */}
                    <div className="focus-areas space-y-4">
                        {points.map(point =>
                            <Point 
                                id={point.id}
                                key={point.id}
                                label={point.label} 
                                content={point.content} 
                                Icon={point.Icon}
                                iconSize={iconSize} 
                            />
                        )}
                    </div>
                </motion.div>

                {/* Right Column: Image */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1.4 }}
                    className="image-section px-6 max-w-xl"
                >
                    <img
                        src={imageUrl}
                        alt="MIDIS Lab Research Team"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default About