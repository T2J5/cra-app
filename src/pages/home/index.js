import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const Home = () => {
  return <div>
    主页
    <Button type='primary'><Link to='/about'>详情</Link></Button>
    <Link to='/user'>用户</Link>
  </div>
}

export default Home