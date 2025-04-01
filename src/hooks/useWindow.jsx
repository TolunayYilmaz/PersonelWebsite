import { useEffect, useState } from "react";

export const useWindow = () => {
  const getItemsPerPanel = () => {
    if (window.innerWidth <= 1000) {
      return 1;
    } else if (window.innerWidth <= 1600) {
      return 2;
    } else {
      return 3;
    }
  };

  const [itemsPerPanel, setItemsPerPanel] = useState(getItemsPerPanel);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPanel(getItemsPerPanel());
    };

    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { itemsPerPanel };
};
