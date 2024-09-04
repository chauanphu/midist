import React from 'react';

function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: 'Parcel Locker',
      description: 'Developing AI-driven technologies for self-driving vehicles and autonomous robotics.',
      imageUrl: 'https://via.placeholder.com/400x300', // Placeholder image
    },
    {
      id: 2,
      title: 'Student Tracking',
      description: 'Leveraging machine learning to improve diagnostics and patient outcomes.',
      imageUrl: 'https://via.placeholder.com/400x300', // Placeholder image
    },
    {
      id: 3,
      title: 'AI4Health',
      description: 'Enhancing AI’s understanding of human language for better communication and automation.',
      imageUrl: 'https://via.placeholder.com/400x300', // Placeholder image
    }
  ];

  return (
    <div className="featured-projects py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-10 text-gray-900">Featured Projects</h2>
        <p className="text-lg mb-12 text-gray-700">
          Explore some of our groundbreaking research projects that are shaping the future of AI and Data Science.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              {/* Project Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-indigo-600 transition">
                  <a href="#">{project.title}</a>
                </h3>
                <p className="text-gray-700 mb-6">{project.description}</p>

                {/* Learn More Link */}
                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
