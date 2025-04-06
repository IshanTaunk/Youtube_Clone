import React from 'react'
import Button from './Button'
import './ButtonList.css'

const ButtonList = () => {
  const btnList = ['All','Games','Sports','Shopping'];
  return (
    <div className='button-list-container'>
      {btnList.map(btn=><Button name={btn}/>)}
    </div>
  )
}

export default ButtonList