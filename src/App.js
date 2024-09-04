import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturedProjects from './components/FeaturedProjects';
import ImpactStatistics from './components/ImpactStatistics'; // Import the new section
import CollaborateCTA from './components/CollaborateCTA';
import TeamMemberSection from './components/TeamMemberSection';
import ProjectsOverview from './components/ProjectsOverview';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsOverview />
      <FeaturedProjects />
      <ImpactStatistics />
      <TeamMemberSection />
      <CollaborateCTA />
      <Footer />
    </div>
  );
}

export default App;
