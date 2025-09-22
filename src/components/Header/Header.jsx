'use client'
import React from "react";
import styles from "../Header/Header.module.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import Video from "../VideoSection/Video";
import PublicInfromation from "../PublicInformation/PublicInfromation";
import ConfidentialDoc from "../Documents/ConfidentialDoc";
import { GiHamburgerMenu } from "react-icons/gi";

// import Link from "next/link";

const ProfileMenu = [
  { id: 1, icon: <IoNotificationsOutline />},
  { id: 2, icon: <FiMessageSquare />},
];



export default function Header({toggleSidebar}) {
  return (
    <div className={styles.headerSection}>
      <div className={styles.header}>
        <div className={styles.companyTitle}>
          <span>Purple Seed LLC</span>
          <p className={styles.titleTag}>added 4 month ago</p>
        </div>

        <div className={styles.listStyles}>
          <ul className={styles.listItems}>
          {ProfileMenu.map((items) => (
            <li key={items.id} className={styles.profileList}>
              <span className={styles.icon}>
                {items.icon}
              </span>
            </li>
          ))}
        </ul>
        <span className={styles.toggleSidebar}  onClick={toggleSidebar}><GiHamburgerMenu /></span>
        </div>

      </div>



      {/* <Video />
      <PublicInfromation />
      <ConfidentialDoc /> */}
    </div>
  );
}
