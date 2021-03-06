import React, { useState } from 'react'
import { Button } from 'antd'

const Counter = () => {
  const initivalCount = 0
  const [count, setCount] = useState(initivalCount)

  return (
    <div>
      <div className='white'>{count}</div>
      <Button type='primary' onClick={() => setCount(count+1)}>
        +1
      </Button>
      <Button type='primary' onClick={() => setCount(count-1)}>-1</Button>
      <Button type='primary' onClick={() => setCount(initivalCount)}>reset</Button>
    </div>
  )
}

export default Counter