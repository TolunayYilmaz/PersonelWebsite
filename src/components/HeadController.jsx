import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { useProfile } from "../services/queries";

export default function HeadController() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { getData } = useContext(LanguageContext);
  const { data } = useProfile(getData());

  const isDarkMode = theme === "dark";
  const isLang = language === "tr";

  return (
    <div className={`fixed pb-4 w-full ${isDarkMode?"bg-[#252128]":"bg-white"} z-50`}>
        <div className="w-fit mt-10  sm:w-7/12 mx-auto sm:mt-3 flex gap-3 justify-end">
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            className="sr-only"
          />

          <div
            className={`block h-[24px] w-[55px] rounded-full transition duration-300 ${
              isDarkMode ? "bg-[#3A3A3A]" : "bg-[#4731D3]"
            }`}
          ></div>

          <div
            className={`dot absolute top-1/2 transform -translate-y-1/2 left-[5px] flex h-[16px] w-[16px] items-center justify-center rounded-full transition duration-500 ${
              isDarkMode ? "translate-x-[30px]" : ""
            }`}
          >
            {isDarkMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
                className="h-5 w-5 text-[#FFE86E] rotate-[30deg]"
              >
                <path d="M21 12.79A9 9 0 1112.79 3c.4 0 .79.07 1.17.18A7 7 0 1018.83 16a8.953 8.953 0 012.17-3.21z" />
              </svg>
            )}

            {!isDarkMode && (
              <div className="h-4 w-4 rounded-full bg-[#FFE86E]"></div>
            )}
          </div>
        </div>
      </label>

      <div className="text-[15px] font-bold text-[#777777]">
        {isDarkMode ? data?.darkMode : data?.lightMode}  |{" "}
     {
      isLang?(<> {data?.languageClause+" "}<span
        onClick={toggleLanguage}
        className="text-[#3730A3] hover:cursor-pointer hover:shadow-md hover:shadow-gray"
      >
        {data?.language}
      </span>
     </>):(<> <span
        onClick={toggleLanguage}
        className="text-[#3730A3] hover:cursor-pointer hover:shadow-md hover:shadow-gray"
      >
        {data?.language}
      </span>
      {" "+data?.languageClause}</>)
     }
       
      </div>
    </div>
    </div>
  
  );
}
