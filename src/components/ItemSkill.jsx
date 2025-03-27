import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export default function ItemSkill({skillHead,skill}) {
  const {theme}=useContext(ThemeContext);
  return (
    <div className="w-72 h-36 flex flex-col gap-4 mr-32 ml-4  ">
      <h2 className={`text-3xl  ${theme==="dark"?"text-[#B7AAFF]":"text-[#4338CA]"}`}>{skillHead}</h2>
      <p className={`w-72 text-xs  leading-relaxed  ${theme==="dark"?"text-[#FFFFFF]":"text-gray-600"}`}>
        {skill}
      </p>
    </div>
  );
}
