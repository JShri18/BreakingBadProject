import React from "react";
import "../Gallery/gallery.css";
const Gallery = ({ items }) => {
  return (
    <>
      <div className="card-container">
        {items.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="main">
              <div className="name">
                <h2>{item.name}</h2>
              </div>
              <div className="nick">
                <h3>{item.nickname}</h3>
              </div>
              <div className="img">
                <img src={item.img} alt="" className="img" />
              </div>
              </div>
              <div className="addDetails">
                <div className="portray">{item.portrayed}</div>
                <div className="status">{item.status}</div>
                <div className="occupation">{item.occupation[0]}</div>
               </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
