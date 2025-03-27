import photo from "../images/photo.jpg";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import Button from "./Button.jsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

export default function Summary() {

  const {theme} =useContext(ThemeContext);
  return (
    <>
     <div className="w-full md:w-7/12 h-auto mx-auto flex flex-col md:flex-row items-center md:justify-between px-4">

  <div className="flex flex-col justify-between w-full gap-3 md:w-[596px] p-4 md:p-6 rounded-lg">

    <div className="flex items-center">
      <div className={`border-b-[1px] w-[102px] border-solid ${theme === "dark" ? "border-[#BAB2E7]" : "border-[#3730A3]"}`}></div>
      <p className={`ml-3 text-lg md:text-xl font-medium ${theme === "dark" ? "text-[#BAB2E7]" : "text-[#3730A3]"}`}>
        Tolunay Yılmaz
      </p>
    </div>

    
    <h1 className={`text-3xl md:text-7xl font-bold ${theme === "dark" ? "text-[#AEBCCF]" : "text-black"} leading-tight`}>
      Creative thinker, Minimalism lover
    </h1>

    
    <p className={`text-sm md:text-base ${theme === "dark" ? "text-white" : "text-black"}`}>
      Hi, I’m Tolunay. I’m a full-stack developer. If you are looking for a
      Developer who crafts solid and scalable frontend products with great user experiences, let’s shake hands.
    </p>

  
    <div className="flex flex-wrap gap-2 md:gap-3">
      <Button textColor={theme === "dark" ? "black" : "white"} buttonName={"Hire Me"} bgColor={theme === "dark" ? "#E1E1FF" : "#3730A3"} borderColor={"#3730A3"} />
      <Button borderColor={theme === "dark" ? "#BAB2E7" : "#3730A3"} textColor={theme === "dark" ? "#BAB2E7" : "#3730A3"} buttonName={"Github"} iconName={faGithub} bgColor={theme === "dark" ? "#383838" : "white"} />
      <Button borderColor={theme === "dark" ? "#BAB2E7" : "#3730A3"} textColor={theme === "dark" ? "#BAB2E7" : "#3730A3"} buttonName={"Linkedin"} iconName={faLinkedinIn} bgColor={theme === "dark" ? "#383838" : "white"} />
    </div>
  </div>


  <img className="w-[250px] h-[250px] md:w-[375px] md:h-[375px] object-cover mt-4 md:mt-auto rounded-xl" src={photo} />
</div>

    </>
  );
}
