import React from 'react'
import "./topbar.css";
import {
  useNavigate as navigate
} from "react-router-dom"; 

const Topbar = () => {
  return (
    <>
        <div className="topbar">
          <div className="logo">
            <div className="br">Br</div>
            <div className="ba">Ba</div>
          </div>
          <div className="Wname"> <span className='Br'>Br</span>eaking <span className='Ba'>Ba</span>d <span className="Ga">Ga</span>llery</div>
        </div>
    </>
  )
}

export default Topbar