import React from "react";
import mer4 from "../../assets/images/news/mer4.jpg";

function Item() {
  return (
    <div className="item">
      <div className="img-div">
        <img src={mer4} alt="" />
        <div className="date">
          <p>19 Oct</p>
        </div>
      </div>
      <div className="dtl">
        <p>Car Lifestyle</p>
        <h3>How to use Map in Audi A6 luxury?</h3>
      </div>
    </div>
  );
}

export default function News() {
  return (
    <div className="news">
      <div className="title-div">
        <h2>News & Articles</h2>
        <button>View All</button>
      </div>
      <div className="items">
        {Item()}
        {Item()}
        {Item()}
      </div>
    </div>
  );
}
