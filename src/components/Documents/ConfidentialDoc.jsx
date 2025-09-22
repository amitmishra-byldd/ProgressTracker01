'use client'
import React, { useState } from 'react'
import styles from '../Documents/ConfidentialDoc.module.css'
import Doc from './Doc'

const Documents = [
  {id:1, fileName:"Corporate Formation Document", size:"704 Mb"},
  {id:2, fileName:"Profit/Loss Statement", size:"704 Mb"},
  {id:3, fileName:"Corporate Formation Document", size:"704 Mb"},
  {id:4, fileName:"Profit/Loss Statement", size:"512 Mb"},
]

export default function ConfidentialDoc() {

  const [toggle, setToggle] = useState(false)

  return (
    <div className={styles.confidentialSection}>
      <span className={styles.title} >Confidential Documents</span>

      <div className={styles.docsGrid}>
        <div className={styles.gridHeadings}>
          <span className={styles.titledesc}>Request Permission to view confidential data ⓘ</span>
          <div className={styles.toggle}>
            <span className={styles.track}></span>
            <span onClick={() => setToggle(!toggle)} className={`${styles.circle} ${toggle ? styles.circleClick : styles.circleNotClick}`}></span>
          </div>
        </div>


        <span className='h-[150px] transition-all duration-300 ease-in-out mb-[20px]'>

        {toggle && <div className={`${styles.folderSection} flex justify-around flex-wrap gap-[20px]`}>
         {Documents.map((items) => (
          <li key={items.id} >
            <Doc fileName={items.fileName} size={items.size}/>
          </li>
         ))}
        </div>}

        </span>
      </div>
    </div>
  )
}
