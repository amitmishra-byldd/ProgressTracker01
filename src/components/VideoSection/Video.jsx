'use client'

import React, { useState } from "react";
import styles from "../VideoSection/Video.module.css";
import { IoPlayOutline } from "react-icons/io5";
import { TiMediaPauseOutline } from "react-icons/ti";

export default function Video() {
  const [isPlay, setIsPlay] = useState(true);

  return (
    <div className={styles.videoSection}>
      <div className={styles.video}></div>
      <span className={styles.videoPlay} onClick={() => setIsPlay(!isPlay)}>
        {isPlay ? <IoPlayOutline /> : <TiMediaPauseOutline />}
      </span>
    </div>
  );
}
