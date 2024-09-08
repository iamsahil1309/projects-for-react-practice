import React, { useState } from 'react'
import Modal from './Modal'

function Popup() {

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(!showModal)
    }



  return (
    <div>
      <button onClick={handleClick}>Click me</button>

      {
        showModal && <Modal header ={ <h1> hello Modal </h1> } title = {<h2>I'm the Title !</h2>}/>
      }
    </div>
  )
}

export default Popup
