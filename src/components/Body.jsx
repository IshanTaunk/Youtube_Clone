import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import './Body.css';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='body-container'>
      <SideBar />
      <Outlet/>
    </div>
  )
}

export default Body