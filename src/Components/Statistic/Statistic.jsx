import { AcademicCapIcon, GlobeIcon, UserGroupIcon } from '@heroicons/react/outline';
import React from 'react';
import Figure from './Figure/Figure';

const Statistic = ({ header, description, figures}) => {
  // Animation configuration
  const counterVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Delay based on index
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div className="impact-statistics py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">{header}</h2>
          <p className="text-lg text-gray-700">
            {description}
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="flex flex-col sm:flex-row justify-around items-center space-y-8 sm:space-y-0">
          {figures.map((figure, index) => (
            <Figure 
                key={figure.id}
                id={figure.id} 
                index={index} 
                icon={figure.Icon} 
                suffix={figure.suffix} 
                label={figure.label} 
                value={figure.value}
                counterVariants={counterVariants}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statistic;
