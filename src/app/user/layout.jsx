import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import React from "react";

export default function UserLayout({ children }) {
  return (
    <div className="flex gap-[29px]">
      <Sidebar menuType="user" />
      <div className=" ">
        <Header />
        {children}
      </div>
    </div>
  );
}
