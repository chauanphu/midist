import { useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Member from './Member/Member';

const teamMembers = [
    { name: 'Dr. Jane Doe', title: 'Lead Researcher', avatar: 'https://via.placeholder.com/150' },
    { name: 'John Smith', title: 'AI Scientist', avatar: 'https://via.placeholder.com/150' },
    { name: 'Emily Davis', title: 'Data Scientist', avatar: 'https://via.placeholder.com/150' },
    { name: 'Michael Johnson', title: 'Machine Learning Engineer', avatar: 'https://via.placeholder.com/150' },
];

const Team = ({ header, description, members}) => {
    const ref = useRef(null);
    const inView = useInView(ref);

    console.log(header, ' ', description)

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
    }

    return (
        <div ref={ref} className="team-section py-20 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-6">Our Team</h2>
                <p className="text-lg mb-12">
                    Meet the experts driving innovation at MIDIS Lab.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <Member 
                            id={index}
                            key={index}
                            index={index} 
                            title={member.title}
                            avatar={member.avatar}
                            name={member.name}
                            counterVariants={counterVariants}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;