import React from 'react'
import styles from './Sidebar.module.css'
import Link from 'next/link'
import { MdOutlineDashboard } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { PiHandArrowUp } from "react-icons/pi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";




const menuItems = [
  {href:"#", icon:<MdOutlineDashboard />, label:"Dashboard"},
  {href:"#", icon:<CiBoxList  />, label:"Listing"},
  {href:"#", icon:<PiHandArrowUp  />, label:"Inbox"},
  {href:"#", icon:<MdOutlineShoppingCartCheckout  />, label:"Profile"},
]

const userMenuItems = [
  {href:"#", icon:<MdOutlineDashboard />, label:"User Dashboard"},
  {href:"#", icon:<CiBoxList  />, label:"Listing"},
  {href:"#", icon:<PiHandArrowUp  />, label:"Inbox"},
  {href:"#", icon:<MdOutlineShoppingCartCheckout  />, label:"Profile"},
]

const adminMenuItems = [
  {href:"#", icon:<MdOutlineDashboard />, label:"Admin Dashboard"},
  {href:"#", icon:<CiBoxList  />, label:"Listing"},
  {href:"#", icon:<PiHandArrowUp  />, label:"Inbox"},
  {href:"#", icon:<MdOutlineShoppingCartCheckout  />, label:"Profile"},
]


export default function Sidebar({menuType}) {

  const menus  = menuType === 'user'? userMenuItems: menuType === 'admin' ? adminMenuItems : menuItems;

  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarItems}  >
        
      {menus.map((items, index) => (
        <li key={index} className={styles.listItems}>
          <Link href={items.href} className={styles.link}>
            <span className={styles.linkIcon}>{items.icon}</span>
            <span>{items.label}</span>
          </Link>
        </li>
      ))}

      </ul>
    </div>
  )
}
