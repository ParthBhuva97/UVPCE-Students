import React, { useState } from "react";
import "../css/info.css";
import Navigation from "./Navigation";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Axios from "axios";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

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

export default function Info() {
  const [name, setName] = useState("");
  const [aboutchars, setAboutChars] = useState(0);
  const [course, setCourse] = useState("");
  const [year, setYear] = useState(0);
  const [sem, setSem] = useState(0);
  const [place, setPlace] = useState("");
  const [about, setAbout] = useState("");
  const [insta, setInsta] = useState("");
  const [github, setGithub] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addData = () => {
    Axios.post("https://sever-parthbhuva97.vercel.app/addStudent", {
      name: name,
      course: course,
      sem: sem,
      year: year,
      from: place,
      about: about,
      insta: insta,
      github: github,
    }).then(() => {
      navigate('/home');
    });
    console.log("Done");
  };
  const navigate = useNavigate();
  return (
    <>
      <NavbarStyle>
        <Navigation />
      </NavbarStyle>
      <div className="introduce">
        <div className="container mt-5">
          <div className="row">
            <div className="col col-lg-12">
              <h1 align="center">Introduce Yourself</h1>
              <hr className="w-50 mx-auto" />
            </div>
          </div>
          <div className="row my-3 d-flex align-items-center justify-content-center">
            <div className="col col-lg-5">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      required
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="course">
                    <Form.Control
                      type="text"
                      placeholder="Course"
                      required
                      onChange={(event) => {
                        setCourse(event.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="year">
                    <Form.Control
                      type="number"
                      placeholder="Year"
                      required
                      onChange={(event) => {
                        if(event.target.value.length <= 4){
                          setYear(event.target.value);
                        }
                        else{
                          event.target.value = 0;
                          alert("Year is not valid");
                        }
                      }}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="sem">
                    <Form.Control
                      type="number"
                      min="1"
                      max="8"
                      placeholder="Semester"
                      required
                      onChange={(event) => {
                        if(event.target.value > 0 && event.target.value <= 8){
                          setSem(event.target.value);
                        }
                        else{
                          event.target.value = 1;
                          alert("Please Enter Valid Semester");
                        }
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="state">
                    <Form.Control
                      type="text"
                      placeholder="State"
                      required
                      onChange={(event) => {
                        setPlace(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group controlId="about">
                    <textarea
                      className="form-control"
                      rows="3"
                      cols="60"
                      placeholder="Tell Us More About Yourself"
                      required
                      onChange={(event) =>{
                        setAboutChars(event.target.value.length);
                      }}
                      onBlur={(event) => {
                        if(event.target.value.length > 125 && event.target.value.length < 130){
                          setAbout(event.target.value);
                        }
                      }}
                    ></textarea>
                    <p className="mb-0 text-muted">{aboutchars}/130</p>
                  </Form.Group>
                </Row>

                <Row>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <BsInstagram />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Insta Link (i.e: instagram.com/insta_user/)"
                      aria-label="insta"
                      aria-describedby="basic-addon1"
                      required
                      onChange={(event) => {
                        setInsta(event.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <BsGithub />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Github Link"
                      aria-label="github"
                      aria-describedby="basic-addon1"
                      required
                      onChange={(event) => {
                        setGithub(event.target.value);
                      }}
                    />
                  </InputGroup>
                </Row>

                <Button variant="primary" onClick={() => {
                  if(insta !== '' && github !== '' && about.length !== 0) {
                    handleShow();
                  }
                  else if(about.length < 125 || about.length >130){
                    handleClose();
                    alert("About section contains invalid number of characters");
                  }
                  else{
                    handleClose();
                    alert('Please Enter Valid Data');
                  }
                }}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Once You Submit this form your data will be displayed publically
              on site. You won't be able to change this information.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Go Back
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                    addData();
                }}
              >
                Proceed
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}
