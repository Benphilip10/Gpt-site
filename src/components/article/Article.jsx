import React from 'react';
import './article.css';

const Article = (props) => {
  return (
    <div className='gpt__blog-container_article'>
        <div className='gpt__blog-container_article-image'>
          <img src={props.img} alt='blog'/>
        </div>
            <div className='gpt__blog-container_article-content'>
              <div>
                <p>{props.date}</p>
                <h3>{props.title}</h3>
              </div>
                    <p>Read Full Article</p>
            </div>
    </div>
  )
}

export default Article