import ItemSkill from "./ItemSkill";
import React, { useContext, useEffect, useState } from "react";
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { ThemeContext } from "../contexts/ThemeContext";
import { useWindow } from "../hooks/useWindow";
import { LanguageContext } from "../contexts/LanguageContext";
import { useProfile } from "../services/queries";

export default function Skills() {
  const { theme } = useContext(ThemeContext);
  const { itemsPerPanel } = useWindow();
  const { getData } = useContext(LanguageContext);
  const { data, isPending } = useProfile(getData());

  return (
    <div className="flex justify-center">
      <div className="w-full ml-20 md:w-3/5  md:mt-24">
        <h1
          className={`text-3xl  mb-5 md:text-5xl md:mb-10 ml-2 ${
            theme === "dark" ? "text-[#AEBCCF]" : "text-black"
          }`}
        >
          Skills
        </h1>

        {isPending ? (
          <p>Yükleniyor:</p>
        ) : (
          <>
            <Carousel
              itemCountPerPanel={itemsPerPanel}
              customMode
              carouselId={"carousel2"}
              key={getData()||itemsPerPanel}//keyden dolayı render olmuyodu çözüldü.
              
            >
              {data?.skills?.map((item, index) => (
                <ItemSkill
                  skillHead={item.name}
                  skill={item.description}
                  key={index}
                />
              ))}
            </Carousel>

            <div className="flex mr-24 md: justify-center mt-5 gap-4">
              <div
                className={`hover:cursor-pointer ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                <Controller prev carouselId={"carousel2"} />
              </div>
              <div
                className={`hover:cursor-pointer ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                <Controller next carouselId={"carousel2"} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
