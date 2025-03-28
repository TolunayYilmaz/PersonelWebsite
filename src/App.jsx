import { useState, useContext, useEffect } from "react";
import "./App.css";
import { ThemeContext } from "./contexts/ThemeContext";
import HeadController from "./components/HeadController";
import TopBar from "./components/Topbar";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import {LanguageContext} from "./contexts/LanguageContext"
import { useProfile } from "./services/queries";






function App() {
  const { theme } = useContext(ThemeContext);
  const { getData } = useContext(LanguageContext);
  const { data } =useProfile(getData());


   



  return (
    <div
      className={`flex overflow-x-hidden flex-col justify-between gap-6 md:gap-12 ${
        theme === "dark" ? "bg-[#252128]" : "bg-white"
      }`}
    >
      <HeadController />
      <TopBar />
      <Summary />
      <Skills />
      <Profile />
      <ProjectList />
      <Footer />
      <div>{data?.title}</div>
    </div>
  );
}

export default App;
