import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Button({
  iconName,
  buttonName,
  bgColor,
  textColor,
  borderColor

}) {
  return (
    <Link
      className={`h-[52px] w-[132px] flex items-center justify-center rounded-md gap-x-2 ${
        borderColor ? `border-[1px] border-[${borderColor}]` : ""
      }`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {iconName && (
        <FontAwesomeIcon className={`text-[${textColor}]  text-2xl`} icon={iconName} />
      )}
      {buttonName}
    </Link>
  );
}
