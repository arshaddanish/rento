import React, { useState } from "react";
import "./item.scss";
import bmw2 from "../../assets/images/bmw2.jpg";
import seller from "../../assets/images/seller.png";
import Button from "@mui/material/Button";
import SimpleImageSlider from "react-simple-image-slider";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import useResizeObserver from "use-resize-observer";

const imagesSlider = [
  { url: bmw2 },
  { url: bmw2 },
  { url: bmw2 },
  { url: bmw2 },
];
const imagesLightBox = [bmw2, bmw2, seller];

export default function Item() {
  const { ref, width = 1, height = 1 } = useResizeObserver();

  let [photoIndex, setPhotoIndex] = useState(0);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rental-item">
      <div className="item-div">
        <h3>Audi 18</h3>
        <div className="main-dtl">
          <p>Thana, Kannur</p>
          <p>
            <span>Rs 1000</span> / day
          </p>
        </div>
        <div className="main-img" ref={ref} onClick={() => setIsOpen(true)}>
          <SimpleImageSlider
            width={width}
            height={height}
            images={imagesSlider}
            showBullets={true}
            showNavs={true}
            autoPlay={!isOpen}
            style={{"z-index": 999999}}
          />
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={imagesLightBox[photoIndex]}
            nextSrc={imagesLightBox[(photoIndex + 1) % imagesLightBox.length]}
            prevSrc={
              imagesLightBox[
                (photoIndex + imagesLightBox.length - 1) % imagesLightBox.length
              ]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + imagesLightBox.length - 1) % imagesLightBox.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % imagesLightBox.length)
            }
            style={{"z-index": "9999999999"}}
          />
        )}
        <div className="desc">
          <h4>Description</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            ad ab quasi reiciendis perspiciatis, modi ullam voluptates fugiat
            qui soluta nisi at aut veritatis consequuntur neque eius ipsum
            obcaecati, doloribus nihil cumque repudiandae blanditiis numquam
            delectus? Vel exercitationem cumque ullam minus eius repellat hic
            optio dolor reiciendis nihil delectus dicta, sunt eaque iste? Libero
            commodi laborum consectetur sit dignissimos deleniti aliquam odit
            maiores eligendi perferendis dolorum harum, fugit pariatur sunt.
            Corrupti architecto tempora alias facilis culpa earum id obcaecati.
            Sint cupiditate maiores quas fugit? Provident minus, sapiente vitae
            vero quibusdam tenetur. Dolorum deserunt magnam, atque error ea
            autem quia dolorem!
          </p>
        </div>
        <div className="book-btn">
          <Button variant="contained" fullWidth style={{ height: "50px" }}>
            Book Item
          </Button>
        </div>
      </div>

      <div className="seller-div">
        <h3>Seller Info</h3>
        <img src={seller} alt="" />
        <p className="name">John Samuel</p>
        <p>Location: Kannur, Kerala</p>
        <p>Phone: 12345667890</p>
        <p>Email: abc@gmail.com</p>
      </div>
    </div>
  );
}
