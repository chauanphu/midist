import React from 'react';
import About from '../../Components/About/About';
import Collab from '../../Components/Collab/Collab';
import Feature from '../../Components/Feature/Feature';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import Overview from '../../Components/Overview/Overview';
import Statistic from '../../Components/Statistic/Statistic';
import Team from '../../Components/Team/Team';
import { AcademicCapIcon, ChipIcon, LightBulbIcon, GlobeIcon, CurrencyDollarIcon } from '@heroicons/react/outline'; 
import { DrMembers } from '../../Data/Data';

const topics = [
  {
      id: 1,
      headline: 'Autonomous Systems',
      description: 'Developing AI-driven technologies for self-driving vehicles and autonomous robotics.'
  },
  {
      id: 2,
      headline: 'AI in Healthcare',
      description: 'Leveraging machine learning to improve diagnostics and patient outcomes.'
  },
  {
      id: 3,
      headline: 'Natural Language Processing',
      description: `Enhancing AI's understanding of human language for better communication and automation.`
  }
]

const points = [
  {
    id: 1,
    label: 'Machine Learning',
    content: 'Developing innovative models that make machines smarter and more efficient.',
    Icon: AcademicCapIcon
  },
  {
    id: 2,
    label: 'Robotics',
    content: 'Advancing robotics with cutting-edge AI for autonomous systems.',
    Icon: ChipIcon
  },
  {
    id: 3,
    label: 'AI Ethics',
    content: 'Ensuring AI is used responsibly and ethically in society.',
    Icon: LightBulbIcon
  },
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
]

const HomePage = () => {
  return (
    <div className='h-full'>
        <Hero 
          header='Welcome to MIDIS Lab'
          description='Pioneering the future of Machine Intelligence and Data Science.'
          prompt='Explore Our Research'
        />

        <About 
          header='About MIDIS Lab'
          description='MIDIS Lab is at the forefront of AI and Data Science, focused on pushing the boundaries of machine intelligence. Our research spans multiple domains, from advanced machine learning models to AI ethics and robotics.'
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

        <Feature/>

        <Statistic
          header='Our Achivements'
          description='Discover the significant milestones and achievements of MIDIS Lab.'
          figures={figures}
        />

        <Team
          header='Our Team'
          description='Meet the experts driving innovation at MIDIS Lab.'
          members={DrMembers}
          className='my-20'
        />

        <Collab/>

    </div>
  )
}

export default HomePage;