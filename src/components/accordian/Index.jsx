import React, { useState } from 'react'
import { data } from './data'

export default function Index() {

    const [selected, setSelected] = useState()
    const [multiple, setMultiple] = useState([])
    const [enableMultiple, setEnableMultiple] = useState(false)

    const handleSingleClick = (getCurrentId) => {
        console.log(getCurrentId)
        setSelected(selected === getCurrentId ? null : getCurrentId)
    }

    const handleMultipleClick = (getCurrentId) => {
        let cpyMultiple = [...multiple]
        const indexOf = cpyMultiple.indexOf(getCurrentId)
        
        if(indexOf === -1) {
            cpyMultiple.push(getCurrentId)
        } else {
            cpyMultiple.splice(indexOf, 1)
        }
        console.log(indexOf)
        setMultiple(cpyMultiple)
    }

  return (
    <div>
            <button onClick={() => setEnableMultiple(!enableMultiple)}>Enable Multiple</button>
      {
        data && data.map((item) => (
           <div>
             <div onClick={ enableMultiple ? () => handleMultipleClick(item.id) : () => handleSingleClick(item.id)}>
                <li>{item.question}
                 <span>+</span>
                          
                 </li>
            </div>

            {
                enableMultiple ?
                 multiple.indexOf(item.id )!== -1 &&  <span>{item.answer}</span>:
                 selected === item.id &&
                <div>
                    <span>{item.answer}</span>
                </div>
            }
           </div>
            
            
        ))
      
      }
    </div>
  )
}
