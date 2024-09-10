// import QRGenerator from "./components/qr generator/QRGenerator"


import { useEffect, useState } from "react"
import Feature from "./components/feature flag/Feature"
import { FlagsProvider } from "./components/feature flag/context/flags"
import GithubFinder from "./components/github profile finder/GithubFinder"
import Popup from "./components/popup/Popup"
import Tabs from "./custom tabs/Tabs"
import TestTabs from "./custom tabs/TestTabs"
import flagsServiceCall from "./components/feature flag/data"





function App() {
 
  const [loading, setloading] = useState(false)
  const[enabledFlags, setEnabledFlags] = useState({})
  
  async function fetachFeatureFlag(){
    try {
      setloading(true)
      const response = await flagsServiceCall()
  
      setEnabledFlags(response)
      setloading(false)
  
    } catch (error) {
      console.log(error)
    }
  }
  
useEffect(() => {
  
  fetachFeatureFlag()
},[])

if(loading) return <h1>loading...</h1>

  return (
    <>
       {/* <QRGenerator/> */}
       {/* <TestTabs/> */}
       {/* <Popup/> */}
      {/* <GithubFinder/> */}
      <FlagsProvider value={{loading, enabledFlags, fetachFeatureFlag}}>
      <Feature/>
      </FlagsProvider>
    </>
  )
}

export default App
