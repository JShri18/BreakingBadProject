import React from 'react'
import "./landing.css";
import Start from '../StartBtn/Start';
import "../StartBtn/start.css";

const Landing = () => {
  return (
    <>
    <div className="banner">
        <div className="content">
            <Start/>
        </div>
    </div>
    </>
  )
}

export default Landing