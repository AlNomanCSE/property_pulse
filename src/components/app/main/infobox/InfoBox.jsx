import React from "react";
import styles from "../InfoBoxes.module.css";
import Link from "next/link";
const InfoBox = ({ title, bgColor, buttonInfo, children }) => {
  return (
    <div className={styles.div} style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <p>{children}</p>
      <Link href={buttonInfo.link}>
        <button style={{ backgroundColor: buttonInfo.bgColor }}>
          {buttonInfo.text}
        </button>
      </Link>
    </div>
  );
};

export default InfoBox;
