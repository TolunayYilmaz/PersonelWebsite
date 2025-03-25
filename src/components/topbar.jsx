import Button from "./button";

export default function TopBar() {
  return (
    <div className="w-7/12 mx-auto  flex gap-3  justify-between items-center">
      <div className="w-[62px] h-[62px] border-2 border-none bg-[#EEEBFF] rounded-full flex items-center justify-center">
        <span className="text-3xl font-bold transform rotate-[30deg] text-[#7B61FF]">
          T
        </span>
      </div>
      <div
        className="flex gap-2
      "
      >
        <Button textColor={"#6B7280"} buttonName={"Skills"} />
        <Button textColor={"#6B7280"} buttonName={"Projects"} />
        <Button
          textColor={"#3730A3"}
          buttonName={"Hire Me"}
          borderColor={"#3730A3"}
        />
      </div>
    </div>
  );
}
