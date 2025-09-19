import React from "react";


function Items(props) {
  return (
    <div className="flex gap-[4px]">
      <span className="text-[24px]">
        {props.icon}
      </span>
      <div className="flex flex-col">
        <span>{props.label}</span>
        <span>{props.value}</span>
      </div>
    </div>
  );
}

export default Items;
