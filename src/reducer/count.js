import at from '@constants';

const initialState = {
  num: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case at.INCREMENT: 
      return {...state, num:state.num + action.num}
    case at.DECREMENT:
      return {...state, num:state.num - action.num}
    default:
      return state;
  }
}