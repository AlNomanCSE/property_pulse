import React from "react";
import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import styles from "./page.module.css"
const Properties = () => {
  return (
    <section className={styles.section}>
      {properties.map((property, index) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </section>
  );
};

export default Properties;
