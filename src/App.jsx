import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./contexts/ThemeContext";
import HeadController from "./components/HeadController";
import TopBar from "./components/Topbar";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import { Element } from "react-scroll";


function App() {
  const { theme } = useContext(ThemeContext);


  return (
    <div
      className={`flex overflow-x-hidden flex-col justify-between gap-6 md:gap-12 ${
        theme === "dark" ? "bg-[#252128]" : "bg-white"
      }`}
    >
      <HeadController/>
      
      <TopBar />
      <Summary />

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="profile">
        <Profile />
      </Element>
      <Element name="projects">
        <ProjectList />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
