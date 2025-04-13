import React from 'react';
import './CommentSection.css';
import Comment from '../comment/Comment';

const CommentSection = () => {

const commentsData= [
    {
    name: 'ishan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    children: [{
        name: 'ishan',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        children: [{
          name: 'ishan',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          children: []
      }]
    },{
      name: 'ishan',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      children: []
    }],
    },{
        name: 'ishan',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        children: []
    }]

  return (
    <div className='comment-section-container'>
      <h2>Comments</h2>
        {commentsData.map(comment=>{return <Comment commentInfo={comment}/>})}
    </div>
  )
}

export default CommentSection