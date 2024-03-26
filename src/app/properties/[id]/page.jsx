"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { fetchProperty } from "@/utils/requests";
import styles from "./page.module.css";
import SingleProperty from "@/components/SingleProperty";
const PropertyId = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPropertiData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error Fecthing property ...", error);
      } finally {
        setLoading(false);
      }
    };
    if (property === null) fetchPropertiData();
  }, [id, property]);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={styles.section}
        >
          <HashLoader color="#124076" />
        </div>
      ) : property ? (
        <SingleProperty property={property} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={styles.section}
        >
          <h2>No property found</h2>
        </div>
      )}
    </>
  );
};

export default PropertyId;
