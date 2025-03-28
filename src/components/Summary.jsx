import photo from "../images/photo.jpg";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button.jsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";
import {LanguageContext} from "../contexts/LanguageContext"
import { useProfile } from "../services/queries";

export default function Summary() {
  const { theme } = useContext(ThemeContext);
  const { getData } = useContext(LanguageContext);
   const { data } =useProfile(getData());
  
  return (
    <>
     <div className="flex items-center  h-0 m-0 p-0 md:mx-auto md:w-7/12 ">
            <div
              className={`border-b-[1px] w-[102px] border-solid ${
                theme === "dark" ? "border-[#BAB2E7]" : "border-[#3730A3]"
              }`}
            ></div>
            <p
              className={`ml-3 text-lg md:text-xl font-medium ${
                theme === "dark" ? "text-[#BAB2E7]" : "text-[#3730A3]"
              } `}
            >
              {data?.name}
            </p>
      </div>
      <div className="w-[75%]  flex flex-col-reverse gap-5  md:gap-0 md:w-8/12 md:h-auto mx-auto  md:flex-row md:items-center md:justify-between md:px-4 ">
     
        <div className="flex flex-col justify-between gap-5 w-full md:gap-16 md:w-1/2 md:m-12  ">
      

          <h1
            className={`text-3xl md:text-7xl font-bold ${
              theme === "dark" ? "text-[#AEBCCF]" : "text-black"
            } leading-tight  `}
          >
            Creative thinker, Minimalism lover
          </h1>

          <p
            className={`text-sm md:text-base ${
              theme === "dark" ? "text-white" : "text-[#6B7280]"
            } md:w-[553px] md:h-auto`}
          >
            {data?.about}
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3">
            <Button
              textColor={theme === "dark" ? "black" : "white"}
              buttonName={"Hire Me"}
              bgColor={theme === "dark" ? "#E1E1FF" : "#3730A3"}
              borderColor={"#3730A3"}
              location={"profile"}
            />
            <Button
              borderColor={theme === "dark" ? "#BAB2E7" : "#3730A3"}
              textColor={theme === "dark" ? "#BAB2E7" : "#3730A3"}
              buttonName={"Github"}
              iconName={faGithub}
              bgColor={theme === "dark" ? "#383838" : "white"}
            />
            <Button
              borderColor={theme === "dark" ? "#BAB2E7" : "#3730A3"}
              textColor={theme === "dark" ? "#BAB2E7" : "#3730A3"}
              buttonName={"Linkedin"}
              iconName={faLinkedinIn}
              bgColor={theme === "dark" ? "#383838" : "white"}
            />
          </div>
        </div>

        <img
          className="w-[250px] h-[250px] md:w-[375px] md:h-[375px] object-cover md:mt-4 rounded-xl"
          src={photo}
        />
      </div>
    </>
  );
}
