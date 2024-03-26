import React from "react";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { LuScale3D } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { IoLocation } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import styles from "./SingleProperty.module.css";
import Image from "next/image";
import Link from "next/link";
const SingleProperty = ({ property }) => {
  return (
    <section className={styles.section}>
      <article className={styles.article_1}>
        <Image
          src={`/properties/${property.images[0]}`}
          width={0}
          height={0}
          sizes="100vw"
          alt="property image"
          className={styles.image}
        ></Image>
        <div>
          <Link href="/properties">
            <p>
              <FaLongArrowAltLeft />
              Back to Properties
            </p>
          </Link>
        </div>
      </article>
      <article className={styles.article_2}>
        <p>{property.type}</p>
        <h3>{property.name}</h3>
        <p>
          <IoLocation /> {property.location.street}, {property.location.city}
          {property.location.state}
        </p>
        <p>Reats & Options</p>
        <div>
          <div>
            <p>Nightly</p>
            {property.rates.nightly ? (
              `$${property.rates.nightly}`
            ) : (
              <RxCross2 className={styles.cross} />
            )}
          </div>
          <div>
            <p>Weekly</p>
            {property.rates.weekly ? (
              `$${property.rates.weekly}`
            ) : (
              <RxCross2 className={styles.cross} />
            )}
          </div>
          <div>
            <p>Monthly</p>
            {property.rates.monthly ? (
              `$${property.rates.monthly}`
            ) : (
              <RxCross2 className={styles.cross} />
            )}
          </div>
        </div>
      </article>
      <article className={styles.article_3}>
        <h4>Description & Details</h4>
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
        <p>{property.description}</p>
      </article>
      <article className={styles.article_4}>
        <h4>Amenities</h4>
        <ul className={styles.amenities}>
          {property.amenities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </article>
      <aside className={styles.aside}>
        <button>Bookmark Property</button>
        <button>Share Property</button>
        <form action="" className={styles.form}>
          <h4>Contact Property Manager</h4>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" id="message" />
          </div>
          <button>Send</button>
        </form>
      </aside>
    </section>
  );
};

export default SingleProperty;
