import React, { useEffect } from "react";
import "./publicMessages.scss";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import IndividualMessage from "./IndividualMessage";
import apis from "../../../apis";
import { httpHeaders } from "../../../services/httpHeaders";

export default function PublicMessages() {
  let [msgs, setMsgs] = useState([]);
  useEffect(() => {
    fetchMsgs();
  }, []);

  let onDeleteMsg = (id) => {
    setMsgs(msgs.filter((item) => item._id !== id));
  };

  let fetchMsgs = async () => {
    let { data } = await apis.get("message", httpHeaders("admin"));
    setMsgs(data);
  };

  return (
    <div className="public-messages">
      <h2>Messages</h2>
      <div className="messages-table">
        {msgs.map((item) => (
          <IndividualMessage key={item._id} item={item} onDeleteMsg={onDeleteMsg} />
        ))}
        {/* <Paper elevation={1} className="paper">
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            voluptates incidunt, explicabo beatae aut nobis enim laboriosam
            accusantium, quae repellat praesentium, fugit officiis numquam culpa
            sunt facilis atque illo? Voluptas dolorum nam laudantium cumque
            pariatur architecto enim soluta repudiandae libero, quidem
            distinctio placeat, sed explicabo commodi obcaecati temporibus natus
            doloremque maiores eius sequi facilis. Possimus commodi pariatur
            reiciendis blanditiis, laborum reprehenderit numquam dignissimos
            dicta soluta illum nihil enim asperiores expedita quibusdam. Error
            ea est iusto enim, eum laudantium, quis minima quisquam, minus nobis
            tenetur perspiciatis rerum. Aliquid praesentium porro vero repellat,
            dolorum dolorem delectus distinctio? Nostrum dolore inventore eius
            sed.
          </div>
        </Paper>

        <Paper elevation={1} className="paper">
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            voluptates incidunt, explicabo beatae aut nobis enim laboriosam
            accusantium, quae repellat praesentium, fugit officiis numquam culpa
            sunt facilis atque illo? Voluptas dolorum nam laudantium cumque
            pariatur architecto enim soluta repudiandae libero, quidem
            distinctio placeat, sed explicabo commodi obcaecati temporibus natus
            doloremque maiores eius sequi facilis. Possimus commodi pariatur
            reiciendis blanditiis, laborum reprehenderit numquam dignissimos
            dicta soluta illum nihil enim asperiores expedita quibusdam. Error
            ea est iusto enim, eum laudantium, quis minima quisquam, minus nobis
            tenetur perspiciatis rerum. Aliquid praesentium porro vero repellat,
            dolorum dolorem delectus distinctio? Nostrum dolore inventore eius
            sed.
          </div>
        </Paper> */}
      </div>
    </div>
  );
}
