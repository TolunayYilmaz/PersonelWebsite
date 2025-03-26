import { useState ,useContext} from 'react'

import './App.css'


import ProjectList from './components/ProjectList'
import Footer from './components/Footer'
import { ThemeContext } from './contexts/ThemeContext'
function App() {
  
 const{theme}=useContext(ThemeContext)
  return (
    
    <div className={`flex flex-col justify-between gap-12 ${theme==="dark"?"bg-[#252128]":"bg-white"}`}>


    </div>
 
  
  )
}

export default App
