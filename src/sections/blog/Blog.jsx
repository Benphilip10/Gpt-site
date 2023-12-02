import React from 'react'
import './blog.css';
import { Article } from '../../components';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png';
import blog5 from '../../assets/blog5.png';


const Blog = () => {

  return (
    <div className='gpt__blog section__padding' id="blog">

      <div className='gpt__blog-heading'>
        <h1 className='gradient__text'>
        A lot is happening, We are blogging about it.
        </h1>
      </div>

      <div className='gpt__blog-container'>

        <div className='gpt__blog-container_groupA'>
          <Article
            img = {blog1}
            date ="Nov 10, 2023"
            title = "GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
            <div className='gpt__blog-container_groupB'>
            <Article
            img = {blog2}
            date ="Nov 10, 2023"
            title = "GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            img = {blog3}
            date ="Nov 10, 2023"
            title = "GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            img = {blog4}
            date ="Nov 10, 2023"
            title = "GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            img = {blog5}
            date ="Nov 10, 2023"
            title = "GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
            </div>

      </div>
    
    </div>
  )
}

export default Blog