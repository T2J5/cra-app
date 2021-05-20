// src/app.tsx
import React from 'react'
import style from './App.less';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'  
import { PersistGate } from 'redux-persist/lib/integration/react';
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import store from './app/index.js'
import routes from './router';

const App = () => {
  return (
    <Provider store={store}>   {/* redux */}
      <PersistGate loading={null} persistor={persistStore(store)}>   {/* 数据持久化 */}
        <BrowserRouter>   {/* 路由 */}
          {renderRoutes(routes)}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App

