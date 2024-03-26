import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <div className={styles.logo}>
          <FaHome />
        </div>
      </Link>
      &copy; 2024 BrokerDeal . All Right reserved
    </footer>
  );
};

export default Footer;
