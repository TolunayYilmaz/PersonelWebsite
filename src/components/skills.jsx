import ItemSkill from "./itemSkill";

export default function Skills() {
  return (
<div className="w-7/12 mx-auto flex flex-col justify-start gap-3">
  <h1 className="text-5xl">Skills</h1>
  <div className="h-40 w-full flex  overflow-x-auto ">
    <ItemSkill />
    <ItemSkill />
    <ItemSkill />
    <ItemSkill /> 
    <ItemSkill />
  </div>
</div>


  );
}
