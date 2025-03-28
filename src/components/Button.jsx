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
      className={`h-[52px] w-[132px] flex hover:cursor-pointer items-center justify-center rounded-md gap-x-2 ${
        borderColor ? `border-[1px] border-[${borderColor}]` : ""
      }`}
      style={{ backgroundColor: bgColor, color: textColor }}
    
    >
      {iconName && (
        <FontAwesomeIcon className={`text-[${textColor}]  text-2xl`} icon={iconName} />
      )}
      {buttonName}
    </Link>
    </nav>
    </>

  );
}
