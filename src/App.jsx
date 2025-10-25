import { useState } from 'react'
import GeneralInfo from './components/contact'
import Education from './components/edu'
import Experience from './components/exp'
import './App.css'

function App() {

  return (
    <>
      <GeneralInfo/>
      <Education/>
      <Experience/>
    </>
  )
}

export default App
