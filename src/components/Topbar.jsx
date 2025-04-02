import Button from "./Button.jsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";
import { LanguageContext } from "../contexts/LanguageContext";
import { useProfile } from "../services/queries";
export default function TopBar() {
  const { getData } = useContext(LanguageContext);
  const { data } = useProfile(getData());
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-7/12 mx-auto  flex gap-3 mt-24 justify-between items-center">
      <div
        className={`w-[62px] h-[62px] border-2 border-none  rounded-full flex items-center justify-center ${
          theme === "dark" ? "bg-[#EEEBFF]" : "bg-[#7B61FF]"
        }`}
      >
        <span
          className={`text-3xl font-bold transform rotate-[30deg] ${
            theme === "dark" ? "text-[#7B61FF] " : "text-[#EEEBFF] "
          }`}
        >
          T
        </span>
      </div>
      <div className="flex flex-col justify-between  md:flex-row gap-2">
        <Button
          textColor={"#6B7280"}
          buttonName={data?.title?.skills}
          location={"skills"}
        />
        <Button
          textColor={"#6B7280"}
          buttonName={data?.title?.projects}
          location={"projects"}
        />
        <Button
          textColor={"#3730A3"}
          buttonName={data?.title?.hire}
          borderColor={"#3730A3"}
          bgColor={"white"}
          location={"profile"}
        />
      </div>
    </div>
  );
}
