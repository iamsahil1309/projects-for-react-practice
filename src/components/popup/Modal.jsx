import React from 'react'

function Modal({header, title}) {
  return (
    <div>
      <header>{header}</header>
      <h2>I'm a Modal!</h2>
      <p>{title}</p>
    </div>
  )
}

export default Modal
