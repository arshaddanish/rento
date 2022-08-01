import React from "react";
import audi from "../../assets/images/vehicles/audi.jpg";

function Item() {
  return (
    <div className="item">
      <div className="img-div">
        <img src={audi} alt="" />
      </div>
      <div className="dtl-box">
        <h3>Audi 19</h3>
        <div className="dtl">
          <p>Kannur, Thana.</p>
          <p>
            <span>Rs. 1000</span> / day
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Items() {
  return (
    <div className="category-items">
      <h2>Vehicles</h2>
      <div className="items">
        {Item()}
        {Item()}
        {Item()}
        {Item()}
        {Item()}
        {Item()}
      </div>
    </div>
  );
}
