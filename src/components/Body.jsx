import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import './Body.css';

const Body = () => {
  return (
    <div className='body-container'>
      <SideBar />
      <MainContainer />
    </div>
  )
}

export default Body