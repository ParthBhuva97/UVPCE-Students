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
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];

  // semesterList will not be needed here. Must be used in next page
  useEffect(() => {
    Axios.get("https://sever-parthbhuva97.vercel.app/getStudents").then(
      (response) => {
        let list = response.data;
        list = list.sort(() => Math.random() - 0.5);
        setStudentsList(list);
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
                  <div class="card">
                    <h1>{val.studentName}</h1>
                    <div class="card-item">
                      <span class="card-span">
                        Course <span class="card-span-style">:</span>
                        <span class="card-span-value"> {val.course}</span>
                      </span>
                      <span>|</span>
                      <span class="card-span">
                        Year <span class="card-span-style">:</span>
                        <span class="card-span-value"> {val.year}</span>
                      </span>
                    </div>
                    <div class="card-item">
                      <span class="card-span">
                        Sem <span class="card-span-style">:</span>
                        <span class="card-span-value"> {val.sem}</span>
                      </span>
                      <span>|</span>
                      <span class="card-span">
                        From <span class="card-span-style">:</span>
                        <span class="card-span-value"> {val.from}</span>
                      </span>
                    </div>
                    <h5>About Me</h5>
                    <p>{val.about}</p>
                    <div class="icons">
                      <Link to={"https://" + val.github}>
                        <BsGithub className="fa-github" />
                      </Link>
                      <Link to={"https://" + val.insta}>
                        <BsInstagram className="fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col m-5" align="right">
              <button
                className="button-30"
                onClick={() => {
                  navigate("/about");
                }}
              >
                Add Your Data
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid materialsContent" id="materials">
          <div className="row">
            <div className="col mt-5">
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
              return (
                <div className="col col-lg-3">
                  <div className="card-sem p-3 m-3" align="center">
                    <h2>{item}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
