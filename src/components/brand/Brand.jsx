import React from 'react';
import './brand.css';
import companies from '../../assets/companies.png';

const Brand = () => {
  return (
    <div className='gpt__brand section__padding'>
    <img src={companies} alt='Company logos'/>
    </div>
  )
}

export default Brand;