import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import {LanguageContext} from "../contexts/LanguageContext"
import { useProfile } from "../services/queries";

export default function Profile() {
  const{theme} =useContext(ThemeContext);
  const { getData } = useContext(LanguageContext);
  const { data, isPending } = useProfile(getData());
  return (
    <div className="w-[80%]  border-t border-b border-[#BAB2E7] py-6 md:w-7/12 mx-auto ">
      {
        theme==="dark"?(<>
      
      <h1 className="text-3xl md:text-5xl font-semibold text-[#AEBCCF]">Profile</h1>
      <div className="flex flex-col md:flex-row gap-14">
        <div className="w-full md:w-2/5">
          <h2 className="text-2xl md:text-3xl text-[#B7AAFF] mb-5 mt-6">Profile</h2>
          <div className="flex">
            <div className="w-40 flex flex-col gap-2">
              <p className="md:text-lg font-semibold text-[#FFFFFF]">Doğum Tarihi</p>
              <p className="md:text-lg font-semibold text-[#FFFFFF]">İkamet Şehri</p>
              <p className="md:text-lg font-semibold text-[#FFFFFF]">Eğitim Durumu</p>
              <p className="md:text-lg font-semibold mt-5 text-[#FFFFFF]">Tercih Ettiği Rol</p>
            </div>
            <div className="w-56 gap-[7px] flex flex-col md:gap-3">
              <p className="font-normal text-[#FFFFFF]">10.05.1998</p>
              <p className="font-normal text-[#FFFFFF]">İstanbul</p>
              <p className="font-normal text-[#FFFFFF]">Tekirdağ Namı Kemal Ünv. Endüstri Müh., 2021</p>
              <p className="font-normal text-[#FFFFFF]">Frontend, Backend ve Fullstack</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="text-2xl md:text-3xl text-[#B7AAFF] mb-5 mt-6">About Me</h2>
          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-lg text-[#FFFFFF] font-normal">{data?.summary}</p>
          </div>
        </div>
      </div>
   
        
        </>):(<>
          <h1 className="text-3xl md:text-5xl font-semibold">Profile</h1>
      <div className="flex flex-col md:flex-row gap-14">
        <div className="w-full  md:w-2/5">
          <h2 className="text-2xl md:text-3xl text-[#4338CA] mb-5 mt-6">Profile</h2>
          <div className="flex ">
            <div className="w-40 flex flex-col gap-2 ">
              <p className="md:text-lg font-semibold">Doğum Tarihi</p>
              <p className="md:text-lg font-semibold">İkamet Şehri</p>
              <p className="md:text-lg font-semibold">Eğitim Durumu</p>
              <p className="md:text-lg font-semibold mt-5">Tercih Ettiği Rol</p>
            </div>
            <div className="w-56 gap-[7px] flex flex-col md:gap-3">
              <p className="font-normal">10.05.1998</p>
              <p className="font-normal">İstanbul</p>
              <p className="font-normal ">
                Tekirdağ Namı Kemal Ünv. Endüstri Müh., 2021
              </p>
              <p className="font-normal">Frontend , Backend and Fullstack</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="text-2xl md:text-3xl text-[#4338CA] mb-5 mt-6">About Me</h2>
          <div className="flex flex-col gap-4">
          <p className="text-sm md:text-lg text-[#6B7280] font-normal">
          {data?.summary}
          
          </p>
          <p className="text-lg text-[#6B7280] font-normal"> </p>
          </div>
  
        </div>

      </div>
        
        </>)
      }
    </div>
  );
}
