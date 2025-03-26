import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export default function ItemSkill() {
  const {theme}=useContext(ThemeContext);
  return (
    <div className="w-72 h-36 flex flex-col gap-4 mr-32 ml-4  ">
      <h2 className={`text-3xl  ${theme==="dark"?"text-[#B7AAFF]":"text-[#4338CA]"}`}>JavaScript</h2>
      <p className={`w-72 text-xs  leading-relaxed  ${theme==="dark"?"text-[#FFFFFF]":"text-gray-600"}`}>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}
