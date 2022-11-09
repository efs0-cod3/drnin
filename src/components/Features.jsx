import React from 'react'

export default function features(props) {
  return (
    <div className='features'>
            <p className='features--icon'>{props.icon}</p>
            <h2 className='features--titulo'>{props.titulo}</h2>
            <p className='features--texto'>{props.texto}</p>
    </div>
  )
}
