import React from "react";
import "./item.scss";
import bmw2 from "../../assets/images/bmw2.jpg";
import seller from "../../assets/images/seller.png";

export default function Item() {
  return (
    <div className="rental-item">
      <h3>Audi 18</h3>
      <div className="main-dtl">
        <p>Thana, Kannur</p>
        <p>
          <span>Rs 1000</span> / day
        </p>
      </div>
      <div className="dtl-container">
        <div className="imgs-div">
          <img className="main-img" src={bmw2} alt="" />
          <div className="extra-imgs">
            <img src={bmw2} alt="" />
            <img src={bmw2} alt="" />
            <img src={bmw2} alt="" />
            <img src={bmw2} alt="" />
          </div>
          <div className="desc">
            <h4>Description</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              ad ab quasi reiciendis perspiciatis, modi ullam voluptates fugiat
              qui soluta nisi at aut veritatis consequuntur neque eius ipsum
              obcaecati, doloribus nihil cumque repudiandae blanditiis numquam
              delectus? Vel exercitationem cumque ullam minus eius repellat hic
              optio dolor reiciendis nihil delectus dicta, sunt eaque iste?
              Libero commodi laborum consectetur sit dignissimos deleniti
              aliquam odit maiores eligendi perferendis dolorum harum, fugit
              pariatur sunt. Corrupti architecto tempora alias facilis culpa
              earum id obcaecati. Sint cupiditate maiores quas fugit? Provident
              minus, sapiente vitae vero quibusdam tenetur. Dolorum deserunt
              magnam, atque error ea autem quia dolorem!
            </p>
          </div>
        </div>

        <div className="seller-div">
          <img src={seller} alt="" />
          <p className="name">John Samuel</p>
          <p>Location: Kannur, Kerala</p>
          <p>Phone: 12345667890</p>
          <p>Email: abc@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
