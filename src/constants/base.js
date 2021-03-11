// 本地ip
export const LOCAL_IP = '0.0.0.0';

// api
export const BASIC_API = 'http://v.juhe.cn/';
// export const BASIC_API = 'http://192.168.57:9901';

// api key
export const JU_HE_KEY = {
  'toutiao': '4baa1e9bd82d8159838ea892dfdad3b6',
}

// env
export const ENV = process.env === 'development' ? 'development' : 'production';

// access_token key
export const ACCESS_TOKEN_STORAGE_KEY = '__access_token';

export function getToken() {
  return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
}

