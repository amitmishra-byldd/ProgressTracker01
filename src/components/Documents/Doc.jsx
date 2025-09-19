import React from "react";
import { RiFile3Fill } from "react-icons/ri";
import styles from "../Documents/Doc.module.css";
import { FaStar } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function Doc(props) {
  return (
    <div className={styles.fileSection}>
      <div className='flex justify-between'>
        <span className={styles.file}>
          <RiFile3Fill />
        </span>
        <div className={styles.label}>
          <span className="flex gap-[14px]">
            <FaStar  className="cursor-pointer"/>
            <HiOutlineDotsVertical className="cursor-pointer" />
          </span>
        </div>
      </div>

      <span className={styles.fileName} >{props.fileName}</span>
      <span className={styles.fileType}>PDF File</span>
      <span className={styles.fileSize}>{props.size}</span>
    </div>
  );
}
