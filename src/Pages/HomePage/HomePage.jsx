import {
  AcademicCapIcon,
  ChipIcon,
  CurrencyDollarIcon,
  GlobeIcon,
  LightBulbIcon
} from '@heroicons/react/outline';
import React from 'react';
import { BiNetworkChart } from 'react-icons/bi';
import About from '../../Components/About/About';
import Collab from '../../Components/Collab/Collab';
import Feature from '../../Components/Feature/Feature';
import Hero from '../../Components/Hero/Hero';
import Overview from '../../Components/Overview/Overview';
import Statistic from '../../Components/Statistic/Statistic';
import Team from '../../Components/Team/Team';
import { DrMembers } from '../../Data/Data';

const topics = [
  {
    id: 1,
    headline: 'Autonomous Systems',
    description:
      'Developing AI-driven technologies for self-driving vehicles and autonomous robotics.'
  },
  {
    id: 2,
    headline: 'AI in Healthcare',
    description:
      'Leveraging machine learning to improve diagnostics and patient outcomes.'
  },
  {
    id: 3,
    headline: 'Natural Language Processing',
    description: `Enhancing AI's understanding of human language for better communication and automation.`
  }
];

const points = [
  {
    id: 1,
    label: 'Machine Learning',
    content:
      'Developing innovative models that make machines smarter and more efficient.',
    Icon: BiNetworkChart
  },
  {
    id: 2,
    label: 'Internet of things',
    content: 'Inovating and optimizing intelligence system for social service.',
    Icon: ChipIcon
  },
  {
    id: 3,
    label: 'AI Ethics',
    content: 'Ensuring AI is used responsibly and ethically in society.',
    Icon: LightBulbIcon
  }
];

const figures = [
  {
    id: 1,
    label: 'Publication',
    value: '50+',
    Icon: AcademicCapIcon
  },
  {
    id: 2,
    label: 'Global Partnerships',
    value: '10',
    Icon: GlobeIcon
  },
  {
    id: 3,
    label: 'Award Won',
    value: '5',
    Icon: CurrencyDollarIcon
  }
];

const HomePage = () => {
  return (
    <div className="h-full">
      <Hero
        header="Welcome to MIDIS Lab"
        description="Pioneering the future of Machine Intelligence and Data Science."
        prompt="Explore Our Research"
      />

      <About
        header="About MIDIS Lab"
        description="The Multisensory Interaction Design & Intelligent Systems Lab (MIDIS Lab) is a dynamic environment for people passionate about multisensory interaction design, intelligent systems, and human-computer interaction. In this lab, students work with experienced researchers to explore and research interdisciplinary domains"
        imageUrl="https://via.placeholder.com/600x400"
        points={points}
        contentSize={'xl'}
        iconSize={6}
      />

      <Overview
        header="Research Topics"
        description="Explore some of our groundbreaking research projects that are shaping the future of AI and Data Science."
        topics={topics}
      />

      <Feature />

      <Statistic
        header="Our Achivements"
        description="Discover the significant milestones and achievements of MIDIS Lab."
        figures={figures}
      />

      <Team
        header="Our Team"
        description="Meet the experts driving innovation at MIDIS Lab."
        members={DrMembers}
        className="my-20"
      />

      <Collab />

      
    </div>
  );
};

export default HomePage;
