export default function HeadController() {
    return (
      <div className="w-7/12 mx-auto mt-3 flex gap-3  justify-end">
        <label className="relative inline-flex items-center cursor-pointer">
          <input className="sr-only peer" value="" type="checkbox" />
          <div className="peer rounded-full outline-none duration-100 after:duration-500 w-[55px] h-[24px] bg-[#3730A3] 
          after:absolute after:outline-none after:rounded-full after:h-[16px] after:w-[16px]
            after:bg-[#FFE86E] after:top-[4px] after:left-[4px] after:flex after:justify-center after:items-center 
            after:font-bold peer-checked:after:translate-x-[31px] peer-checked:after:border-white"></div>
        </label>
        
        <div className="text-[15px] font-bold text-[#777777]">DARK MODE | <span className="text-[#3730A3]">TÜRKÇE</span>'YE GEÇ </div>
      </div>
    );
}
