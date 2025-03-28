import Project from "./Project";
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useWindow } from "../hooks/useWindow";
import { LanguageContext } from "../contexts/LanguageContext";
import { useProfile } from "../services/queries";

export default function ProjectList() {
  const { itemsPerPanel } = useWindow();

  const { getData } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
   const { data, isPending } = useProfile(getData());
  return (
    <div className="w-full mx-auto  flex flex-col pl-10 mt-12 md:w-3/5 md:pl-0 md:mt-24 justify-center ">
      <h1
        className={` text-3xl md:text-5xl mb-20 ml-2 ${
          theme === "dark" ? "text-[#AEBCCF]" : "text-black"
        }`}
      >
        Projects
      </h1>

  {isPending?(<><h2>Yükleniyor...</h2></>):(<>    <Carousel
        itemCountPerPanel={itemsPerPanel}
        customMode
        carouselId={"carousel1"}
        key={getData()}
      >
        {data?.projects?.map((item, index) => (
          <Project
            projectName={item.name}
            projectDescription={item.description}
            key={index}
          ></Project>
        ))}
      </Carousel>

      <div className="flex justify-center mr-[10%] mt-5 md:mr-0">
        <div
          className={`hover:cursor-pointer ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <Controller prev carouselId={"carousel1"} />
        </div>
        <div
          className={`hover:cursor-pointer ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <Controller
            style={{ cursor: "pointer" }}
            next
            carouselId={"carousel1"}
          />
        </div>
      </div></>)}
    </div>
  );
}
