import React from "react";
import styles from "./Hero.module.css"
const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <h1>Find The Perfect Rental</h1>
      <p>Descover the perfect property that suits your needs</p>
      <div>
        <input type="text" name="text" id="text" placeholder="Enter Location (City, State, Zip, etc)"/>
        <select name="property-type" id="property-type">
          <option value="volvo">All</option>
          <option value="saab">Apertment</option>
          <option value="mercedes">Studio</option>
          <option value="audi">Condo</option>
          <option value="audi">House</option>
          <option value="audi">Cabin or Cottage</option>
          <option value="audi">Loft</option>
          <option value="audi">Room</option>
          <option value="audi">Other</option>
        </select>
        <button>Search</button>
      </div>
    </section>
  );
};

export default Hero;
