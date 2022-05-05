import React from 'react'
import "../StartBtn/start.css";
import {
  Link, useNavigate
} from "react-router-dom";
const Start = () => {

  const navigate = useNavigate();
  const mainPage = ()=>{
    navigate('/search');
  }
  return (
    <div>
        <button className='startBtn' onClick={()=>mainPage()}> Go </button>
    </div>
  )
}

export default Start 