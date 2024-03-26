"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdCircleNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const path = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <Link href="/">
          <div className={styles.logo}>
            <FaHome />
          </div>
        </Link>
        <p>BrokerDeal</p>
      </div>
      <nav className={styles.navbar}>
        <Link href="/" className={path === "/" ? `${styles.activeLink}` : ``}>
          Home
        </Link>
        <Link
          href="/properties"
          className={path === "/properties" ? `${styles.activeLink}` : ``}
        >
          Properties
        </Link>
        {isProfileMenuOpen && (
          <Link
            href="/properties/add"
            className={path === "/properties/add" ? `${styles.activeLink}` : ``}
          >
            Add Property
          </Link>
        )}
      </nav>
      <div className={styles.registrationDiv}>
        <button>
          <FaGoogle /> Login to Register
        </button>
        {isLoggedIn && (
          <>
            <div className={styles.notification}>
              <MdCircleNotifications />
            </div>
            <div className={styles.logo}>
              <FaUserCircle />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
