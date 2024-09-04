import React from 'react';

function TeamMemberSection() {
  const teamMembers = [
    { name: 'Dr. Jane Doe', title: 'Lead Researcher', avatar: 'https://via.placeholder.com/150' },
    { name: 'John Smith', title: 'AI Scientist', avatar: 'https://via.placeholder.com/150' },
    { name: 'Emily Davis', title: 'Data Scientist', avatar: 'https://via.placeholder.com/150' },
    { name: 'Michael Johnson', title: 'Machine Learning Engineer', avatar: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="team-section py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Our Team</h2>
        <p className="text-lg mb-12">
          Meet the experts driving innovation at MIDIS Lab.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-gray-700">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMemberSection;
