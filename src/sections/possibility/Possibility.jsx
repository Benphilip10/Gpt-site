import React from 'react';
import './possibility.css';
import feature from '../../assets/feature.png';

const Possibility = () => {
  return (
    <div className='gpt__possibility section__padding' id='possibility'>
      <div className='gpt__possibility-image'>
        <img src={feature} alt='feature_image'/>
      </div>
      <div className='gpt__possibility-content'>
          <h4>Request Early Access to Get Started</h4>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p> Dive into the GPT experience with confidence. Start with our free trial, allowing you to witness firsthand the transformative power of GPT before committing to a subscription.</p>
          <h4>Request Early Access to Get Started</h4>
      </div>
    
    </div>
  )
}

export default Possibility