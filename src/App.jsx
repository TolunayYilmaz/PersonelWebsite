import { useState } from 'react'
import Summary from './components/summary'
import './App.css'
import HeadController from './components/headController'
import TopBar from './components/topbar'
import Skills from './components/skills'
import Profile from './components/profile'

function App() {
  

  return (
    
    <div className="flex flex-col justify-between gap-12">
    <HeadController/>
    <TopBar/>
    <Summary></Summary>
    <Skills></Skills>
    <Profile/>
    </div>
 
  
  )
}

export default App
