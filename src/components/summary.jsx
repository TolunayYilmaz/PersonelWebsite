import photo from "../images/photo.jpg";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import Button from "./Button.jsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Summary() {

  const {theme} =useContext(ThemeContext);
  return (
    <>
      <div className="w-7/12 h-1/2  mx-auto flex justify-between">
        <div className="flex flex-col justify-between w-[596px]">
          <div className="flex">
            <div className={`border-b-[1px] mb-3 w-[102px] border-solid border-[#3730A3] ${theme==="dark"?"border-[#BAB2E7]":"border-[#3730A3]"}`}></div>
            <p className={`ml-3 text-xl font-medium  ${theme==="dark"?"text-[#BAB2E7]":"text-[#3730A3]"}`}>Tolunay Yılmaz</p>
          </div>

          <h1 className={`text-7xl font-bold ${theme==="dark"?"text-[#AEBCCF]":"text-black"} `}>Creative thinker Minimalism lover</h1>
          <p className={`${theme==="dark"?"text-white":"text-black"} `}>
            Hi, I’m Tolunay. I’m a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let’s shake hands with me.
          </p>
          <div className="flex gap-3">
            <Button  textColor={theme==="dark"?"black":"white"} buttonName={"Hire Me"} bgColor={ theme==="dark"?"#E1E1FF":"#3730A3"} borderColor={"#3730A3"}/>
            <Button borderColor={theme==="dark"?"#BAB2E7":"#3730A3"} textColor={theme==="dark"?"#BAB2E7":"#3730A3"} buttonName={"Github"} iconName={faGithub} bgColor={ theme==="dark"?"#383838":"white"}/>
            <Button borderColor={theme==="dark"?"#BAB2E7":"#3730A3"}  textColor={theme==="dark"?"#BAB2E7":"#3730A3"} buttonName={"Linkedin"} iconName={faLinkedinIn} bgColor={ theme==="dark"?"#383838":"white"}/>
          </div>
        </div>

        <img className="w-[375px] h-[375px] object-fit mt-auto  mr-2 rounded-xl" src={photo} />
      </div>
    </>
  );
}
