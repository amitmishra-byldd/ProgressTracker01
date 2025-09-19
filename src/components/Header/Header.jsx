import React from "react";
import styles from "../Header/Header.module.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import Video from "../VideoSection/Video";
import PublicInfromation from "../PublicInformation/PublicInfromation";
import ConfidentialDoc from "../Documents/ConfidentialDoc";
// import Link from "next/link";

const ProfileMenu = [
  { id: 1, icon: <IoNotificationsOutline />, label: "" },
  { id: 2, icon: <FiMessageSquare />, label: "16" },
];



export default function Header() {
  return (
    <div className={styles.headerSection}>
      <div className={styles.header}>
        <div className={styles.companyTitle}>
          <span>Purple Seed LLC</span>
          <p className={styles.titleTag}>added 4 month ago</p>
        </div>

        <div className={styles.listItems}>
          {ProfileMenu.map((items) => (
            <li key={items.id} className={styles.profileList}>
              <span className={`${styles.icon} text-[23px] pt-[6px]`}>
                {items.icon}
              </span>
              <p className={styles.label}>{items.label}</p>
            </li>
          ))}
        </div>
      </div>

      <Video />
      <PublicInfromation />
      <ConfidentialDoc />
    </div>
  );
}
