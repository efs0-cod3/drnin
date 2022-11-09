import React from "react";

export default function Input(props) {
  return (
    <div className="input--container">
      <label className="label">{props.lable}</label>
      <input className="input" type={props.type} placeholder={props.placeholder}/>
    </div>
  )
}
