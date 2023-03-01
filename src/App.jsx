import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Info from "./components/Info";
import Contribute from "./components/Contribute";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/home" element={<Home/>}></Route>
      <Route exact path="/about" element={<Info/>}></Route>
      <Route exact path="/contribute" element={<Contribute/>}></Route>
    </Routes>
  );
}
