import './App.css'
import { useState } from 'react'
import LandingView from './components/LandingView'
import LoadingView from './components/LoadingView'
import ResultView from './components/ResultView'
import Header from './components/Header'
import params from "./utils/params.json"

function App() {
  const [currentView, updateView] = useState(0)
  const [responseData, setResponseData] = useState(undefined)

  // async function testBackend(){
  //   console.log("testing connection with backend...")
  // }

  function handleClickHome(){
    updateView(0)  // change to landing view
  }

  async function handleSubmitImage(formData){
    updateView(1)  // change to loading view
    console.log("Uploading Image...")
    const response = await fetch(`${params.backend_base_url}/extract`, {
      method: "POST",
      body: formData
    })

    if(response.ok){
      const data = await response.json()
      setResponseData(data)
      updateView(2)  // change to result view
    }
    else{
      console.log("Error received from backend.")
      updateView(0)  // change back to landing view
    }
  }

  return (
    <div>
      <Header onClickHome={handleClickHome}/>
      {currentView == 0 && <LandingView onSubmitImage = {handleSubmitImage}/>}
      {currentView == 1 && <LoadingView />}
      {currentView == 2 && <ResultView result={responseData}/>}
    </div>
  )
}

export default App
