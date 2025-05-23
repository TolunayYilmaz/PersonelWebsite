import photo from "../images/photo.jpg";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button.jsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";
import { LanguageContext } from "../contexts/LanguageContext";
import { useProfile } from "../services/queries";
import { useGoSite } from "../hooks/useGoSite.jsx";

export default function Summary() {
  const { theme } = useContext(ThemeContext);
  const { getData } = useContext(LanguageContext);
  const { data } = useProfile(getData());
  const goTo = useGoSite();

  return (
    <>
      <div className="flex items-center   h-0 m-0 p-0 sm:mx-auto sm:w-7/12 ">
        <div
          className={`border-b-[1px] w-[102px] border-solid ${
            theme === "dark" ? "border-[#BAB2E7]" : "border-[#3730A3]"
          }`}
        ></div>
        <p
          className={`ml-3 text-lg  md:text-xl font-medium ${
            theme === "dark" ? "text-[#BAB2E7]" : "text-[#3730A3]"
          } `}
        >
          {data?.name}
        </p>
      </div>
      <div className="w-[75%] flex flex-col-reverse gap-5  sm:w-7/12 sm:flex-row xl:gap-0  lg:h-auto mx-auto   sm:items-center sm:justify-between">
        <div className=" flex flex-col justify-between gap-5 w-full sm:gap-16 sm:w-1/2 sm:my-12  ">
          <h1
            className={`text-3xl lg:text-4xl xl:text-5xl xl:w-[400px] 2xl:text-6xl 2xl:w-[500px] 3xl:w-[672px] 3xl:text-7xl font-bold ${
              theme === "dark" ? "text-[#AEBCCF]" : "text-black"
            } leading-tight  `}
          >
            {data?.title?.summaryHead}
          </h1>

          <p
            className={`text-sm  lg:text-base xl:w-[450px] 2xl:w-[530px] xl:h-auto 3xl:text-lg 3xl:leading-7  ${
              theme === "dark" ? "text-white" : "text-[#6B7280]"
            }`}
          >
            {data?.about}
          </p>

          <div className="flex flex-wrap gap-2 xl:gap-3">
            <Button
              textColor={theme === "dark" ? "black" : "white"}
              buttonName={data?.title?.hire}
              bgColor={theme === "dark" ? "#E1E1FF" : "#3730A3"}
              borderColor={"#3730A3"}
              location={"profile"}
            />
            <Button
              borderColor={theme === "dark" ? "#BAB2E7" : "#3730A3"}
              textColor={theme === "dark" ? "#BAB2E7" : "#3730A3"}
              buttonName={data?.title?.github}
              iconName={faGithub}
              bgColor={theme === "dark" ? "#383838" : "white"}
              goSite={() => goTo(data?.contact?.github)}
            />
            <Button
              borderColor={theme === "dark" ? "#BAB2E7" : "#3730A3"}
              textColor={theme === "dark" ? "#BAB2E7" : "#3730A3"}
              buttonName={data?.title?.linkedIn}
              iconName={faLinkedinIn}
              bgColor={theme === "dark" ? "#383838" : "white"}
              goSite={() => goTo(data?.contact?.linkedin)}
            />
          </div>
        </div>

        <img
          className="w-[250px] h-[250px] ml-4 sm:ml-0 lg:w-[300px] lg:h-[300px] 2xl:w-[375px]  2xl:h-[375px] object-cover xl:mt-4 rounded-xl"
          src={photo}
        />
      </div>
    </>
  );
}
