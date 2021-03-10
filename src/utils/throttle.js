import { useCallback, useRef, useEffect } from 'react';

function useThrottle (fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null });

  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  return useCallback(function f(...args) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer;
      }, delay);
      current.fn.call(this, ...args); 
    }
  }, dep);
}

export default useThrottle;

/**
 * 节流
 * 节流就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率
 * 在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。
 * 
 * 
 */