import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/home'
import About from '@pages/about'
import User from '@pages/user'

const Router = () => {

  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <User />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Router