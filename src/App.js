// import logo from './logo.svg';
// router
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import Router from '@router'

// redux
import { Provider } from 'react-redux'
import store from './store'

// style
import './App.less';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(Router)}
      </BrowserRouter>
    </Provider>
    
    
  );
}

export default App;
