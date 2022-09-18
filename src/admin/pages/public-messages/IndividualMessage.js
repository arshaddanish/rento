import React, { useState } from "react";
import "./publicMessages.scss";
import { Paper } from "@mui/material";
import { FaTrash } from "react-icons/fa";
import apis from "../../../apis";
import { httpHeaders } from "../../../services/httpHeaders";

const IndividualMessage = ({ item, onDeleteMsg }) => {
  const [readMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((prevState) => !prevState);
  };

  let onDelete = async (id) => {
    await apis.delete("message/" + id, httpHeaders("admin"));
    onDeleteMsg(id);
  };

  return (
    <div>
      <Paper elevation={1} className="paper">
        <FaTrash className="del-icon" onClick={() => onDelete(item._id)} />
        <div>
          <div className="sender-details">
            {/* {event.name}{event.phone}{event.email}{event.subject}  */}
            <p className="date">{item.createdAt.substring(0, 10)}</p>
            <div>
              <span className="message-bold">Name: </span>
              {item.name}
            </div>
            <div>
              <span className="message-bold">Phone No: </span>
              {item.phone}
            </div>
            <div>
              <span className="message-bold">Email: </span>
              {item.email}
            </div>
            <div>
              <h3 className="msg-subject">{item.subject}</h3>
            </div>
          </div>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {readMore ? item.message : item.message.substring(0, 100) + "..."}
            <button className="read-more-btn" onClick={toggleBtn}>
              {readMore ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </Paper>
    </div>
  );
};

export default IndividualMessage;
