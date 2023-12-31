import React from 'react';
import './App.css';
import './index.css';

import {Blog, Features, Footer, Header, Possibility, WhatGPT,} from './sections';
import {Navbar, Brand, CTA} from './components';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div> 
        <Brand/>
        <WhatGPT/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App;
