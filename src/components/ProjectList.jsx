import Project from "./Project"
import React from "react";
import styled from "styled-components";
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useWindow } from "../hooks/useWindow";


const sampleArray = [1, 2, 3, 4, 6, 7, 8];
export default function ProjectList(){
  const{itemsPerPanel}=useWindow();

  const {theme} =useContext(ThemeContext);
    return(
       <div className="w-full mx-auto  flex flex-col pl-10 mt-12 md:w-3/5 md:pl-0 md:mt-24 justify-center ">
            <h1 className={`text-5xl mb-20 ml-2 ${theme==="dark"?"text-[#AEBCCF]":"text-black"}`}>Projects</h1>
       
        <Carousel itemCountPerPanel={itemsPerPanel} customMode carouselId={"carousel1"}>
              {sampleArray.map((el,index) => (
              <Project key={index}></Project>
              ))}
            </Carousel>
       
            <div className="flex justify-center mr-[10%] mt-5 md:mr-0">
              <div className="hover:cursor-pointer"><Controller  prev carouselId={"carousel1"} /></div>
              <div className="hover:cursor-pointer"><Controller style={{ cursor: "pointer" }} next carouselId={"carousel1"} /></div>
            </div>
          </div>

)
}