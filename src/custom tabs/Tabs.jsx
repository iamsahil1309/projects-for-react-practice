import React, { useState } from 'react'

function Tabs({tabContent}) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    const handleClick = (index) => {
        setCurrentTabIndex(index)
    }

  return (
   <>
  <div>
        {tabContent.map((item,index) => (
            <div key={item.label} onClick={() => handleClick(index)}>
                <span>{item.label}</span>
            </div>
        ))}
    </div>

    <div>
        { tabContent[currentTabIndex] && tabContent[currentTabIndex].content }
    </div>

   </>
  )
}

export default Tabs

