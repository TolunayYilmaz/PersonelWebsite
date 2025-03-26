import { useState ,useContext} from 'react'
import Summary from './components/Summary'
import './App.css'
import HeadController from './components/HeadController'
import TopBar from './components/Topbar'
import Skills from './components/Skills'
import Profile from './components/Profile'
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'
import { ThemeContext } from './contexts/ThemeContext'
function App() {
  
 const{theme}=useContext(ThemeContext)
  return (
    
    <div className={`flex flex-col justify-between gap-12 ${theme==="dark"?"bg-[#252128]":"bg-white"}`}>
    <HeadController/>
    <TopBar/>
    <Summary></Summary>
    <Skills></Skills>
    <Profile/>
    <ProjectList/>
    <Footer></Footer>
    </div>
 
  
  )
}

export default App
