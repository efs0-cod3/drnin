import React from "react";

export default function Input({state, type, placeholder, lable, expresionRegular, changeState,name}) {

const onChange = (e) => {
      changeState(e.target.value.replace(expresionRegular, ''))
     }; //cambia el estado y evita el key de caracteres no aceptados
     
  


  return (
    <div className="input--container">
      <label className="label">{lable}</label>
      <input className="input" value={state} name={name} type={type} placeholder={placeholder} onChange={onChange} onKeyUp={onChange}/>
    </div>
  )
}
