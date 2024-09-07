import React, { useEffect, useState } from 'react'

export default function RandomColor() {

    const [color, setColor] = useState("#000000")
    const [colorType, setColorType] = useState('hex')

    // const random = (length) => {
    //     return Math.floor(Math.random())
    // }

    const handleHexValue = () => {
        let hex = [0,1,2,3,4,5,6,"A","B","C","D","E","F","a","b","c","d","e","f"]
        let hexColor = '#'

        for(let i =0; i<6; i++){
            hexColor += hex[Math.floor(Math.random()*hex.length)]
        }

        setColor(hexColor)
        console.log(hexColor)
    }

    const handleRgbValue = ()=> {
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)

        setColor( `rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        colorType === 'hex' ? handleHexValue() : handleRgbValue()
    },[colorType])

  return (
    <div style={{
        height : '100vh',
        width : '100vw',
        backgroundColor : color,
    }}>
      <div style={{
        display : 'flex',
        alignItems : 'center',
        justifyContent: ' center',
        gap : '20px'
      }}>
      <button onClick={() => setColorType('hex')}>hex value</button>
      <button onClick={() => setColorType('rgb')}>rgb value</button>
      <button onClick={colorType === 'hex' ? handleHexValue : handleRgbValue}>Random value</button>
      </div>

      <div style={{
          display : 'flex',
          alignItems : 'center',
          justifyContent: ' center',
          gap : '20px',
          flexDirection : 'column'          
      }}>
        <h1>{colorType === 'rgb' ? "rgb color" : "hex color"}</h1>
        <span>{color}</span>
      </div>
    </div>
  )
}
