import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

const Title = () => {
  const [a, setA] = useState(0)

  useEffect(() => {
    document.title = `${a} - ${Math.floor(Math.random()*100)}`
  })
  const clickAbtHandler = (eve) =>{
    setA(a+1);
  }
  return <div>
      {a}
      <Button type='primary' onClick={clickAbtHandler}>a+1</Button>
    </div>
}

export default Title