import Project from "./Project"
import React from "react";
import styled from "styled-components";
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 60%;
  
 
`;

const ControllerBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;


`;
const sampleArray = [1, 2, 3, 4, 6, 7, 8];
export default function ProjectList(){

  const {theme} =useContext(ThemeContext);
    return(
         <Container>
            <h1 className={`text-5xl mb-20 ml-2 ${theme==="dark"?"text-[#AEBCCF]":"text-black"}`}>Projects</h1>
            <Carousel itemCountPerPanel={3} customMode carouselId={"carousel1"}>
              {sampleArray.map((el) => (
              <Project></Project>
              ))}
            </Carousel>
            <ControllerBox>
              <div className="hover:cursor-pointer"><Controller  prev carouselId={"carousel1"} /></div>
              <div className="hover:cursor-pointer"><Controller style={{ cursor: "pointer" }} next carouselId={"carousel1"} /></div>
            </ControllerBox>
          </Container>

)
}