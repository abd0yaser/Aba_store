import React from "react";
import Store from "./Store";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="https://wallpaperbat.com/img/455751-harvey-nichols-opens-its-new-look-menswear-destination-retail-store-layout-retail-design-retail-store-design.jpg"
          className="card-img"
          alt="background"
        />
        <div className="card-img-overlay ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
            <p className="card-text lead fs-2">
            CHECK OUT ALL THE STORE

            </p>
          </div>
        </div>
      </div>
      <Store/>
    </div>
  );
}
