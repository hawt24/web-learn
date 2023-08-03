import React from "react";
import Info from "./Info";
import Profile from "./Profile";
import "./style.css";

function Card(props) {
  return (
    <div className="Card"> 
        <Profile/>
        <Info  name={props.name} bio={props.bio}/>
        {props.linkeln && <p>{props.linkeln}</p>}
      
    </div>
  )
}

export default Card

