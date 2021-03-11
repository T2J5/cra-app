// 1.引入createStore
//applyMiddleware在异步操作时使用
import { createStore, applyMiddleware, compose } from 'redux';

//支持异步操作action
import thunk from 'redux-thunk';

//2.引入汇总后的ruducer
import reducer from '../reducer';

const middlewares = [thunk];

// 打印日志
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

//3.创建store并暴露
//applyMiddleware(thunk)异步操作时使用，没有异步省略
const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

export default store;