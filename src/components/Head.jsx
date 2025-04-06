import React from 'react';
import './Head.css';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

  const handleMenuBar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='header-container'>
      <div className='col-2'>
        <img className='menu-icon' onClick={handleMenuBar} alt='menu' src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png'></img>
        <a href='/'>
          <img className='video-icon' src='https://w7.pngwing.com/pngs/314/584/png-transparent-computer-icons-video-display-resolution-others-angle-text-rectangle-thumbnail.png'></img>
        </a>
      </div>
      <div className='col-8'>
        <input placeholder='Search' className='search-bar'/>
        <button className='search-button'>Search</button>
      </div>
      <div className='col-2'>
        <img className='menu-icon' alt='menu' src='https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg'></img>
      </div>
    </div>
  )
}

export default Head