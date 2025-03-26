import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Profile() {
  const{theme} =useContext(ThemeContext);
  return (
    <div className="w-7/12 mx-auto border-t border-b border-[#BAB2E7] py-6">
      {
        theme==="dark"?(<>
        <h1 className="text-5xl font-semibold text-[#AEBCCF]">Profile</h1>
      <div className="flex gap-14">
        <div className=" w-2/5">
          <h2 className="text-3xl text-[#B7AAFF] mb-5 mt-6">Profile</h2>
          <div className="flex">
            <div className="w-40 flex flex-col gap-2">
              <p className="text-lg font-semibold text-[#FFFFFF]">Doğum Tarihi</p>
              <p className="text-lg font-semibold text-[#FFFFFF]">İkamet Şehri</p>
              <p className="text-lg font-semibold text-[#FFFFFF]">Eğitim Durumu</p>
              <p className="text-lg font-semibold mt-5 text-[#FFFFFF]">Tercih Ettiği Rol</p>
            </div>
            <div className="w-56 flex flex-col gap-3">
              <p className="font-normal text-[#FFFFFF]">10.05.1998</p>
              <p className="font-normal text-[#FFFFFF]">İstanbul</p>
              <p className="font-normal text-[#FFFFFF]">
                Tekirdağ Namı Kemal Ünv. Endüstri Müh., 2021
              </p>
              <p className="font-normal text-[#FFFFFF]">Frontend , Backend and Fullstack</p>
            </div>
          </div>
        </div>
        <div className=" w-3/5">
          <h2 className="text-3xl text-[#B7AAFF] mb-5 mt-6">About Me</h2>
          <div className="flex flex-col gap-4">
          <p className="text-lg text-[#FFFFFF] font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. 
          
          </p>
          <p className="text-lg text-[#FFFFFF] font-normal">  Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!</p>
          </div>
  
        </div>

      </div>
        
        
        </>):(<>
          <h1 className="text-5xl font-semibold">Profile</h1>
      <div className="flex gap-14">
        <div className=" w-2/5">
          <h2 className="text-3xl text-[#4338CA] mb-5 mt-6">Profile</h2>
          <div className="flex">
            <div className="w-40 flex flex-col gap-2">
              <p className="text-lg font-semibold">Doğum Tarihi</p>
              <p className="text-lg font-semibold">İkamet Şehri</p>
              <p className="text-lg font-semibold">Eğitim Durumu</p>
              <p className="text-lg font-semibold mt-5">Tercih Ettiği Rol</p>
            </div>
            <div className="w-56 flex flex-col gap-3">
              <p className="font-normal">10.05.1998</p>
              <p className="font-normal">İstanbul</p>
              <p className="font-normal ">
                Tekirdağ Namı Kemal Ünv. Endüstri Müh., 2021
              </p>
              <p className="font-normal">Frontend , Backend and Fullstack</p>
            </div>
          </div>
        </div>
        <div className=" w-3/5">
          <h2 className="text-3xl text-[#4338CA] mb-5 mt-6">About Me</h2>
          <div className="flex flex-col gap-4">
          <p className="text-lg text-[#6B7280] font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. 
          
          </p>
          <p className="text-lg text-[#6B7280] font-normal">  Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!</p>
          </div>
  
        </div>

      </div>
        
        </>)
      }
    </div>
  );
}
