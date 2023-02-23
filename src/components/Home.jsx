import React from "react";
import "../css/home.css";
import Navigation from "./Navigation";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Axios from "axios";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavbarStyle = styled.div`
  background-color: black;
`;

export default function Home() {
  const [studentsList, setStudentsList] = useState([]);
  useEffect(() => {
    Axios.get("https://sever-parthbhuva97.vercel.app/read").then((response) => {
      setStudentsList(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <NavbarStyle>
          <Navigation />
        </NavbarStyle>
        <div className="main">
          <h1 className="title">UVPCE Students</h1>
          <button
            className="button-30"
            onClick={() => {
              document
                .getElementById("section-1")
                .scrollIntoView({ behaviour: "smooth" });
            }}
          >
            Introduction
          </button>
          <button
            className="button-30"
            onClick={() => {
              document
                .getElementById("section-2")
                .scrollIntoView({ behaviour: "smooth" });
            }}
          >
            Materials
          </button>
        </div>
        <div className="container-fluid students" id="section-1">
          <h1 align="center" className="m-5">
            Know Your Peers
          </h1>
          <div className="row">
              {studentsList.map((val, key) => {
                return (
                  <div
              className="col d-flex align-items-center justify-content-center m-3">
                    <div className="card p-3" key={key}>
                      <h2 className="display-6 ps-1 pe-5 mb-0">{val.studentName}</h2>
                      <p className='text-muted ps-1 mb-0'>{"Course: "+val.course +" | Year: "+val.year}</p>
                      <p className='text-muted ps-1 pb-2 mb-3 border-bottom'>{"Sem: "+val.sem +" | From: "+val.from}</p>
                      <h5 className='ps-1'>About Me</h5>
                      <h6 className='text-muted ps-1'>{val.about}</h6>
                      <div className="socials d-flex ms-auto">
                        <Link to={"https://" + val.github}><BsGithub className="ms-2 me-2 github"/></Link>
                        <Link to={"https://" + val.insta}><BsInstagram className="ms-2 me-2 insta"/></Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container-fluid d-flex align-items-center justify-content-center" id="section-2">
          <div className="row d-flex">
            <div className="col">
              <h1>Materials</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
