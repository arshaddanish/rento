import React from "react";
import Categories from "./Categories";
import Landing from "./Landing";
import "./home.scss";
import News from "./News";

export default function Home() {
  return (
    <>
      <Landing />
      <Categories />
      <News />
    </>
  );
}
