export default class Cache {

  // 存值
  set = (key, val) => {
    console.log('set  key', key)
    localStorage.setItem(key, JSON.stringify(val))
  }

  // 取值
  get = (key) => {
    console.log('get key', key)
    return JSON.parse(localStorage.getItem(key))
  }

  // 删除
  clear = (key) => {
    localStorage.removeItem(key)
  }
} 

