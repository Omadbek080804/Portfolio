import React from 'react'
import Num from '../num/Num'
import Currency from '../currency/Currency'
import './Mini.css'
import Weather from '../weather/Weather'

function MiniProjects() {
  return (
    <div className='mini'>
      <Num />
      <Weather />
      <Currency />
    </div>
  )
}

export default MiniProjects
