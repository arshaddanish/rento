import { Link } from "react-router-dom";
import React from "react";

export default function Categories() {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="items">
        <Link to="/categories/vehicles">
          <div className="car">
            <div></div>
            <h3>Vehicles</h3>
          </div>
        </Link>
        <Link to="/categories/apartments">
          <div className="house">
            <div></div>
            <h3>Apartments</h3>
          </div>
        </Link>
        <Link to="/categories/machines">
          <div className="machine">
            <div></div>
            <h3>Machines</h3>
          </div>
        </Link>
        <Link to="/categories/tools">
          <div className="tool">
            <div></div>
            <h3>Tools</h3>
          </div>
        </Link>
        <Link to="/categories/offices">
          <div className="office">
            <div></div>
            <h3>Offices</h3>
          </div>
        </Link>
        <Link to="/categories/boats">
          <div className="boat">
            <div></div>
            <h3>Boats</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
