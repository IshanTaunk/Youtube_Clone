import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';


const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(()=>{
    dispatch(closeMenu());
  },[]);
  return (
    <div><iframe width="958" height="495" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="Tron: Ares | Official Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
  )
}

export default WatchPage