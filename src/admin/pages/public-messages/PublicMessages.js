import React from "react";
import "./publicMessages.scss";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import IndividualMessage from "./IndividualMessage";

export default function PublicMessages() {
  const messages = [
    {
      id: 1,
      name: "Sidharth A",
      email: "sidharth.a.satheesh@gmail.com",
      phone: "9876543210",
      subject: "Congratulating on your efforts",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptates incidunt, explicabo beatae aut nobis enim laboriosamaccusantium, quae repellat praesentium, fugit officiis numquam culpasunt facilis atque illo? Voluptas dolorum nam laudantium cumque pariatur architecto enim soluta repudiandae libero, quidemdistinctio placeat, sed explicabo commodi obcaecati temporibus natusdoloremque maiores eius sequi facilis. Possimus commodi pariaturreiciendis blanditiis, laborum reprehenderit numquam dignissimosdicta soluta illum nihil enim asperiores expedita quibusdam. Errorea est iusto enim, eum laudantium, quis minima quisquam, minus nobistenetur perspiciatis rerum. Aliquid praesentium porro vero repellat,dolorum dolorem delectus distinctio? Nostrum dolore inventore eiussed."
    },{
      id: 2,
      name: "John",
      email: "sidharth.a.satheesh@gmail.com",
      phone: "9876543210",
      subject: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptates incidunt, explicabo beatae aut nobis enim laboriosamaccusantium, quae repellat praesentium, fugit officiis numquam culpasunt facilis atque illo? Voluptas dolorum nam laudantium cumque pariatur architecto enim soluta repudiandae libero, quidemdistinctio placeat, sed explicabo commodi obcaecati temporibus natusdoloremque maiores eius sequi facilis. Possimus commodi pariaturreiciendis blanditiis, laborum reprehenderit numquam dignissimosdicta soluta illum nihil enim asperiores expedita quibusdam. Errorea est iusto enim, eum laudantium, quis minima quisquam, minus nobistenetur perspiciatis rerum. Aliquid praesentium porro vero repellat,dolorum dolorem delectus distinctio? Nostrum dolore inventore eiussed."
    },
    {
      id: 3,
      name: "Mike",
      email: "sidharth.a.satheesh@gmail.com",
      phone: "9876543210",
      subject: "Congratulating on your efforts",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptates incidunt, explicabo beatae aut nobis enim laboriosamaccusantium, quae repellat praesentium, fugit officiis numquam culpasunt facilis atque illo? Voluptas dolorum nam laudantium cumque pariatur architecto enim soluta repudiandae libero, quidemdistinctio placeat, sed explicabo commodi obcaecati temporibus natusdoloremque maiores eius sequi facilis. Possimus commodi pariaturreiciendis blanditiis, laborum reprehenderit numquam dignissimosdicta soluta illum nihil enim asperiores expedita quibusdam. Errorea est iusto enim, eum laudantium, quis minima quisquam, minus nobistenetur perspiciatis rerum. Aliquid praesentium porro vero repellat,dolorum dolorem delectus distinctio? Nostrum dolore inventore eiussed."
    },
  ]

  return (
    <div className="public-messages">
      <h2>Messages</h2>
      <div className="messages-table">
        {
          messages.map((e)=>(
            <IndividualMessage key={e.id} event={e} />
          ))
          
        }
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
