import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Info from "./components/Info";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/home" element={<Home/>}></Route>
      <Route exact path="/info" element={<Info/>}></Route>
    </Routes>
  );
}
