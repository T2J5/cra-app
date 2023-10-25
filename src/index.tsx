import React from 'react'
import ReactDOM from 'react-dom'
import store from './app/index'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import Payment from './features/payment'

import './index.less'

const render = () => {
  const App = require('./app/App').default

  ReactDOM.render(
    <Provider store={store}>
      <Payment />
    </Provider>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}


