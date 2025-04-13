import React from 'react'

const useDebounce = (cb,delay) => {
    let timer;
  return (...args)=>{
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>cb(...args),delay);
  }
}

export default useDebounce