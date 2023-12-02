import React from 'react';
import './whatGPT.css';
import { Feature } from '../../components';

const WhatGPT = () => {
  return (
    <div className='gpt__whatgpt section__margin' id="wgpt3">
  
      <div className='gpt__whatgpt-feature'>
          <Feature
            title ="What is GPT3"
            text= "GPT, short for Generative Pre-trained Transformer, represents the pinnacle of AI language models. Developed by OpenAI, it stands as a testament to the relentless pursuit of pushing the boundaries of what artificial intelligence can achieve."
          />
      </div>

      <div className='gpt__whatgpt-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p><a href='#blog'>Explore The Library</a></p>
      </div>

      <div className='gpt__whatgpt-container'>
        <Feature
          title="Content Creation"
          text="Elevate your content game with GPT's ability to generate high-quality articles, creative writing, and more. "
        />
        <Feature
          title="Customer Support"
          text="Revolutionize customer service with intelligent chatbots that understand and respond like never before."
        />
        <Feature
        title="Healthcare"
          text="Harness the potential of GPT for medical data analysis, diagnosis assistance, and streamlined documentation."
        />
      </div>
    </div>
  )
}

export default WhatGPT