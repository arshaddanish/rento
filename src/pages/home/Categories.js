import { Link } from "react-router-dom";
import React from "react";

export default function Categories() {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="items">
        <Link to="/category/vehicles">
          <div className="car">
            <div></div>
            <h3>Cars</h3>
          </div>
        </Link>
        <Link to="/category/vehicles">
          <div className="house">
            <div></div>
            <h3>Apartments</h3>
          </div>
        </Link>
        <Link to="/category/vehicles">
          <div className="machine">
            <div></div>
            <h3>Machines</h3>
          </div>
        </Link>
        <Link to="/category/vehicles">
          <div className="house">
            <div></div>
            <h3>Boats</h3>
          </div>
        </Link>
        <Link to="/category/vehicles">
          <div className="machine">
            <div></div>
            <h3>Cars</h3>
          </div>
        </Link>
        <Link to="/category/vehicles">
          <div className="car">
            <div></div>
            <h3>Others</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
