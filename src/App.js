import React, { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import Landing from "./pages/home/Landing";

export default function App() {
  return (
    <>
      <Navbar />
      <Landing />
    </>
  );
}
