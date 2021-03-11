import at from '@constants'
import { fetchTouTiao } from '@services/news'

export const fetchTouTiaoAction = (params) => {
  return async (dispatch) => {
    const res = await fetchTouTiao(params)
    if (res.error_code === 0) {
      dispatch({
        type: at.FETCH_NEWS_DATA,
        payload: res.result
      })
    }
  }
}