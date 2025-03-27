import ItemSkill from "./ItemSkill";
import React, { useContext,useEffect,useState } from "react";
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { ThemeContext } from "../contexts/ThemeContext";

const sampleArray = [1, 2, 3, 4, 6, 7, 8];

export default function Skills() {
  const { theme } = useContext(ThemeContext);

 
  const [itemsPerPanel, setItemsPerPanel] = useState(3); 


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPanel(1); 
      } else if (window.innerWidth <= 1024) {
        setItemsPerPanel(2); 
      } else {
        setItemsPerPanel(3);
      }
    };


    handleResize();


    window.addEventListener("resize", handleResize);


    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerPanel]); 

  return (
    <div className="flex justify-center">
      <div className="w-full ml-11 mt-12 md:w-3/5  mt-24">
      
        <h1 className={`text-3xl md:text-5xl mb-10 ml-2 ${theme === "dark" ? "text-[#AEBCCF]" : "text-black"}`}>
          Skills
        </h1>

    
        <Carousel 
          itemCountPerPanel={itemsPerPanel}  
          customMode 
          carouselId={"carousel2"}
          
        >
          {sampleArray.map((el, index) => (
            <ItemSkill key={index} />
          ))}
        </Carousel>

   
        <div className="flex mr-24 md: justify-center mt-5 gap-4">
          <div className="hover:cursor-pointer">
            <Controller prev carouselId={"carousel2"} />
          </div>
          <div className="hover:cursor-pointer">
            <Controller next carouselId={"carousel2"} />
          </div>
        </div>
      </div>
    </div>
  );
}
