import photo from "../images/photo.jpg"
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Project({projectName,projectDescription,src}){

  const {theme} =useContext(ThemeContext);

    return(
    <div className="w-[300px] h-[450px] sm:h-[550px] rounded overflow-hidden ml-5 mr-32">
<img className="w-full h-44 object-fill" src={src} alt="Sunset in the mountains" />
      
      {theme==="dark"?(<>
        <div >
          <div className="text-2xl py-2 font-medium text-[#CFCBFF] md:text-3xl mb-2">{projectName}</div>
          <p className="text-white  text-sm">
        {projectDescription}
          </p>
        </div>
        <div className="pt-4 pb-2 flex gap-3">
          <span className="w-[68px] h-[27px] inline-block border-[1px] bg-[#383838] border-[#8F88FF] rounded-[4px] text-sm font-medium text-[#8F88FF] text-center">react</span>
          <span className="w-[68px] h-[27px] inline-block border-[1px] bg-[#383838] border-[#8F88FF] rounded-[4px] text-sm font-medium text-[#8F88FF] text-center">redux</span>
          <span className="w-[68px] h-[27px] inline-block border-[1px] bg-[#383838] border-[#8F88FF] rounded-[4px] text-sm font-medium text-[#8F88FF] text-center">axios</span>
        </div>
        <div className="flex justify-between mt-5">
            <p className="border-b-2 border-[#E1E1FF]  text-[#E1E1FF] text-base">Github</p>
            <p className="border-b-2 border-[#E1E1FF] text-[#E1E1FF] text-base">View Site</p>

        </div>
      
      </>):(<>
      
        <div >
          <div className="text-2xl py-2 font-medium text-[#3730A3] md:text-3xl mb-2">{projectName}</div>
          <p className="text-[#6B7280]  text-sm">
          {projectDescription}
          </p>
        </div>
        <div className="pt-4 pb-2 flex gap-3">
          <span className="w-[68px] h-[27px] inline-block border-[1px] border-[#3730A3] rounded-[4px] text-sm font-medium text-[#3730A3] text-center">react</span>
          <span className="w-[68px] h-[27px] inline-block border-[1px] border-[#3730A3] rounded-[4px] text-sm font-medium text-[#3730A3] text-center">redux</span>
          <span className="w-[68px] h-[27px] inline-block border-[1px] border-[#3730A3] rounded-[4px] text-sm font-medium text-[#3730A3] text-center">axios</span>
        </div>
        <div className="flex justify-between mt-5">
            <p className="border-b-2 border-[#3730A3]  text-[#3730A3] text-base">Github</p>
            <p className="border-b-2 border-[#3730A3]  text-[#3730A3] text-base">View Site</p>

        </div>
      
      </>)}
      </div>)
}