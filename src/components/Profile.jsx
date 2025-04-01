import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import { LanguageContext } from "../contexts/LanguageContext";
import { useProfile } from "../services/queries";


export default function Profile() {
  const { theme } = useContext(ThemeContext);
  const { getData } = useContext(LanguageContext);
  const { data, isPending } = useProfile(getData());
  return (
    <div
     
      className="w-[80%]  border-t border-b border-[#BAB2E7] py-6 md:w-7/12 mx-auto "
    >
      {theme === "dark" ? (
        <>
       
            {" "}
            <h1 className="text-3xl md:text-5xl font-semibold text-[#AEBCCF]">
              {data?.title?.profile}
            </h1>
            <div className="flex flex-col md:flex-row gap-14">
              <div className="w-full md:w-2/5">
                <h2 className="text-2xl md:text-3xl text-[#B7AAFF] mb-5 mt-6">
                {data?.title?.profile}
                </h2>
                <div className="flex gap-6 md:gap-0">
                  <div className="w-3/5 flex flex-col gap-2">
                    <p className="md:text-lg font-semibold text-[#FFFFFF]">
                    {data?.title?.dateOfBirth}
                    </p>
                    <p className="md:text-lg font-semibold text-[#FFFFFF]">
                    {data?.title?.residenceCity}
                    </p>
                    <p className="md:text-lg font-semibold text-[#FFFFFF]">
                    {data?.title?.education}
                    </p>
                    <p className=" mt-20 md:text-lg font-semibold md:mt-5 text-[#FFFFFF]">
                    {data?.title?.preferredRoles}
                    </p>
                  </div>
                  <div className="w-56 gap-[7px] flex flex-col md:gap-3">
                    <p className="font-normal text-[#FFFFFF]">{data?.dateOfBirth}</p>
                    <p className="font-normal text-[#FFFFFF]">{data?.residenceCity}</p>
                    <p className="mt-1 font-normal text-[#FFFFFF]">
                    {data?.education}
                    </p>
                    <p className="mt-1 font-normal text-[#FFFFFF]">
                     {data?.preferredRoles}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <h2 className="text-2xl md:text-3xl text-[#B7AAFF] mb-5 mt-6">
                {data?.title?.aboutMe}
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="text-sm md:text-lg text-[#FFFFFF] font-normal">
                    {data?.summary}
                  </p>
                </div>
              </div>
            </div>
      
        </>
      ) : (
        <>
          <h1 className="text-3xl md:text-5xl font-semibold">   {data?.title?.profile}</h1>
          <div className="flex flex-col md:flex-row gap-14">
            <div className="w-full  md:w-2/5">
              <h2 className="text-2xl md:text-3xl text-[#4338CA] mb-5 mt-6">
              {data?.title?.profile}
              </h2>
              <div className="flex gap-6 md:gap-0">
                  <div className="w-3/5 flex flex-col gap-2">
                    <p className="md:text-lg font-semibold ">
                    {data?.title?.dateOfBirth}
                    </p>
                    <p className="md:text-lg font-semibold t">
                    {data?.title?.residenceCity}
                    </p>
                    <p className="md:text-lg font-semibold ">
                    {data?.title?.education}
                    </p>
                    <p className=" mt-20 md:text-lg font-semibold md:mt-5 ">
                    {data?.title?.preferredRoles}
                    </p>
                  </div>
                  <div className="w-56 gap-[7px] flex flex-col md:gap-3">
                    <p className="font-normal ">{data?.dateOfBirth}</p>
                    <p className="font-normal ">{data?.residenceCity}</p>
                    <p className="mt-1 font-normal ">
                    {data?.education}
                    </p>
                    <p className="mt-1 font-normal ">
                     {data?.preferredRoles}
                    </p>
                  </div>
                </div>
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="text-2xl md:text-3xl text-[#4338CA] mb-5 mt-6">
              {data?.title?.aboutMe}
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-sm md:text-lg text-[#6B7280] font-normal">
                  {data?.summary}
                </p>
                <p className="text-lg text-[#6B7280] font-normal"> </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
