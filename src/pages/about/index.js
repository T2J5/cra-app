import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTouTiaoAction } from '@actions/news'
import './index.less'

const About = (props = {}) => {

  const [type, setType] = useState('')
  const news = useSelector(state => state.news)
  const dispatch = useDispatch()

  const fetchData = () => {
    dispatch(fetchTouTiaoAction({ type }))
  }

  useEffect(() => {
    fetchData();
  }, [dispatch, type]);

  const changeType = (val) => {
    setType(val)
  }

  return <div className='container'>
    <button className='btn' onClick={() => changeType('keji')}>
      科技
    </button>
    <button className='btn btn1' onClick={() => changeType('top')}>
      头条
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