import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [

  {
    title:'Natural Language Understanding',
    text:"GPT's unparalleled ability to comprehend and generate human-like text ensures a more intuitive and interactive experience."
  },

  {
    title:'Context-Aware Responses',
    text:'With a deep understanding of context, GPT provides responses that are not just accurate but also contextually relevant.'
  },

  {
    title:'Multifunctional Capabilities',
    text:'From content creation to problem-solving, GPTs multifunctional capabilities redefine what is possible with artificial intelligence.'
  },

  {
    title:'Continuous Learning and Adaptation',
    text:"GPT doesn't just follow instructions; it evolves. Continuous learning and adaptation mean your AI stays ahead of the curve.From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },

]

const Features = () => {
  return (
    <div className='gpt__features section__padding' id='features'>
      <div className='gpt__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt__features-container'>
          {featuresData.map((item, index) => (
              <Feature 
                key={index}
                title={item.title}
                text={item.text}
              />
          ))}
      </div>
    </div>
  )
}

export default Features