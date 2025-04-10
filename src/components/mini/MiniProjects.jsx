import React from 'react'
import Num from '../num/Num'
import Currency from '../currency/Currency'
import './Mini.css'
import Weather from '../weather/Weather'

function MiniProjects() {
  return (
    <>
<h1 className='mini-projects-text'>MINI PROJECTS</h1>
    <div className='mini'>
      <Num />
      <Currency />
      <Weather />
    </div>
    </>
  )
}

export default MiniProjects
