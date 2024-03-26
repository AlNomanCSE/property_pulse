"use client";

import React from "react";
import HashLoader from "react-spinners/HashLoader";
const loading = () => {
  return (
    <div
      style={{
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HashLoader color="#124076" />
    </div>
  );
};

export default loading;
