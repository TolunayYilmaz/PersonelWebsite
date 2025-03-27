import Project from "./Project"
import React from "react";
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useWindow } from "../hooks/useWindow";
import profileData from "../data";


export default function ProjectList(){
  const{itemsPerPanel}=useWindow();

  const {theme} =useContext(ThemeContext);
    return(
       <div className="w-full mx-auto  flex flex-col pl-10 mt-12 md:w-3/5 md:pl-0 md:mt-24 justify-center ">
            <h1 className={`text-5xl mb-20 ml-2 ${theme==="dark"?"text-[#AEBCCF]":"text-black"}`}>Projects</h1>
       
        <Carousel itemCountPerPanel={itemsPerPanel} customMode carouselId={"carousel1"}>
              {profileData.projects.map((item,index) => (
              <Project projectName={item.name} projectDescription={item.description} key={index}></Project>
              ))}
            </Carousel>
       
            <div className="flex justify-center mr-[10%] mt-5 md:mr-0">
              <div className="hover:cursor-pointer"><Controller  prev carouselId={"carousel1"} /></div>
              <div className="hover:cursor-pointer"><Controller style={{ cursor: "pointer" }} next carouselId={"carousel1"} /></div>
            </div>
          </div>

)
}