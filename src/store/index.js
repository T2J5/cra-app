// 1.引入createStore
//applyMiddleware在异步操作时使用
import { createStore, applyMiddleware } from 'redux';

//支持异步操作action
import thunk from 'redux-thunk';

//2.引入汇总后的ruducer
import reducer from '../reducer';

//3.创建store并暴露
//applyMiddleware(thunk)异步操作时使用，没有异步省略
export default createStore(reducer, applyMiddleware(thunk));