import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, GlobeIcon, UserGroupIcon } from '@heroicons/react/outline';

function ImpactStatistics() {
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

  const statistics = [
    { id: 1, value: 50, label: 'Publications', icon: AcademicCapIcon, suffix: '+' },
    { id: 2, value: 10, label: 'Global Partnerships', icon: GlobeIcon },
    { id: 3, value: 5, label: 'Awards Won', icon: UserGroupIcon },
  ];

  return (
    <div className="impact-statistics py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">Our Achivements</h2>
          <p className="text-lg text-gray-700">
            Discover the significant milestones and achievements of MIDIS Lab.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="flex flex-col sm:flex-row justify-around items-center space-y-8 sm:space-y-0">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-card text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={counterVariants}
            >
              <stat.icon className="h-12 w-12 text-indigo-600 mb-4 mx-auto" />
              <div className="text-5xl font-bold text-gray-900">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.0 }}
                >
                  {stat.value}
                </motion.span>
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImpactStatistics;
