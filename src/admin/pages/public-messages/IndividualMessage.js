import React, { useState } from "react";
import "./publicMessages.scss";
import { Paper } from "@mui/material";

const IndividualMessage = ({ item }) => {
  const [readMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((prevState) => !prevState);
  };
  return (
    <div>
      <Paper elevation={1} className="paper">
        <div>
          <div className="sender-details">
            {/* {event.name}{event.phone}{event.email}{event.subject}  */}
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
          <p>
            {readMore ? item.message : item.message.substring(0, 300) + "..."}
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
