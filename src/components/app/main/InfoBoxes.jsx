import React from "react";
import styles from "./InfoBoxes.module.css";
import InfoBox from "./infobox/InfoBox";
const InfoBoxes = () => {
  return (
    <section className={styles.infoSection}>
      <InfoBox
        title="For Renters"
        buttonInfo={{
          text: "Browse Properties",
          link: "/properties",
          bgColor: "black",
        }}
        bgColor="aliceblue"
      >
        Find your dream rental property , Bookmark properties and contact
        owners.
      </InfoBox>
      <InfoBox
        title="For Property Owners"
        buttonInfo={{
          text: "Add Property",
          link: "/properties/add",
          bgColor: "#40A2E3",
        }}
        bgColor="#BBE2EC"
      >
        List your properties and reach potential tenants. Rent as an airbnb or
        long trem
      </InfoBox>
    </section>
  );
};

export default InfoBoxes;
