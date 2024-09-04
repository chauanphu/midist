import React from 'react';

function ProjectsOverview() {
  return (
    <div className="projects-overview py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Research Topics</h2>
        <p className="text-lg mb-12">
          Explore some of our groundbreaking research projects that are shaping the future of AI and Data Science.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="project-card p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Autonomous Systems</h3>
            <p>
              Developing AI-driven technologies for self-driving vehicles and autonomous robotics.
            </p>
          </div>
          <div className="project-card p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">AI in Healthcare</h3>
            <p>
              Leveraging machine learning to improve diagnostics and patient outcomes.
            </p>
          </div>
          <div className="project-card p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Natural Language Processing</h3>
            <p>
              Enhancing AI's understanding of human language for better communication and automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsOverview;
