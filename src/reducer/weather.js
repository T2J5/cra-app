import at from '@constants';

const initialState = {
  data: {}
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case at.FETCH_WEATHER_DATA: 
      return {...state, data: action.payload }
    default:
      return state;
  }
}

export default weather