import React from "react";
import "../css/home.css";
import Navigation from "./Navigation";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Axios from "axios";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const NavbarStyle = styled.div`
  background-color: black;
`;

export default function Home() {

  const navigate = useNavigate();
  const [studentsList, setStudentsList] = useState([]);
  const [semesterList, setSemesterList] = useState([]);

  const sem = [
    "Sem 1",
    "Sem 2",
    "Sem 3",
    "Sem 4",
    "Sem 5",
    "Sem 6",
    "Sem 7",
    "Sem 8",
  ];

  // semesterList will not be needed here. Must be used in next page
  useEffect(() => {
    Axios.get("https://sever-parthbhuva97.vercel.app/getStudents").then(
      (response) => {
        setStudentsList(response.data);
      }
    );

    Axios.get("https://sever-parthbhuva97.vercel.app/getSem").then(
      (response) => {
        setSemesterList(response.data);
      }
    );
  }, []);

  return (
    <>
      <div>
        <NavbarStyle>
          <Navigation />
        </NavbarStyle>
        <div className="main">
          <div className="container landingContainer d-flex align-items-center flex-column">
            <div className="textcontainer mb-5">
              <div className="text-container text-center">
                <div className="typed-out my-2 px-2">UVPCE Students</div>

                <div className="typed-out-child my-2">Welcome to the Site</div>
              </div>
            </div>
            {/* <div class="typewriter">
            <h1>The cat and the hat.</h1>
          </div> */}
            <div className="btn-row">
              <button
                className="button-30 mt-1 mx-3"
                onClick={() => {
                  document
                    .getElementById("studentsinfo")
                    .scrollIntoView({ behaviour: "smooth" });
                }}
              >
                Introduction
              </button>
              <button
                className="button-30 mt-1 mx-3"
                onClick={() => {
                  document
                    .getElementById("materials")
                    .scrollIntoView({ behaviour: "smooth" });
                }}
              >
                Materials
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid students" id="studentsinfo">
          <h1 align="center" className="mt-5">
            Know Your Peers
          </h1>
          <hr align="center" className="w-75 mx-auto mb-5" />
          <div className="row d-flex align-items-center justify-content-center">
            {studentsList.map((val, key) => {
              return (
                <div className="col-lg-3 d-flex align-items-center justify-content-center m-3">
                  <div className="card p-3" key={key}>
                    <h2 className="display-6 ps-1 pe-5 mb-0">
                      {val.studentName}
                    </h2>
                    <p className="text-muted ps-1 mb-0">
                      {"Course: " + val.course + " | Year: " + val.year}
                    </p>
                    <p className="text-muted ps-1 pb-2 mb-3 border-bottom">
                      {"Sem: " + val.sem + " | From: " + val.from}
                    </p>
                    <h5 className="ps-1">About Me</h5>
                    <h6 className="text-muted ps-1">{val.about}</h6>
                    <div className="socials d-flex ms-auto">
                      <Link to={"https://" + val.github}>
                        <BsGithub className="ms-2 me-2 github" />
                      </Link>
                      <Link to={"https://" + val.insta}>
                        <BsInstagram className="ms-2 me-2 insta" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col m-5" align="right">
              <button className="button-30" onClick={()=>{navigate('about')}}>Add Your Data</button>
            </div>
          </div>
        </div>
        <div className="container-fluid materialsContent" id="materials">
          <div className="row">
            <div className="col">
              <h1>Materials</h1>
            </div>
          </div>
          <div className="row">
            {/* Semester wise cards Here */}
            <p align="center">
              This Section will display materials to help students with their
              curriculum.
            </p>
            {sem.map((item, index) => {
              return <div className="col">
              <div className="card p-3 m-3" align="center">
                <h2>{item}</h2>
              </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
