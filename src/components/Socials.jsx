import React from 'react'

export default function Socials(props) {
  return (
    <a href={props.link} target="_blank" className='socials-icon'>
        {props.socialIcon}
    </a>
  )
}
