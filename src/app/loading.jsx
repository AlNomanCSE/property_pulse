import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
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
      <FadeLoader color="#124076" />
    </div>
  );
};

export default loading;
