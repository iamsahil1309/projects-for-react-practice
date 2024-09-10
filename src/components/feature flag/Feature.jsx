import React from 'react'
import useFlags from './context/flags'
import Popup from '../popup/Popup'
import GithubFinder from '../github profile finder/GithubFinder'
import QRGenerator from '../qr generator/QRGenerator'

function Feature() {

    const{ enabledFlags } = useFlags()

    const componentsToRender = [
        {
            key : 'showPopUp',
            component : <Popup/>,
        },
        {
            key : 'showGithub',
            component : <GithubFinder/>,
        },
        {
            key : 'showQrGenerator',
            component : <QRGenerator/>,
        },
    ]

    function checkEnabled(key) {
      return enabledFlags[key]
    }

  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map((item) => checkEnabled(item.key) ? item.component : null )
      }
    </div>
  )
}

export default Feature
