import React, { useContext } from 'react'

const UserContext = React.createContext({ name: 'TJ', age: 28 })

const MiddleComponent = () => {
  return (
    <div>
      <ChildComponent></ChildComponent>
    </div>
  )
}

const ChildComponent = () => {
  const user = useContext(UserContext)
  return (
    <div>
      <div>姓名{user.name}</div>
      <div>年龄：{user.age}</div>
    </div>
  )
}

const App = () => {
  const user = { name: 'TJ2', age: 20 }
  return (
    <UserContext.Provider value={user}>
      <MiddleComponent>
        
      </MiddleComponent>
    </UserContext.Provider>
  )
}

export default App