import React from "react";
import Landing from "./Landing";
import Items from "./Items";
import "./category.scss";

export default function Category({ backImg }) {
  return (
    <>
      <Landing backImg={backImg} />
      <Items />
    </>
  );
}
