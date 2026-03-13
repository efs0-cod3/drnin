import React from 'react'

export default function QuickLinks() {

let year = new Date().getFullYear();

  return (
    <div className='quickLinks'>
        <h3>Acceso rapido</h3>
        <ul>
            <li><a href='#nosotros'>Nosotros</a></li>
            <li><a href='#features'>Caracteristicas</a></li>
            <li><a href='#cita'>Haz tu cita</a></li>
            <li><a href='#servicios'>Servicios</a></li>
        </ul>
    <p className='year'>© <span id="year">{year}</span> Nin Dental Lab. Todos los derechos reservados.</p>
    </div>
  )
}


