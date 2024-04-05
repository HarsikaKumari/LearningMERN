import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.id}</h2>
        <h2 className="name">{props.name}</h2>
       <Avatar 
       img = {props.img}
       />
      </div>
      <div className="bottom">
        <Details email={props.email}  tel={props.tel}/>
      </div>
    </div>
  );
}

export default Card;
