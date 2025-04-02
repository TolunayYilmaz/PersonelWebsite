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
import { LanguageContext } from "./contexts/LanguageContext";
import { useProfile } from "./services/queries";
import ReactLoading from "react-loading";

function App() {
  const { theme } = useContext(ThemeContext);
  const { getData } = useContext(LanguageContext);
  const { isPending } = useProfile(getData());

  return (
    <div
      className={`flex overflow-x-hidden flex-col justify-between gap-6 md:gap-12 ${
        theme === "dark" ? "bg-[#252128]" : "bg-white"
      }`}
    >
      {isPending ? (
        <>
          <div className="flex justify-center items-center min-h-screen">
            <ReactLoading
              type="spin"
              color="#4A90E2"
              height="20%"
              width="20%"
            />
          </div>
        </>
      ) : (
        <>
          <HeadController />
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
        </>
      )}
    </div>
  );
}

export default App;
