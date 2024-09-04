import React from 'react';
import { AcademicCapIcon, ChipIcon, LightBulbIcon } from '@heroicons/react/outline'; // Example icons from Heroicons

function AboutSection() {
  return (
    <div className="about-section py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column: Mission and Key Focus Areas */}
        <div className="text-section px-6">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">About MIDIS Lab</h2>
          <p className="text-lg mb-6 text-gray-700">
            MIDIS Lab is at the forefront of AI and Data Science, focused on pushing the boundaries of machine intelligence.
            Our research spans multiple domains, from advanced machine learning models to AI ethics and robotics.
          </p>
          
          {/* Focus Areas */}
          <div className="focus-areas space-y-4">
            <div className="flex items-start">
              <AcademicCapIcon className="h-6 w-6 text-indigo-600 mr-4" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Machine Learning</h3>
                <p className="text-gray-600">Developing innovative models that make machines smarter and more efficient.</p>
              </div>
            </div>

            <div className="flex items-start">
              <ChipIcon className="h-6 w-6 text-indigo-600 mr-4" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Robotics</h3>
                <p className="text-gray-600">Advancing robotics with cutting-edge AI for autonomous systems.</p>
              </div>
            </div>

            <div className="flex items-start">
              <LightBulbIcon className="h-6 w-6 text-indigo-600 mr-4" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">AI Ethics</h3>
                <p className="text-gray-600">Ensuring AI is used responsibly and ethically in society.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="image-section px-6">
          <img
            src="https://via.placeholder.com/600x400" // Placeholder image; replace with an actual image
            alt="MIDIS Lab Research Team"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
