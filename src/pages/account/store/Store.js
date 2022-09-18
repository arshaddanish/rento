import React, { useEffect, useState } from "react";
import audi from "../../../assets/images/vehicles/audi.jpg";
import { useNavigate, useParams } from "react-router-dom";
import "./store.scss";
import { Button } from "@mui/material";
import apis from "../../../apis";
import { httpHeaders } from "../../../services/httpHeaders";
import { imageUrl } from "../../../services/imageUrl";
import MuiDialog from "../../../components/dialog/MuiDialog";

let dialog = {
  title: "Alert!",
  content:
    "Are you sure you want to delete the item? The associated bookings will also be deleted.",
  btnText: "Yes",
  btnColor: "#e53e3e",
};

export default function Store() {
  let navigate = useNavigate();
  let [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  let fetchItems = async () => {
    let { data } = await apis.get("seller-items", httpHeaders("user"));
    setItems(data);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let [deleteId, setDeleteId] = useState(null);
  let onDelete = async () => {
    handleClose();
    await apis.delete("items/" + deleteId, httpHeaders("user"));
    setItems(items.filter((item) => item._id !== deleteId));
  };
  let onDeleteBtnClick = (id) => {
    setDeleteId(id);
    handleClickOpen();
  };

  function Item({ item }) {
    return (
      <div className="item">
        <div
          className="img-div"
          onClick={() => {
            navigate(`/categories/${item.category}/${item._id}`);
          }}
        >
          <img src={imageUrl(item.img)} alt="" />
        </div>
        <div className="dtl-box">
          <h3>{item.name}</h3>
          <div className="dtl">
            <p>{item.location}</p>
            <p>
              <span>Rs. {item.price}</span> / day
            </p>
          </div>
          <div className="item-btns">
            <Button
              variant="contained"
              onClick={() => navigate("/account/edit-item/" + item._id)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              style={{ background: "#e53e3e" }}
              onClick={() => onDeleteBtnClick(item._id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="store">
        <div className="title-div">
          <h2>Store</h2>
        </div>
        <div className="items">
          {items.map((item) => {
            return <Item item={item} key={item._id} />;
          })}
        </div>
      </div>
      <MuiDialog
        open={open}
        handleClose={handleClose}
        onDelete={onDelete}
        dialog={dialog}
      />
    </>
  );
}
