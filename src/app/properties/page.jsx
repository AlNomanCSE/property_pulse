import React from "react";
import PropertyCard from "@/components/PropertyCard";
import styles from "./page.module.css";

async function fetchProperties() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
    const result = await res.json();
    if (!res.ok) throw new Error("Failed to Fetch data");
    return result;
  } catch (error) {
    console.log(error);
  }
}

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
