import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Button } from 'antd'

const Home = (props = {}) => {
  const { route } = props

  return <div className='home'>
    主页
    <Button type='primary'><Link to='/about'>详情</Link></Button>
    <Link to='/user'>用户</Link>
    {renderRoutes(route.routes)}
  </div>
}

export default Home