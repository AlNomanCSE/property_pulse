import React from "react";
import PropertyCard from "@/components/PropertyCard";
import styles from "./page.module.css";
import { fetchProperties } from "@/utils/requests";

const Properties = async () => {
  const properties = await fetchProperties();
  return (
    <section className={styles.section}>
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </section>
  );
};

export default Properties;
