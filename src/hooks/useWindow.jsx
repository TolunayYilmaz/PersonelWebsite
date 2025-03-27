import {useEffect,useState } from "react";
export const  useWindow=()=>{

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

  return{itemsPerPanel}

}
