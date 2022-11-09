import React from 'react'

export default function Services(props) {
  return (
    <div className='service--container'>
        <img className={props.className} src={props.icono} />
       <div>
       <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
       </div>

    </div>
  )
}
