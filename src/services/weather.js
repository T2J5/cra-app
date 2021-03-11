import request from '@utils/request'
import at from '@constants'
import Cache from '@cache'
import qs from 'qs';

const cache = new Cache()

export const fetchWeather = (params) => {
  const payload = { ...params, key: at.JU_HE_KEY.weather }
  const data = cache.get(encodeURI(`http://localhost:3000/api/simpleWeather/query?${qs.stringify(payload)}`))
  console.log('data', data)
  if (data) {
    return data
  }
  return request({
    url: '/simpleWeather/query',
    method: 'get',
    params: payload
  })
}