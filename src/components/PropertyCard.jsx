import React from "react";
import styles from "./PropertyCard.module.css";
import Image from "next/image";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { LuScale3D } from "react-icons/lu";
import { FaMoneyBill } from "react-icons/fa";
import Link from "next/link";
const PropertyCard = ({ property }) => {
  return (
    <div className={styles.card}>
      <Image
        src={`/properties/${property.images[0]}`}
        width={0}
        height={0}
        sizes="100vw"
        alt="image"
        style={{ width: "100%", height: "auto" }}
      />
      <div className={styles.cardDetails}>
        <p>{property.type}</p>
        <h3>{property.name}</h3>
        <div className={styles.propertyDetals}>
          <div className={styles.rbs}>
            <p>
              <FaBed />
              <span>{property.beds}</span>Beds
            </p>
            <p>
              <FaBath />
              <span>{property.baths}</span>Baths
            </p>
            <p>
              <LuScale3D />
              <span>{property.square_feet}</span>sqft
            </p>
          </div>
          <div className={styles.time}>
            {property.rates.nightly && (
              <p>
                <FaMoneyBill />
                {property.rates["nightly"]}Nightly
              </p>
            )}
            {property.rates.weekly && (
              <p>
                <FaMoneyBill />
                {property.rates["weekly"]}Weekly
              </p>
            )}
            {property.rates.monthly && (
              <p>
                <FaMoneyBill />
                {property.rates["monthly"]}Monthly
              </p>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <div>
          <p>{property.location.city}</p>
          <p>{property.location.state}</p>
        </div>
        <button>
          <Link href={`/properties/${property._id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
