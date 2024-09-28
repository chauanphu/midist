import { useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Member from './Member/Member';
import './Team.css';

const Team = ({ className = '', header, description, members }) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('visible');
    }
  }, [inView]);

  const counterVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.5,
        ease: 'easeOut'
      }
    }),
    hidden: { opacity: 0, y: 20 }
  };

  return (
    <div ref={ref} className={`team-section bg-white ${className}`}>
      <div className="max-w-6xl mx-auto text-center">
        {header && <h2 className="text-4xl font-semibold mb-2">{header}</h2>}
        {description && <p className="text-lg mb-12">{description}</p>}

        <div id="placeholder" className="flex space-x-8 h-96 overflow-y-hidden">
          {members && members.map((member, index) => (
            <Member
              id={index}
              key={index}
              index={index}
              title={member.title}
              avatar={member.avatar}
              name={member.name}
              organization={member.organization}
              counterVariants={counterVariants}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
