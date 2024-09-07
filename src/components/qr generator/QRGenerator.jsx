import React, { useState } from 'react'
import {QRCode} from 'react-qr-code'
function QRGenerator() {

    const [input, setInput] = useState('')
    const [qrGenerator, setQrGenerator] = useState('')

    const handleGenerate = () => {
        setQrGenerator(input)
        setInput('')
    }

  return (
    <div style={{
        height : '100vh',
        width : '100vw',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        gap : '15px'
    }}>
      <input style={{ padding : '10px', borderRadius : '8px', border : 'none',}} type="text" placeholder='enter text here' value={input} onChange={(e) => setInput(e.target.value)} />
      <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerate}>Generate</button>
      <div>
        <QRCode id="qr-code" value={qrGenerator} size={200}/>
      </div>
    </div>
  )
}

export default QRGenerator
