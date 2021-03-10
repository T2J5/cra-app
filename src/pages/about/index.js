import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.less'

const About = () => {
  return <div className='container'>
    <button className='btn'>详情页</button>
    <button className='btn btn1' onClick={() => alert('TJ')}>
      TJ
    </button>
    <button className='btn btn2'>
      <Link to='/'>Home</Link>
    </button>
    <button className='btn btn3'>
      <Link to='/user'>User</Link>
    </button>
  </div>
}

export default About