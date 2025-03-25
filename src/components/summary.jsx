import photo from "../images/photo.jpg";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import Button from "./button";

export default function Summary() {
  return (
    <>
      <div className="w-7/12 h-1/2  mx-auto flex justify-between">
        <div className="flex flex-col justify-between w-[596px]">
          <div className="flex">
            <div className="border-b-[1px] mb-3 w-[102px] border-solid border-[#3730A3]"></div>
            <p className="ml-3 text-xl font-medium text-[#3730A3]">Tolunay Yılmaz</p>
          </div>

          <h1 className="text-7xl font-bold">Creative thinker Minimalism lover</h1>
          <p>
            Hi, I’m Tolunay. I’m a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let’s shake hands with me.
          </p>
          <div className="flex gap-3">
            <Button textColor={"white"} buttonName={"Hire Me"} bgColor={"#3730A3"} borderColor={"#3730A3"}/>
            <Button textColor={"#3730A3"} buttonName={"Github"} iconName={faGithub} borderColor={"#3730A3"}/>
            <Button textColor={"#3730A3"} buttonName={"Linkedin"} iconName={faLinkedinIn} borderColor={"#3730A3"}/>
          </div>
        </div>

        <img className="w-[375px] h-[375px] object-fit mt-auto  mr-2 rounded-xl" src={photo} />
      </div>
    </>
  );
}
