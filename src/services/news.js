import request from '@utils/request'
import at from '@constants'


export const fetchTouTiao = (params) => {
  return request({
    url: '/toutiao/index',
    method: 'get',
    params: { ...params, key: at.JU_HE_KEY.toutiao }
  })
}

export function defaultGed(data) {
  return request({
    url: "/default/geds",
    method: "post",
    data: data
  });
}