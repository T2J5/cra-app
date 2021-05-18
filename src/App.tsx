// src/app.tsx
import React from 'react'
import style from './App.less'
import Test from 'components/Test'

const App:React.FC<any> = () => {
  return (
    <div className={style.App}>
      <Test name='jack' age={24}/>
    </div>
  )
}

export default App

