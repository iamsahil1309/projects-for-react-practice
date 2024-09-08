import React from 'react'
import Tabs from './Tabs'

function TestTabs() {

    const tabs = [
        {
            label : 'Tab 1',
            content : 'Tab 1 content',
        },
        {
            label : 'Tab 2',
            content : 'Tab 2 content',
        },
        {
            label : 'Tab 3',
            content : 'Tab 3 content',
        },
    ]

  return (
        <Tabs tabContent = {tabs} />
  )
}

export default TestTabs
