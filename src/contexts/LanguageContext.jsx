import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useProfile} from "../services/queries";


export const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const [language, setLanguage] =useLocalStorage("language","tr");
  
 
  const toggleLanguage = () => {
    setLanguage(language==="tr"?"en":"tr");
  };
  const getData=()=>{
   
    if(language==="tr"){
      return 2;
    }
    else{
      return 1;
    }

  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage,getData}}>
      {children}
    </LanguageContext.Provider>
  );
}