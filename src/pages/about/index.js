import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTouTiaoAction } from '@actions/news'
import get from 'lodash/get'
import { List, Avatar } from 'antd'

import './index.less'

const About = () => {

  const [type, setType] = useState('')

  const news = useSelector(state => state.news)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchTouTiaoAction({ type }))
    }
    fetchData();
  }, [dispatch, type]);

  const changeType = (val) => {
    setType(val)
  }

  // const renderArticle = (article) => {
  //   return (
  //     <div key={article.uniquekey} className='flex-ct-x article'>
  //       <img className='article-img' src={article.thumbnail_pic_s} />
  //       <div className='ellipsis title'>{article.title}</div>
  //       <div>{article.author_name}</div>
  //       <div>{article.date}</div>
  //     </div>
  //   )
  // }

  console.log('news', news.data.data)
  const data = get(news, 'data.data') || []
  return <div className='container'>
    <div className='header'>
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
    
    <div className='article-container'>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.uniquekey}>
            <List.Item.Meta
              avatar={<Avatar src={item.thumbnail_pic_s} />}
              title={<a href={item.url}>{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  </div>
}

export default About