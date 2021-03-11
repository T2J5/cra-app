import at from '@constants'
import { fetchWeather } from '@services/weather'

export const fetchWeatherAction = (params) => {
  return async (dispatch) => {
    const res = await fetchWeather(params)
    if (res.error_code === 0) {
      dispatch({
        type: at.FETCH_WEATHER_DATA,
        payload: res.result
      })
    }
  }
}