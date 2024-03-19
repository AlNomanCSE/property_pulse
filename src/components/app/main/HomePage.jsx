import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import React from "react";
import styles from "./HomePage.module.css";
import Link from "next/link";

const HomePage = () => {
  const resentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
  return (
    <section className={styles.section}>
      <h2 style={{ textAlign: "center" }}>Recent Properties</h2>
      <div className={styles.section_div}>
        {resentProperties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
      <button>
        <Link href="/properties">View All Properties</Link>
      </button>
    </section>
  );
};

export default HomePage;
