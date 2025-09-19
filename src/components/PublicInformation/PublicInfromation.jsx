import React from "react";
import styles from "../PublicInformation/PublicInformation.module.css";
import InfoSection from "../InfoSection/InfoSection";
import { GoHome } from "react-icons/go";
import Items from "../Items/Items";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";




const itemsInfo = [
  {
    id: 1,
    icon: <GoHome />,
    label: "City, State",
    value: "Bellevue, Washington",
  },

  {
    id: 2,
    icon: <IoLocationOutline />,
    label: "Address",
    value: "14 Broadway Avenue East",
  },

  {
    id: 3,
    icon: <MdOutlinePriceChange />,
    label: "Ask Price",
    value: "$200,000",
  },
];

const overviewItems = [
  {
    id: 1,
    icon: <IoPeopleSharp />,
    label: "Company Size",
    value: "24 employees",
  },

  {
    id: 2,
    icon: <FaDollarSign />,
    label: "Revenue",
    value: "$ 500,000",
  },

  {
    id: 3,
    icon: <IoIosTrendingUp />,
    label: "Profit",
    value: "$ 500,000",
  },

  {
    id: 4,
    icon: <FaRegCalendarAlt />,
    label: "Ask Price",
    value: "$200,000",
  },

  {
    id: 5,
    icon: <SiHomeassistantcommunitystore  />,
    label: "Industry",
    value: "Marketing",
  },

  {
    id: 6,
    icon: <FaPhoneAlt  />,
    label: "Contact",
    value: "+1 (949) 459 333",
  },

  {
    id: 7,
    icon: <LiaIndustrySolid  />,
    label: "Business Model",
    value: "B2B",
  },
];

const marketAnalysis = [
  {
    id: 1,
    icon: <GoHome />,
    label: "Competitor",
    value: "ABC Ltd",
  },

  {
    id: 2,
    icon: <IoLocationOutline />,
    label: "Competitor(s) Website(s)",
    value: "www.abc.com",
  },

  {
    id: 3,
    icon: <MdOutlinePriceChange />,
    label: "Estimated Growth Rate",
    value: "8%",
  },

  {
    id: 4,
    icon: <MdOutlinePriceChange />,
    label: "Growth Opportunity",
    value: "Lorem ipsum dolor sit amet,",
  },
];

const businessDetails =[
    {
    id: 1,
    icon: <GoHome />,
    label: "City, State",
    value: "Bellevue, Washington",
  },

  {
    id: 2,
    icon: <IoLocationOutline />,
    label: "Address",
    value: "14 Broadway Avenue East",
  },

]



export default function PublicInfromation() {
  return (
    <div className={styles.publicInfromation}>
      <span className={styles.title}>Public Information</span>

      <div className={styles.infoSection}>
        {/**
         * About the business section
         *  */}
        <div className={styles.aboutBussiness}>
          {/* Passing data in InfoSection Component */}
          <InfoSection title="About the business" showParagraph={true} />

          <div className="grid grid-cols-3 gap-[25px]">
            {/* Passing data in Items Component */}
            {itemsInfo.map((items) => (
              <li key={items.id}>
                <Items
                  icon={items.icon}
                  label={items.label}
                  value={items.value}
                />
              </li>
            ))}
          </div>
        </div>

        {/**
         * Justification for ask price section
         */}

        <div className={styles.aboutBussiness}>
          {/* Passing data in InfoSection Component */}
          <InfoSection
            title="Justification for ask price"
            showParagraph={true}
          />
        </div>


        {/* 
        * Company Overview
        */}
        <div className={styles.aboutBussiness}>
          {/* Passing data in InfoSection Component */}
          <InfoSection title="Company Overview" showParagraph={false} />


          <div className="grid grid-cols-4 gap-[25px]">
            {/* Passing data in Items Component */}
            {overviewItems.map((items) => (
              <li key={items.id}>
                <Items
                  icon={items.icon}
                  label={items.label}
                  value={items.value}
                />
              </li>
            ))}
          </div>

        </div>

        {/* 
        * Market Analysis
        */}
        <div className='py-[25px]'>
          {/* Passing data in InfoSection Component */}
          <InfoSection title="Market Analysis" showParagraph={false} />


          <div className="grid grid-cols-4 gap-[25px]">
            {/* Passing data in Items Component */}
            {businessDetails.map((items) => (
              <li key={items.id}>
                <Items
                  icon={items.icon}
                  label={items.label}
                  value={items.value}
                />
              </li>
            ))}
          </div>

        </div>


        {/* 
        * Business Details
        */}
        <div className={styles.aboutBussiness}>
          {/* Passing data in InfoSection Component */}
          <InfoSection title="Business Details" showParagraph={false} />


          <div className="grid grid-cols-4 gap-[25px]">
            {/* Passing data in Items Component */}
            {marketAnalysis.map((items) => (
              <li key={items.id}>
                <Items
                  icon={items.icon}
                  label={items.label}
                  value={items.value}
                />
              </li>
            ))}
          </div>

        </div>



      </div>
    </div>
  );
}
