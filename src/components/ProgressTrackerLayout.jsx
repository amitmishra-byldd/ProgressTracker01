"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./ProgressTrackerLayout.module.css";
import Video from "./VideoSection/Video";

import PublicInfromation from "./PublicInformation/PublicInfromation";
import ConfidentialDoc from "./Documents/ConfidentialDoc";
// import { SiD } from 'react-icons/si'

export default function ProgressTrackerLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  useEffect(() => {
   const handleResize = () => {
    if(window.innerWidth>= 1024){
      setIsSidebarOpen(true)
    }
    else { 
      setIsSidebarOpen(false)
    }
   }
  
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize)
}, []);


  return (
    <div className={styles.layout}>

      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
      {isSidebarOpen && <Sidebar />}

      <main className={styles.content}>
        <Video />
        <PublicInfromation />
        <ConfidentialDoc />
      </main>
    </div>
  );
}
