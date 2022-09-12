import React, { useEffect, useState } from "react";
import "./item.scss";
import seller from "../../assets/images/seller.png";
import Button from "@mui/material/Button";
import SimpleImageSlider from "react-simple-image-slider";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import useResizeObserver from "use-resize-observer";
import apis from "../../apis";
import { useParams } from "react-router-dom";
import { imageUrl } from "../../services/imageUrl";

export default function Item() {
  const { ref, width = 1, height = 1 } = useResizeObserver();
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  let [item, setItem] = useState({});
  let [images, setImages] = useState([]);
  let fetchItem = async () => {
    let { data } = await apis.get("items/" + id);
    console.log(data);
    setItem(data);
    let images = [data.img, ...data.extraImgs];
    console.log(images);
    images = images.map((item) => imageUrl(item));
    setImages(images);
  };

  let [photoIndex, setPhotoIndex] = useState(0);
  let [isOpen, setIsOpen] = useState(false);

  if (!item._id) {
    return null;
  }
  return (
    <div className="rental-item">
      <div className="item-div">
        <h3>{item.name}</h3>
        <div className="main-img" ref={ref} onClick={() => setIsOpen(true)}>
          <SimpleImageSlider
            width={width}
            height={height}
            images={images}
            showBullets={true}
            autoPlay={true}
          />
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
        <div className="basic-dtl">
          <p>Location:&nbsp; {item.location}</p>
          <p>
            Price:&nbsp; Rs. <span>{item.price}</span> / day
          </p>
          <p>Manufacture Year:&nbsp; {item.manufactureYear}</p>
          <p>Type:&nbsp; {item.type}</p>
        </div>
        <div className="desc">
          <h4>Description</h4>
          <p>{item.description}</p>
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
