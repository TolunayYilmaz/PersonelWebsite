import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Button({ iconName, buttonName,bgColor,textColor }) {
  return (
    <>
      
        <div className={`border-[1px] h-[52px] w-[132px] flex items-center justify-center rounded-md gap-x-2 border-[#3730A3] bg-[${bgColor}]`}>
             <FontAwesomeIcon
            className="text-[#3730A3] text-2xl"
            icon={iconName}
          />
          <button className={`text-[${textColor}] font-medium"`}>{buttonName}</button>
        </div>
      
    </>
  );
}
