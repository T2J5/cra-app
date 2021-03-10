import at from '@constants';

export const increAction = (action) => {
  return { type: action.type, num: action.num };
}

export const decreAction = (action) => {
  return { type: action.type, num: action.num };
}

//异步操作时在action里操作，返回一个回调函数，同时传递dispatch，
//异步操作也是调用同步操作方法，直接在action里调用，不经过组件自身
export const increAsyncAction = (action) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increAction(val))
    }, time);
  }
}
