import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RxDiscordLogo } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import "../css/navigation.css";


export default function Navigation() {
  return (
    <>
    <div className="navContainer"> 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="brand">UVPCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="navComp" to="/">Home</NavLink>
            <NavLink className="navComp" to="/about">About You</NavLink>
            <NavLink className="navComp" to="/contribute">Contribute</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}
