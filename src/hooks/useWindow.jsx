import { useEffect, useState } from "react";

export const useWindow = () => {
  const getItemsPerPanel = () => {
    if (window.innerWidth <= 640) {
      return 1;
    } else if (window.innerWidth <= 1024) {
      return 2;
    } else {
      return 3;
    }
  };

  const [itemsPerPanel, setItemsPerPanel] = useState(getItemsPerPanel);

  useEffect(() => {
   setItemsPerPanel(getItemsPerPanel())
  }, []);

  return { itemsPerPanel };
};
