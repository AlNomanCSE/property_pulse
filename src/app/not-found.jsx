import React from "react";
import { BiSolidError } from "react-icons/bi";

import styles from "./not-found.module.css";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <section className={styles.notFoundSection}>
      <div>
        <p>
          <BiSolidError />
        </p>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <button>
          <Link href="/">Go home</Link>
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;
