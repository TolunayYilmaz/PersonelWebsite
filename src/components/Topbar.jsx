import Button from "./Button.jsx";
import {useContext} from "react"
import { ThemeContext } from "../contexts/ThemeContext.jsx";

export default function TopBar() {

  const {theme}=useContext(ThemeContext)
  return (
    <div className="w-7/12 mx-auto  flex gap-3  justify-between items-center">
      <div className={`w-[62px] h-[62px] border-2 border-none  rounded-full flex items-center justify-center ${theme==="dark"?"bg-[#EEEBFF]":"bg-[#7B61FF]"}`}>
        <span className={`text-3xl font-bold transform rotate-[30deg] ${theme==="dark"?"text-[#7B61FF] ":"text-[#EEEBFF] "}`}>
          T
        </span>
      </div>
      <div
        className="flex gap-2"
      >
        <Button textColor={"#6B7280"} buttonName={"Skills"} />
        <Button textColor={"#6B7280"} buttonName={"Projects"} />
        <Button
          textColor={"#3730A3"}
          buttonName={"Hire Me"}
          borderColor={"#3730A3"}
          bgColor={"white"}
        />
      </div>
    </div>
  );
}
