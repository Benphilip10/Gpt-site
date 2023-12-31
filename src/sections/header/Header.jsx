import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className='gpt__header-content'>
          <h1 className='gradient__text'>
          Let’s Build Something amazing with GPT-4.5 OpenAI
          </h1>
          <p>
          From interactive storytelling to personalized content recommendations, the potential is limitless. Explore the API, join the community, and let's build something extraordinary together!
          </p>

          <div className='gpt__header-content__input'>
            <input type='email' placeholder='Your Email Address'></input>
            <button type='button'>Get Started</button>
          </div>

          <div className='gpt__header-content__people'>
            <img src={people} alt='people'/>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
      </div>

      <div className='gpt__header-image'>
              <img src={ai} alt='ai'/>
          </div>
    </div>
  )
}

export default Header