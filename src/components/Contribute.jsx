import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import "../css/Contribute.css"

const NavbarStyle = styled.div`
  background-color: #f8f8ff;
  .navComp {
    color: black !important;
  }
  .brand {
    color: black !important;
  }
  .navbar-toggler {
    background-color: black !important;
  }
`;

export default function Contribute() {
  return (
    <>
      <NavbarStyle>
        <Navigation />
      </NavbarStyle>
      <div className="mainContent">
        <h1>Contribute</h1>
        <p className="px-4" align="center">This Page will display the steps to get started with open source and how to make your first contribution on Github.</p>
      </div>
    </>
  );
}
