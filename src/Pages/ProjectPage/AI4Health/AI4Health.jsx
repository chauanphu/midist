import React from 'react';
import About from '../../../Components/About/About';
import Hero from '../../../Components/Hero/Hero';
import Overview from '../../../Components/Overview/Overview';
import Statistic from '../../../Components/Statistic/Statistic';
import Team from '../../../Components/Team/Team';
import { DrMembers, figures, points, StudentMembers, topics } from '../../../Data/Data';

const AI4Health = () => {

  console.log(DrMembers, ' ', StudentMembers);

  return (
    <div>
      <Hero
        header="Healthcare with AI"
        description="Implementing Machine Learning to enhance stroke prediction"
        prompt="Discover our studies"
        background="https://jam-news.net/app/uploads/2019/09/69837907_381093645902454_4465578541051805696_n.jpg"
      />

      <Overview
        header="General Goals"
        description="The urgents for developing an automatic solution to heart disease diagnoses"
        topics={topics}
      />

      <About
        header="Required Tasks"
        description=""
        imageUrl="https://placehold.co/400x600"
        points={points}
        reverse={true}
        contentSize={'xl'}
        iconSize={12}
      />

      {/* <Statistic
        header="Achieved values"
        description="Let's see what we have achieve so far."
        figures={figures}
      /> */}
      
      <div className="py-20 space-y-6">
        <Team
          header="Who is joining with us?"
          description="Experts coming from prestigious agencies"
          members={DrMembers}
        />

        <Team
          header="And also"
          description="Young, talented students from MIDIS Lab"
          members={StudentMembers}
        />
      </div>
    </div>
  );
};

export default AI4Health;
