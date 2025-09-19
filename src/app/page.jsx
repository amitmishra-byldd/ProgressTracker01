"use client"

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";




export default function Home() {
  return (
   <div className="flex gap-[29px]">
    <Sidebar />
    <Header />
   </div>
  );
}
