import logo from './logo.svg';

// router
import { BrowserRouter } from 'react-router-dom'

// redux
import { Provider } from 'react-redux'

import Router from '@router'
import store from './store'

import './App.less';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
    
    
  );
}

export default App;
