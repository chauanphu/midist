import React from 'react';
import About from '../../../Components/About/About';
import Hero from '../../../Components/Hero/Hero';
import Overview from '../../../Components/Overview/Overview';
import Statistic from '../../../Components/Statistic/Statistic';
import { OfficeBuildingIcon, UserGroupIcon, ArrowsExpandIcon, ChipIcon, LightBulbIcon, ServerIcon, CogIcon,  GlobeIcon, CashIcon } from '@heroicons/react/outline';
import Footer from '../../../Components/Footer/Footer';
import Team from '../../../Components/Team/Team';

const topics = [
  {
      id: 1,
      headline: 'Early Disease Detection',
      description: 'Leveraging machine learning to identify early signs of cardiovascular diseases and stroke, especially in underserved areas.'
  },
  {
      id: 2,
      headline: 'Improve Healthcare Access',
      description: 'Bridge the healthcare gap between urban and rural populations, ensuring timely diagnosis and treatment.'
  },
  {
      id: 3,
      headline: 'Reducing Economic Burden',
      description: 'Minimizing the economic impact of cardiovascular diseases through AI-powered predictions, reducing treatment costs, and improving doctor\'s productivity.'
  }
]

const points = [
  {
    id: 1,
    label: 'Data Collection and Processing',
    content: 'Collect and process medical data related to myocardial infarction from the medical data of Thu Duc City Hospital, including biological indicators, medical history, lifestyle habits, and risk factors.',
    Icon: ServerIcon // Replace with an appropriate icon
  },
  {
    id: 2,
    label: 'Machine Learning Models',
    content: 'Apply and evaluate modern machine learning algorithms, such as deep neural networks, decision trees, and ensemble learning methods to develop a risk prediction model for myocardial infarction and stroke.',
    Icon: ChipIcon // Replace with an appropriate icon
  },
  {
    id: 3,
    label: 'Model Optimization',
    content: 'Optimize the prediction model to achieve high accuracy, and test and compare the performance of the model on different datasets.',
    Icon: LightBulbIcon // Replace with an appropriate icon
  },
  {
    id: 4,
    label: 'Decision Support System',
    content: 'Develop a decision support system based on the developed prediction model to provide early warnings and treatment recommendations to doctors and patients.',
    Icon: ArrowsExpandIcon // Replace with an appropriate icon
  },
  {
    id: 5,
    label: 'Field Testing',
    content: 'Conduct field testing to evaluate the feasibility and effectiveness of the system in a real-world environment, proposing improvements and adjustments to the forecasting model.',
    Icon: CogIcon // Replace with an appropriate icon
  },
];

const figures = [
  {
    id: 1,
    label: 'Users',
    value: '50K',
    Icon: UserGroupIcon
  },
  {
    id: 2,
    label: 'Medical Facillities',
    value: '22',
    Icon: OfficeBuildingIcon
  }, 
  {
    id: 3,
    label: 'Revenue',
    value: '10M',
    Icon: CashIcon
  }
]

const AI4Health = () => {
  return (
    <div>
      <Hero
        header='Healthcare with AI'
        description='Implementing Machine Learning to enhance stroke prediction'
        prompt='Discover our studies'
        background="https://jam-news.net/app/uploads/2019/09/69837907_381093645902454_4465578541051805696_n.jpg"
      />

      <Overview
        header="General Goals"
        description="The urgents for developing an automatic solution to heart disease diagnoses"
        topics={topics}
      />

      <About
        header='Required Tasks'
        description=''
        imageUrl="https://placehold.co/400x600"
        points={points}
        reverse={true}
        contentSize={'xl'}
        iconSize={12}
      />

      <Statistic
          header='Target numbers'
          description="Let's see what we can achieve with valuable pottentials this could bring."
          figures={figures}
      />


      <Team/>

      <Footer/>
    </div>
  )
}

export default AI4Health