import React from "react";


function Items(props) {
  return (
    <div className="flex gap-[8px] items-start text-[16px] md:text-[18px] lg:text-[18px]">
      <span className="text-[20px] md:text-[24px] lg:text-[24px]">
        {props.icon}
      </span>
      <div className="">
        <span>{props.label}</span>
        <span>{props.value}</span>
      </div>
    </div>
  );
}

export default Items;
