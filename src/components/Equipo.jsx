import React from 'react'

export default function Equipo(props) {
  return (
    <div className='team_card'>
        <section className='img_section'>
            <img className='team_card--img' src={props.img}/>
        </section>
        <section className='card_info'>
            <h2>{props.name}</h2>
        </section>
    </div>
  )
}
