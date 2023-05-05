import React from "react";
import HashLoader from "react-spinners/HashLoader";

export default function PreLoader() {
  return (
    <div className="sweet-loading">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <div>
          <HashLoader color="#51459d" />
        </div>
      </div>
    </div>
  );
}
