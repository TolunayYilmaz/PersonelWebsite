import { useState ,useContext} from 'react'
import './App.css'
import { ThemeContext } from './contexts/ThemeContext'
import HeadController from './components/HeadController'
import TopBar from './components/Topbar'
import Summary from './components/Summary'
import Skills from './components/Skills'

function App() {
  
 const{theme}=useContext(ThemeContext)
  return (
    
    <div className={`flex flex-col justify-between gap-12 ${theme==="dark"?"bg-[#252128]":"bg-white"}`}>
      <HeadController/>
      <TopBar/>
      <Summary/>
      <Skills/>

    </div>
 
  
  )
}

export default App
