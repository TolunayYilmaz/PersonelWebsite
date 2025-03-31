import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

export default function Button({
  iconName,
  buttonName,
  bgColor,
  textColor,
  borderColor,
  location

}) {
  return (
    <>
    <nav>
    <Link   to={location} smooth={true} duration={500}
      className={`text-sm gap-x-1 h-[26px] w-[80px] sm:text-[18px] sm:h-[52px] sm:w-[132px] flex hover:cursor-pointer hover:shadow-slate-500 hover:shadow-md items-center justify-center rounded-md sm:gap-x-2 ${
        borderColor ? `border-[1px] border-[${borderColor}]` : ""
      }`}
      style={{ backgroundColor: bgColor, color: textColor }}
    
    >
      {iconName && (
        <FontAwesomeIcon className={`text-sm text-[${textColor}]  sm:text-2xl`} icon={iconName} />
      )}
      {buttonName}
    </Link>
    </nav>
    </>

  );
}
