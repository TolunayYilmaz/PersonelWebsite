import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const {theme}=useContext(ThemeContext);
  return (
<>
{theme==="dark"?(<>

  <div className="bg-[#141414] h-[410px]">
      <div className="w-7/12 h-1/2  mx-auto flex flex-col gap-20 ">
      <h2 className="text-[42px] mt-16 w-2/5 text-[#AEBCCF]">Let’s work together on your next product.</h2>
      <div className="flex justify-between">
        <p className="text-xl border-b-2 border-[#BAB2E7] text-[#BAB2E7] inline-block "><FontAwesomeIcon icon={faHandPointUp} rotation={90} style={{color: "#FFD43B",}} /> tolunayyilmaz10@gmail.com</p>
        <div className="flex gap-4">
          <p className="text-lg text-[#E1E1FF]">Personel Blog</p>
          <p className="text-lg text-[#00AB6B]">Github</p>
          <p className="text-lg text-[#0077B5]">Linkedin</p>
        </div>
      </div>
      </div>
    </div>
</>):(<>

  <div className="bg-[#F9F9F9] h-[410px]">
      <div className="w-7/12 h-1/2  mx-auto flex flex-col gap-20 ">
      <h2 className="text-[42px] mt-16 w-2/5">Let’s work together on your next product.</h2>
      <div className="flex justify-between">
        <p className="text-xl border-b-2 border-[#AF0C48] text-[#AF0C48] inline-block "><FontAwesomeIcon icon={faHandPointUp} rotation={90} style={{color: "#FFD43B",}} /> tolunayyilmaz10@gmail.com</p>
        <div className="flex gap-4">
          <p className="text-lg">Personel Blog</p>
          <p className="text-lg text-[#00AB6B]">Github</p>
          <p className="text-lg text-[#0077B5]">Linkedin</p>
        </div>
      </div>
      </div>
    </div>

</>)}
</>
  );
}
