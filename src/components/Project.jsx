import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Project({
  projectName,
  projectDescription,
  src,
  techs,
  viewSite,
  gitHubLink
}) {
  const { theme } = useContext(ThemeContext);
  const goTo = (value) => {
    window.location.href = value;
  };
  

  return (
    <div className="w-[300px] h-[450px] sm:h-[460px] rounded overflow-hidden ml-5 mr-32 flex flex-col justify-between">
      <img
        className="w-full h-44 object-fill"
        src={src}
        alt="Sunset in the mountains"
      />

      {theme === "dark" ? (
        <>
          <div >
            <div className="text-2xl py-2 font-medium text-[#CFCBFF] md:text-3xl mb-2">
              {projectName}
            </div>
            <p className="text-white  text-sm">{projectDescription}</p>
          </div>
          <div className="pt-4 pb-2 flex gap-3">
            <span className="min-w-[68px] min-h-[27px] inline-block border-[1px] bg-[#383838] border-[#8F88FF] rounded-[4px] text-sm font-medium text-[#8F88FF] text-center px-2">
              {techs[0]}
            </span>
            <span className="min-w-[68px] min-h-[27px] inline-block border-[1px] bg-[#383838] border-[#8F88FF] rounded-[4px] text-sm font-medium text-[#8F88FF] text-center px-2">
              {techs[1]}
            </span>
            <span className="min-w-[68px] min-h-[27px] inline-block border-[1px] bg-[#383838] border-[#8F88FF] rounded-[4px] text-sm font-medium text-[#8F88FF] text-center px-2">
              {techs[2]}
            </span>
          </div>
          <div className="flex justify-between mt-5">
            <p className="border-b-2 border-[#E1E1FF]  text-[#E1E1FF] text-base hover:cursor-pointer" onClick={()=>goTo(gitHubLink)} >
              Github
            </p>
           {viewSite&& <p className="border-b-2 border-[#E1E1FF] text-[#E1E1FF] text-base hover:cursor-pointer"  onClick={()=>goTo(viewSite)}>
              View Site
            </p>}
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="text-2xl py-2 font-medium text-[#3730A3] md:text-3xl mb-2">
              {projectName}
            </div>
            <p className="text-[#6B7280]  text-sm">{projectDescription}</p>
          </div>
          <div className="pt-4 pb-2 flex gap-3">
            <span className="min-w-[68px] min-h-[27px]  inline-block border-[1px] border-[#3730A3] rounded-[4px] text-sm font-medium text-[#3730A3] text-center  px-2">
            {techs[0]}
            </span>
            <span className="min-w-[68px] min-h-[27px]  inline-block border-[1px] border-[#3730A3] rounded-[4px] text-sm font-medium text-[#3730A3] text-center  px-2">
            {techs[1]}
            </span>
            <span className="min-w-[68px] min-h-[27px]  inline-block border-[1px] border-[#3730A3] rounded-[4px] text-sm font-medium text-[#3730A3] text-center  px-2">
            {techs[2]}
            </span>
          </div>
          <div className="flex justify-between mt-5">
            <p className="border-b-2 border-[#3730A3]  text-[#3730A3] text-base hover:cursor-pointer"  onClick={()=>goTo(gitHubLink)}>
              Github
            </p>
            {viewSite&& <p className="border-b-2 border-[#3730A3]  text-[#3730A3] text-base hover:cursor-pointer" onClick={()=>goTo(viewSite)}>
              View Site
            </p>}
          </div>
        </>
      )}
    </div>
  );
}
