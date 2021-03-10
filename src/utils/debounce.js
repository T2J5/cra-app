import { useCallback, useRef, useEffect } from 'react';

function useDebounce (fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null });

  useEffect(() => {
    current.fn = fn;
  }, []);

  return useCallback(function f(...args) {
    if (current.timer) {
      clearTimeout(timer);
    }
    current.timer = setTimeout(()  => {
      current.fn.call(this, ...args);
    }, delay);
  }, dep);
}

export default useDebounce;

/**
 *   **** 防抖 ****
 *  防抖就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
 *  在前端开发中会遇到一些频繁的事件触发，比如：
    mousedown、mousemove
    keyup、keydown
 * 
 * 
 * 
 */