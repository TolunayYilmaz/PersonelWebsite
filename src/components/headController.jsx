import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function HeadController() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  // Eğer theme "dark" ise karanlık modda olduğumuzu belirtir
  const isDarkMode = theme === "dark";

  return (
    <div className="w-7/12 mx-auto mt-3 flex gap-3 justify-end">
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            className="sr-only"
          />

          {/* Arka plan (dark veya light mod rengi) */}
          <div
            className={`block h-[24px] w-[55px] rounded-full transition duration-300 ${
              isDarkMode ? "bg-[#3A3A3A]" : "bg-[#4731D3]"
            }`}
          ></div>

          {/* Kaydırma noktası (ikon ile birlikte) */}
          <div
            className={`dot absolute top-1/2 transform -translate-y-1/2 left-[5px] flex h-[16px] w-[16px] items-center justify-center rounded-full transition duration-500 ${
              isDarkMode ? "translate-x-[30px]" : ""
            }`}
          >
            {/* 🌞 Güneş İkonu (Light Mode Aktifken Görünmeli) */}
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

            {/* 🌙 Ay İkonu (Dark Mode Aktifken Görünmeli) */}
            {!isDarkMode && <div className="h-4 w-4 rounded-full bg-[#FFE86E]"></div>}
          </div>
        </div>
      </label>

      {/* Tema adını dinamik olarak değiştir */}
      <div className="text-[15px] font-bold text-[#777777]">
        {isDarkMode ?"DARK" : "LIGHT"} MODE | <span className="text-[#3730A3]">TÜRKÇE</span>'YE GEÇ
      </div>
    </div>
  );
}
