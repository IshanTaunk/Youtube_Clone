import React from 'react'
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='sidebar-container'>
      <ul>
        <li> <Link to="/">Home</Link></li>  
        <li> Shorts</li>  
        <li> Subscriptions</li>
      </ul>  
      <h3>You</h3>
      <ul>
        <li> History</li>  
        <li> Playlist</li>  
        <li> Your videos</li>  
        <li> Liked Videos</li>
      </ul>  
      <h3>Subscriptions</h3>
      <ul>
        <li> Music</li>  
        <li> Sports</li>  
        <li> Gaming</li>  
        <li> Movies</li>
      </ul>      
    </div>
  )
}

export default SideBar