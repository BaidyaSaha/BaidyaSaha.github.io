import React from "react";

import Carousel from "react-bootstrap/Carousel";

import image from "./image/white_img.webp";
import header_img from "./image/linked_profile pic.jpg";
import researchImpactImg from "./image/Baidya Research Impact.jpg";
import nsercLogo from "./image/NSERC.png";
import mitacsLogo from "./image/Mitacs_logo.png";
import nvidiaLogo from "./image/NVIDIA_logo.png";
import conacytLogo from "./image/Conacyt-logo.png";
import cueLogo from "./image/CUE.png";
import cimatLogo from "./image/cimat_logo.png";
import uOfA from "./image/UofA.png";
import indianStaticalInstituteLogo from "./image/Indianstatisticalinstitutelogo.png";
import jadavpurLogo from "./image/Jadavpur_University_Logo.png";
import v2 from "./video/v2.mp4";
import Card from "react-bootstrap/Card";
import { Button, Container, Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cv from "./image/BaidyaCV_Canada.pdf";
import anotherCV from "./image/CCV-Baidya_NathSaha (2).pdf";
import "bootstrap-icons/font/bootstrap-icons.css";

import { NavLink } from "react-router-dom";
import WhiteNavBar from "./WhiteNavBar";
import Chatbot from "./Chatbot";

function Home() {
  return (
    <>
      <WhiteNavBar />

      <Chatbot />

      {/*----------------------------------------------Socials Section-------------------------------------------*/}
      <Container fluid className="bg-light py-3 border-bottom">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs="auto">
              <div className="d-flex gap-4 align-items-center flex-wrap justify-content-center">
                <a
                  href="https://scholar.google.com/citations?user=HkY4OJgAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                  title="Google Scholar"
                >
                  <i className="bi bi-google fs-4"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Google Scholar
                  </span>
                </a>

                <div
                  className="vr d-none d-sm-block"
                  style={{ height: "30px" }}
                ></div>
                <a
                  href="https://www.linkedin.com/in/baidya-nath-saha-55a40939/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                  title="LinkedIn"
                >
                  <i className="bi bi-linkedin fs-4"></i>
                  <span className="ms-2 d-none d-sm-inline">LinkedIn</span>
                </a>

                <div
                  className="vr d-none d-sm-block"
                  style={{ height: "30px" }}
                ></div>

                <a
                  href="https://www.researchgate.net/profile/Baidya_Saha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                  title="ResearchGate"
                >
                  <i className="bi bi-journal-text fs-4"></i>
                  <span className="ms-2 d-none d-sm-inline">ResearchGate</span>
                </a>

                <div
                  className="vr d-none d-sm-block"
                  style={{ height: "30px" }}
                ></div>

                <a
                  href="https://independent.academia.edu/BaidyaNathSaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                  title="academia.edu"
                >
                  <i className="bi bi-person-badge fs-4"></i>
                  <span className="ms-2 d-none d-sm-inline">ACADEMIA</span>
                </a>

                <div
                  className="vr d-none d-sm-block"
                  style={{ height: "30px" }}
                ></div>

                <a
                  href="https://github.com/BaidyaSaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                  title="GitHub"
                >
                  <i className="bi bi-github fs-4"></i>
                  <span className="ms-2 d-none d-sm-inline">GitHub</span>
                </a>

                <div
                  className="vr d-none d-sm-block"
                  style={{ height: "30px" }}
                ></div>
                <a
                  href="mailto:baidya.saha@concordia.ab.ca"
                  className="text-decoration-none text-dark"
                  title="Email"
                >
                  <i className="bi bi-envelope fs-4"></i>
                  <span className="ms-2 d-none d-sm-inline">Email</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/*----------------------------------------------Documents Section-------------------------------------------*/}
      <Container
        fluid
        className="py-4 home_headercard"
        style={
          {
            // background: rgb(52, 52, 52),
          }
        }
      >
        <Container>
          <Row className="justify-content-center g-3">
            {[
              {
                title: "CV",
                icon: "file-earmark-person",
                path: cv,
              },
              {
                title: "Leadership Philosophy",
                icon: "trophy",
                path: anotherCV,
              },
              {
                title: "Research Statement",
                icon: "lightbulb",
                path: "/path-to-research.pdf",
                subItems: [
                  { name: "Industry 4.0", icon: "lightbulb", path: cv },
                  {
                    name: "Natural Language Processing",
                    icon: "lightbulb",
                    path: anotherCV,
                  },
                  {
                    name: "Computer Vision & Image Processing",
                    icon: "lightbulb",
                    path: "/path-to-R3.pdf",
                  },
                ],
              },
              {
                title: "Teaching Statement",
                icon: "book",
                path: "/path-to-teaching.pdf",
              },
              {
                title: "Diversity Statement",
                icon: "people",
                path: "/path-to-diversity.pdf",
              },
            ].map((doc, idx) => (
              <Col xs={6} sm={4} md={2} key={idx} className="position-relative">
                <div className="document-wrapper">
                  <a
                    href={doc.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <Card
                      className="text-center h-100 border-0 shadow-sm hover-card"
                      style={{ transition: "transform 0.2s" }}
                    >
                      <Card.Body className="p-3">
                        <i
                          className={`bi bi-${doc.icon} fs-1 text-primary mb-2`}
                        ></i>
                        <Card.Text className="mb-0 small fw-semibold text-dark">
                          {doc.title}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </a>

                  {/* Sub-items popup */}
                  {doc.subItems && (
                    <div className="sub-items-popup">
                      {doc.subItems.map((subItem, subIdx) => (
                        <a
                          key={subIdx}
                          href={subItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none sub-item-link"
                        >
                          <Card className="text-center border shadow-sm sub-item-card">
                            <Card.Body className="p-3 d-flex flex-column align-items-center justify-content-center">
                              <i
                                className={`bi bi-${subItem.icon} fs-1 text-primary mb-2`}
                              ></i>
                              <Card.Text className="mb-0 fw-semibold text-dark">
                                {subItem.name}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <style jsx>{`
        .document-wrapper {
          position: relative;
        }

        .sub-items-popup {
          display: none;
          position: absolute;
          top: 80%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          margin-top: 10px;
          gap: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          padding: 10px;
        }

        .document-wrapper:hover .sub-items-popup {
          display: flex;
          opacity: 1;
          pointer-events: auto;
        }

        .sub-item-link {
          display: block;
          flex: 1;
        }

        .sub-item-card {
          width: 200px;
          height: 150px;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          background-color: white;
        }

        .sub-item-card .card-body {
          height: 100%;
          padding: 12px 16px !important;
        }

        .sub-item-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
        }

        .sub-item-card .card-text {
          font-size: 0.85rem;
          line-height: 1.3;
          word-wrap: break-word;
        }

        .hover-card:hover {
          transform: translateY(-4px);
        }

        /* Ensure the popup stays visible when hovering over it */
        .sub-items-popup:hover {
          display: flex;
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>

      {/*----------------------------------------------Home Nav bar ends-------------------------------------------*/}

      {/* <Container fluid className="home_headerct px-0 py-5">
        <Row className="g-4 mx-auto" style={{ maxWidth: "1400px" }}>
          <Col xs={12} md={4}>
            <Card className="home_headercard_1 border-1 h-100 shadow-lg">
              <Card.Body className="text-center text-black p-5">
                <Card.Title
                  className="mb-4"
                  style={{
                    fontFamily: "'Shalimar', cursive",
                    fontSize: "2.5rem",
                    color: "blue",
                  }}
                >
                  Employement
                </Card.Title>
                <div className="d-flex flex-column gap-3">
                  <Card.Text className="mb-0 fs-5">
                    Associate Professor(July, 22 - Pres.), Assistant
                    Professor(July, 19 - June, 22),
                    <p style={{ color: "red" }}>
                      Concordia University of Edmonton
                    </p>
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    <p style={{ color: "blue" }}>
                      Chair of the Mathematical and Physical Sciences,
                    </p>{" "}
                    Program Director of MScIT program, and Coordinator of IT
                    Program (July, 21 - June, 24),{" "}
                    <p style={{ color: "red" }}>
                      Concordia University of Edmonton
                    </p>
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    Assistant Professor (Aug, 14 - June, 19),
                    <p style={{ color: "red" }}>CIMAT, Mexico</p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="home_headercard border-0 h-100 shadow-lg">
              <Card.Img
                src={header_img}
                className="rounded-circle head_img mx-auto mt-5 mb-4"
                style={{
                  width: "225px",
                  height: "225px",
                  opacity: 0.5,
                  filter: "alpha(opacity=40)",
                  backgroundColor: "#000",
                }}
              />
              <Card.Body className="text-center text-white p-0">
                <Card.Text
                  style={{
                    fontFamily: "'Shalimar', cursive",
                    fontSize: "3rem",
                  }}
                >
                  Hello, My Name is
                </Card.Text>
              </Card.Body>
              <Card.Text
                className="text-center head_title pb-4"
                style={{
                  paddingTop: "10px",
                  fontSize: "2rem",
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "'Cairo', sans-serif",
                  letterSpacing: "7px",
                  overflow: "hidden",
                  borderRight: "2px solid rgb(52, 52, 52)",
                  whiteSpace: "nowrap",
                  margin: "0 auto",
                  width: "fit-content",
                  animation: "typewriter 3s steps(55) 1s 1 normal both",
                }}
              >
                BAIDYA NATH SAHA
              </Card.Text>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="home_headercard_1 border-1 h-100 shadow-lg">
              <Card.Body className="text-center text-black p-5">
                <Card.Title
                  className="mb-4"
                  style={{
                    fontFamily: "'Shalimar', cursive",
                    fontSize: "2.5rem",
                    color: "blue",
                  }}
                >
                  Education
                </Card.Title>
                <div className="d-flex flex-column gap-3">
                  <Card.Text className="mb-0 fs-5">
                    Ph.D. in Computer Science,
                    <p style={{ color: "red" }}>
                      University of Alberta, Canada
                    </p>
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    Master of Technology in Computer Science,
                    <p style={{ color: "red" }}>
                      Indian Statistical Institute, India
                    </p>
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    Master of Technology in Quality, Reliability & Operations
                    Research,
                    <p style={{ color: "red" }}>
                      Indian Statistical Institute, India
                    </p>
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    Bachelor of Mechanical Engineering
                    <p style={{ color: "red" }}>Jadavpur University, India</p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}

      <Container className="w-100 my-5 py-5">
        <Row className="g-4 mx-auto" style={{ maxWidth: "1400px" }}>
          <Col xs={12} md={5}>
            <Card className="home_headercard border-0 h-100 shadow-lg">
              <Card.Img
                src={header_img}
                className="rounded-circle head_img mx-auto mt-5 mb-4"
                style={{
                  width: "225px",
                  height: "225px",
                  opacity: 0.5,
                  filter: "alpha(opacity=40)",
                  backgroundColor: "#000",
                }}
              />
              <Card.Body className="text-center text-white p-0">
                <Card.Text
                  style={{
                    fontFamily: "'Shalimar', cursive",
                    fontSize: "3rem",
                  }}
                >
                  Hello, My Name is
                </Card.Text>
              </Card.Body>
              <Card.Text
                className="text-center head_title pb-4"
                style={{
                  paddingTop: "10px",
                  fontSize: "2rem",
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "'Cairo', sans-serif",
                  letterSpacing: "7px",
                  overflow: "hidden",
                  borderRight: "2px solid rgb(52, 52, 52)",
                  whiteSpace: "nowrap",
                  margin: "0 auto",
                  width: "fit-content",
                  animation: "typewriter 3s steps(55) 1s 1 normal both",
                }}
              >
                BAIDYA NATH SAHA
              </Card.Text>
            </Card>
          </Col>
          <Col xs={12} md={7}>
            <Carousel
              className="carousel-fade"
              controls={true}
              indicators={false}
              slide={false}
            >
              <Carousel.Item
                interval={100000}
                className="overflow-hidden"
                style={{ height: "550px" }}
              >
                <Card className="home_headercard_1 border-1 h-100 shadow-lg">
                  <Card.Body className="text-center text-black p-5">
                    <Card.Title
                      className="mb-4"
                      style={{
                        fontFamily: "'Shalimar', cursive",
                        fontSize: "2.5rem",
                        color: "blue",
                      }}
                    >
                      Employement
                    </Card.Title>
                    <div className="d-flex flex-column gap-3">
                      <Row className="justify-content-center align-items-center mb-3">
                        <Col xs="auto">
                          <Image src={cueLogo} width="180px" height="70px" />
                        </Col>
                        <Col>
                          <Card.Text className="mb-0 fs-5">
                            Associate Professor(July, 22 - Pres.), Assistant
                            Professor(July, 19 - June, 22),
                            <p style={{ color: "red" }}>
                              Concordia University of Edmonton
                            </p>
                          </Card.Text>
                        </Col>
                      </Row>
                      <Card.Text className="mb-0 fs-5">
                        <p style={{ color: "blue" }}>
                          Chair of the Mathematical and Physical Sciences,
                        </p>{" "}
                        Program Director of MScIT program, and Coordinator of IT
                        Program (July, 21 - June, 24),{" "}
                        <p style={{ color: "red" }}>
                          Concordia University of Edmonton
                        </p>
                      </Card.Text>
                      <Row className="justify-content-center align-items-center mb-3">
                        <Col xs="auto">
                          <Image src={cimatLogo} width="180px" height="120px" />
                        </Col>
                        <Col>
                          <Card.Text className="mb-0 fs-5">
                            Assistant Professor (Aug, 14 - June, 19),
                            <p style={{ color: "red" }}>CIMAT, Mexico</p>
                          </Card.Text>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item
                interval={100000}
                className="overflow-hidden"
                style={{ height: "550px" }}
              >
                <Card className="home_headercard_1 border-1 h-100 shadow-lg">
                  <Card.Body className="text-center text-black p-5">
                    <Card.Title
                      className="mb-4"
                      style={{
                        fontFamily: "'Shalimar', cursive",
                        fontSize: "2.5rem",
                        color: "blue",
                      }}
                    >
                      Education
                    </Card.Title>
                    <div className="d-flex flex-column gap-1">
                      <Row className="justify-content-center align-items-center">
                        <Col xs="auto">
                          <Image src={uOfA} width="120px" height="40px" />
                        </Col>
                        <Col>
                          <Card.Text className="mb-0 fs-5">
                            Ph.D. in Computer Science,
                            <p style={{ color: "red" }}>
                              University of Alberta, Canada
                            </p>
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row className="justify-content-center align-items-center">
                        <Col xs="auto">
                          <Image
                            src={indianStaticalInstituteLogo}
                            width="120px"
                            height="140px"
                          />
                        </Col>
                        <Col>
                          <Card.Text className="mb-0 fs-5">
                            Master of Technology in Computer Science,
                            <p style={{ color: "red" }}>
                              Indian Statistical Institute, India
                            </p>
                            <Card.Text className="mb-0 fs-5">
                              Master of Technology in Quality, Reliability &
                              Operations Research,
                              <p style={{ color: "red" }}>
                                Indian Statistical Institute, India
                              </p>
                            </Card.Text>
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row className="justify-content-center align-items-center">
                        <Col xs="auto">
                          <Image
                            src={jadavpurLogo}
                            width="120px"
                            height="140px"
                          />
                        </Col>
                        <Col>
                          <Card.Text className="mb-0 fs-5">
                            Bachelor of Mechanical Engineering
                            <p style={{ color: "red" }}>
                              Jadavpur University, India
                            </p>
                          </Card.Text>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item
                interval={100000}
                className="overflow-hidden"
                style={{ height: "550px" }}
              >
                <Card className="home_headercard_1 border-1 h-100 shadow-lg">
                  <Card.Body className="text-center text-black p-0">
                    <div className="p-5">
                      <Card.Title
                        className="mb-4"
                        style={{
                          fontFamily: "'Shalimar', cursive",
                          fontSize: "2.5rem",
                          color: "blue",
                        }}
                      >
                        Research Impacts
                      </Card.Title>
                    </div>
                    <Card.Img
                      src={researchImpactImg}
                      style={{
                        width: "100%",
                        height: "300px",
                      }}
                    />
                    {/* <div className="d-flex flex-column gap-3">
                  <Card.Text className="mb-0 fs-5">
                    Associate Professor(July, 22 - Pres.), Assistant
                    Professor(July, 19 - June, 22),
                    <p style={{ color: "red" }}>
                      Concordia University of Edmonton
                    </p>
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    <p style={{ color: "blue" }}>
                      Chair of the Mathematical and Physical Sciences,
                    </p>{" "}
                    Program Director of MScIT program, and Coordinator of IT
                    Program (July, 21 - June, 24),{" "}
                    <p style={{ color: "red" }}>
                      Concordia University of Edmonton
                    </p>
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    Assistant Professor (Aug, 14 - June, 19),
                    <p style={{ color: "red" }}>CIMAT, Mexico</p>
                  </Card.Text>
                </div> */}
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item
                interval={100000}
                className="overflow-hidden"
                style={{ height: "550px" }}
              >
                <Card className="home_headercard_1 border-1 h-100 shadow-lg">
                  <Card.Body className="text-center text-black p-5">
                    <Card.Title
                      className="mb-4"
                      style={{
                        fontFamily: "'Shalimar', cursive",
                        fontSize: "2.5rem",
                        color: "blue",
                      }}
                    >
                      Research Interests
                    </Card.Title>
                    <div className="d-flex flex-column gap-3">
                      <Card.Text className="mb-0 fs-5">
                        Industry 4.0/5.0/6.0
                      </Card.Text>
                      <Card.Text className="mb-0 fs-5">
                        Artificial Intelligence/Machine Learning
                      </Card.Text>
                      <Card.Text className="mb-0 fs-5">
                        Computer Vision/Robotics
                      </Card.Text>
                      <Card.Text className="mb-0 fs-5">
                        Natural Language Processing
                      </Card.Text>
                      <Card.Text className="mb-0 fs-5">
                        Software Reliability/Quality Engineering
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item
                interval={100000}
                className="overflow-hidden"
                style={{ height: "550px" }}
              >
                <Card className="home_headercard_1 border-1 h-100 shadow-lg">
                  <Card.Body className="text-center text-black p-4 d-flex flex-column justify-content-center">
                    <Card.Title
                      className="mb-4"
                      style={{
                        fontFamily: "'Shalimar', cursive",
                        fontSize: "2.5rem",
                        color: "blue",
                      }}
                    >
                      Research Achievements
                    </Card.Title>
                    <div className="d-flex flex-column gap-3">
                      <Row className="justify-content-center align-items-center mb-3">
                        <Col xs="auto">
                          <Image src={nsercLogo} width="100px" height="40px" />
                        </Col>
                        <Col>
                          <Card.Text className="mb-0 fs-5">
                            Received NSERC Discovery and a Launch Supplement
                            Grant as an early career researcher in Canada (2020
                            - 2027)
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row className="justify-content-center align-items-center mb-3">
                        <Col xs="auto">
                          <Image src={mitacsLogo} width="100px" height="30px" />
                        </Col>
                        <Col>
                          <Card.Text className="mb-0 fs-5">
                            (MITACS) Business Strategy Internship (BSI) Grant,
                            Canada (2025 - 2026)
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row className="justify-content-center align-items-center mb-3">
                        <Col xs="auto">
                          <Image src={nvidiaLogo} width="100px" height="30px" />
                        </Col>
                        <Col>
                          <Card.Text className="mb-0 fs-5">
                            NVIDIA Corporation Accelerated Data Science Call for
                            Proposals Award (2019)
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row className="justify-content-center align-items-center mb-3">
                        <Col xs="auto">
                          <Image
                            src={conacytLogo}
                            width="100px"
                            height="30px"
                          />
                        </Col>
                        <Col>
                          <Card.Text className="mb-0 fs-5">
                            Basic Science research fund as a young investigator,
                            Conacyt, Mexico (2016 - 2019)
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row className="justify-content-center align-items-center mb-3">
                        <Col xs="auto">
                          <Image src={mitacsLogo} width="100px" height="30px" />
                        </Col>
                        <Col>
                          <Card.Text className="mb-0 fs-5">
                            MITACS ACCELERATE internship Award, Canada (2010)
                          </Card.Text>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <p class=" research_title text-center mt-5 mb-5 pt-5">
        RESEARCH HIGHLIGHTS
      </p>

      <Container fluid className=" mt-5 bg-dark">
        <Container>
          <p class=" research_title text-center mt-5 mb-5 pt-5 text-white">
            RESEARCH HIGHLIGHTS
          </p>
          <Carousel>
            {/*-------------------------------slide one--------------------------------*/}
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="First slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <Card className="w-50 mx-auto mb-5 border-0">
                    <Card.Title className="text-dark">
                      Deep learning with light
                    </Card.Title>
                    <Card.Text className="text-dark">
                      A new method uses optics to accelerate machine-learning
                      computations on smart speakers and other low-power
                      connected devices.
                    </Card.Text>

                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/optics-deep-learning-computations-1020"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            {/*-------------------------------slide two--------------------------------*/}
            <Carousel.Item interval={600}>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="Second slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <h3 class="text-dark pb-4">Learning on the edge</h3>
                  <Card className="w-50 mx-auto border-0">
                    <Card.Subtitle className="text-dark py-3">
                      A new technique enables AI models to continually learn
                      from new data on intelligent edge devices like smartphones
                      and sensors, reducing energy costs and privacy risks.
                    </Card.Subtitle>
                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/machine-learning-edge-microcontroller-1004"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>

            {/*-------------------------------slide three--------------------------------*/}
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="Third slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <h3 class="text-dark fs-6 pb-1">
                    Neurodegenerative disease can progress in newly identified
                    patterns
                  </h3>
                  <Card className="w-50 mx-auto border-0">
                    <Card.Subtitle className="text-dark fs-6 py-2 ">
                      A machine-learning method finds patterns of health decline
                      in ALS, informing future clinical trial designs and
                      mechanism discovery. The technique also extends to
                      Alzheimer’s and Parkinson’s.
                    </Card.Subtitle>
                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/neurodegenerative-disease-can-progress-newly-identified-patterns-0927"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>

            {/*-------------------------------slide Four--------------------------------*/}
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="Forth slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <h3 class="text-dark w-50 mx-auto fs-5 pb-1">
                    New program to support translational research in AI, data
                    science, and machine learning
                  </h3>
                  <Card className="w-50 mx-auto border-0">
                    <Card.Subtitle className="text-dark fs-6 py-2 ">
                      The MIT-Pillar AI Collective will cultivate prospective
                      entrepreneurs and drive innovation.
                    </Card.Subtitle>
                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/new-program-support-translational-research-ai-data-science-machine-learning-0927"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>

            {/*-------------------------------slide five--------------------------------*/}
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="fifth slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <h3 class="text-dark w-50 mx-auto fs-5 pb-1">
                    In-home wireless device tracks disease progression in
                    Parkinson’s patients
                  </h3>
                  <Card className="w-50 mx-auto border-0">
                    <Card.Subtitle className="text-dark py-3">
                      By continuously monitoring a patient’s gait speed, the
                      system can assess the condition’s severity between visits
                      to the doctor’s office.
                    </Card.Subtitle>
                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/home-wireless-parkinsons-progression-0921"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            {/*--------------------------------slide six--------------------------------------*/}
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="sixth slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <h3 class="text-dark fs-5 pb-1">
                    Computing for the health of the planet
                  </h3>
                  <Card className="w-50 mx-auto border-0">
                    <Card.Subtitle className="text-dark py-3">
                      The MIT Schwarzman College of Computing welcomes four new
                      faculty members engaged in research and teaching that
                      address climate risks and other environmental issues.
                    </Card.Subtitle>
                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/computing-health-planet-new-faculty-0913"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <video
                className="d-block w-50 mx-auto my-5"
                width="640"
                height="360"
                controls
              >
                <source src={v2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Carousel.Item>
          </Carousel>

          {/* <Container className="mt-4">
            <Carousel>
              <Carousel.Item interval={1000}>
                <Row className="justify-content-center align-items-center">
                  <Col md={6} className="text-center">
                    <img
                      className="d-block w-50 mx-auto my-5"
                      src={"https://picsum.photos/600/300?random=1"}
                      alt="First slide"
                    />
                    <Container>
                      <Carousel.Caption className="mb-5">
                        <Card className="w-75 mx-auto mb-5 border-0 bg-transparent">
                          <Card.Title className="text-dark">
                            Deep learning with light
                          </Card.Title>
                          <Card.Text className="text-dark">
                            A new method uses optics to accelerate
                            machine-learning computations on smart speakers and
                            other low-power connected devices.
                          </Card.Text>
                          <Card.Text className="text-info">
                            <a
                              href="https://news.mit.edu/2022/optics-deep-learning-computations-1020"
                              className="text-decoration-none"
                            >
                              click here to know more
                            </a>
                          </Card.Text>
                        </Card>
                      </Carousel.Caption>
                    </Container>
                  </Col>

                  <Col md={6} className="text-center">
                    <img
                      className="d-block w-50 mx-auto my-5"
                      src={"https://picsum.photos/600/300?random=2"}
                      alt="Second slide"
                    />
                    <Container>
                      <Carousel.Caption className="mb-5">
                        <Card className="w-75 mx-auto mb-5 border-0 bg-transparent">
                          <Card.Title className="text-dark">
                            Neural chips made of light
                          </Card.Title>
                          <Card.Text className="text-dark">
                            Researchers explore photonic processors to speed up
                            deep learning with reduced power usage.
                          </Card.Text>
                          <Card.Text className="text-info">
                            <a
                              href="https://news.mit.edu/2022/optics-deep-learning-computations-1020"
                              className="text-decoration-none"
                            >
                              click here to know more
                            </a>
                          </Card.Text>
                        </Card>
                      </Carousel.Caption>
                    </Container>
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item interval={1000}>
                <Row className="justify-content-center align-items-center">
                  <Col md={6} className="text-center">
                    <img
                      className="d-block w-50 mx-auto my-5"
                      src="https://picsum.photos/600/300?random=3"
                      alt="Third slide"
                    />
                    <Container>
                      <Carousel.Caption className="mb-5">
                        <Card className="w-75 mx-auto mb-5 border-0 bg-transparent">
                          <Card.Title className="text-dark">
                            Optical computing breakthrough
                          </Card.Title>
                          <Card.Text className="text-dark">
                            Scientists achieve new efficiency levels in
                            light-based deep learning computations.
                          </Card.Text>
                        </Card>
                      </Carousel.Caption>
                    </Container>
                  </Col>

                  <Col md={6} className="text-center">
                    <img
                      className="d-block w-50 mx-auto my-5"
                      src="https://picsum.photos/600/300?random=4"
                      alt="Fourth slide"
                    />
                    <Container>
                      <Carousel.Caption className="mb-5">
                        <Card className="w-75 mx-auto mb-5 border-0 bg-transparent">
                          <Card.Title className="text-dark">
                            Smart devices powered by optics
                          </Card.Title>
                          <Card.Text className="text-dark">
                            Optical chips enable faster, low-energy
                            machine-learning in portable electronics.
                          </Card.Text>
                        </Card>
                      </Carousel.Caption>
                    </Container>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Container> */}

          <Container fluid className="mt-5 bg-dark">
            <Container>
              <Carousel>
                {/* --------------------------- Slide 1 --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Deep Learning with Light",
                        text: "A new method uses optics to accelerate machine-learning computations on smart speakers and other low-power connected devices.",
                        link: "https://news.mit.edu/2022/optics-deep-learning-computations-1020",
                      },
                      {
                        title: "Learning on the Edge",
                        text: "AI models continually learn from new data on edge devices, reducing energy cost and privacy risk.",
                        link: "https://news.mit.edu/2022/machine-learning-edge-microcontroller-1004",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={image}
                            alt={item.title}
                          />
                          <Card.Body>
                            <Card.Title className="text-dark">
                              {item.title}
                            </Card.Title>
                            <Card.Text className="text-dark">
                              {item.text}
                            </Card.Text>
                            <Card.Text className="text-info">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                              >
                                click here to know more
                              </a>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 2 --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Neurodegenerative Disease Patterns",
                        text: "A machine-learning method finds patterns of health decline in ALS, informing future clinical trial designs and mechanism discovery.",
                        link: "https://news.mit.edu/2022/neurodegenerative-disease-can-progress-newly-identified-patterns-0927",
                      },
                      {
                        title: "Translational AI Research",
                        text: "The MIT-Pillar AI Collective will cultivate prospective entrepreneurs and drive innovation.",
                        link: "https://news.mit.edu/2022/new-program-support-translational-research-ai-data-science-machine-learning-0927",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={image}
                            alt={item.title}
                          />
                          <Card.Body>
                            <Card.Title className="text-dark">
                              {item.title}
                            </Card.Title>
                            <Card.Text className="text-dark">
                              {item.text}
                            </Card.Text>
                            <Card.Text className="text-info">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                              >
                                click here to know more
                              </a>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 3 --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "In-home Wireless Tracking for Parkinson’s",
                        text: "By continuously monitoring a patient’s gait speed, the system can assess condition severity between doctor visits.",
                        link: "https://news.mit.edu/2022/home-wireless-parkinsons-progression-0921",
                      },
                      {
                        title: "Computing for the Health of the Planet",
                        text: "The MIT Schwarzman College of Computing welcomes new faculty addressing climate risks and environmental challenges.",
                        link: "https://news.mit.edu/2022/computing-health-planet-new-faculty-0913",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={image}
                            alt={item.title}
                          />
                          <Card.Body>
                            <Card.Title className="text-dark">
                              {item.title}
                            </Card.Title>
                            <Card.Text className="text-dark">
                              {item.text}
                            </Card.Text>
                            <Card.Text className="text-info">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                              >
                                click here to know more
                              </a>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Container>
          </Container>
        </Container>
      </Container>

      <p class=" research_title text-center mt-5 mb-5 pt-5">
        TEACHING HIGHLIGHTS
      </p>

      <Container fluid className=" mt-5 bg-dark">
        <Container>
          <p class=" research_title text-center mt-5 mb-5 pt-5 text-white">
            TEACHING HIGHLIGHTS
          </p>
          <Carousel>
            {/*-------------------------------slide one--------------------------------*/}
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="First slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <Card className="w-50 mx-auto mb-5 border-0">
                    <Card.Title className="text-dark">
                      Deep learning with light
                    </Card.Title>
                    <Card.Text className="text-dark">
                      A new method uses optics to accelerate machine-learning
                      computations on smart speakers and other low-power
                      connected devices.
                    </Card.Text>

                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/optics-deep-learning-computations-1020"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            {/*-------------------------------slide two--------------------------------*/}
            <Carousel.Item interval={600}>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="Second slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <h3 class="text-dark pb-4">Learning on the edge</h3>
                  <Card className="w-50 mx-auto border-0">
                    <Card.Subtitle className="text-dark py-3">
                      A new technique enables AI models to continually learn
                      from new data on intelligent edge devices like smartphones
                      and sensors, reducing energy costs and privacy risks.
                    </Card.Subtitle>
                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/machine-learning-edge-microcontroller-1004"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>

            {/*-------------------------------slide three--------------------------------*/}
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="Third slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <h3 class="text-dark fs-6 pb-1">
                    Neurodegenerative disease can progress in newly identified
                    patterns
                  </h3>
                  <Card className="w-50 mx-auto border-0">
                    <Card.Subtitle className="text-dark fs-6 py-2 ">
                      A machine-learning method finds patterns of health decline
                      in ALS, informing future clinical trial designs and
                      mechanism discovery. The technique also extends to
                      Alzheimer’s and Parkinson’s.
                    </Card.Subtitle>
                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/neurodegenerative-disease-can-progress-newly-identified-patterns-0927"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>

            {/*-------------------------------slide Four--------------------------------*/}
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="Forth slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <h3 class="text-dark w-50 mx-auto fs-5 pb-1">
                    New program to support translational research in AI, data
                    science, and machine learning
                  </h3>
                  <Card className="w-50 mx-auto border-0">
                    <Card.Subtitle className="text-dark fs-6 py-2 ">
                      The MIT-Pillar AI Collective will cultivate prospective
                      entrepreneurs and drive innovation.
                    </Card.Subtitle>
                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/new-program-support-translational-research-ai-data-science-machine-learning-0927"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>

            {/*-------------------------------slide five--------------------------------*/}
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="fifth slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <h3 class="text-dark w-50 mx-auto fs-5 pb-1">
                    In-home wireless device tracks disease progression in
                    Parkinson’s patients
                  </h3>
                  <Card className="w-50 mx-auto border-0">
                    <Card.Subtitle className="text-dark py-3">
                      By continuously monitoring a patient’s gait speed, the
                      system can assess the condition’s severity between visits
                      to the doctor’s office.
                    </Card.Subtitle>
                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/home-wireless-parkinsons-progression-0921"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            {/*--------------------------------slide six--------------------------------------*/}
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto my-5"
                src={image}
                alt="sixth slide"
              />
              <Container>
                <Carousel.Caption className="mb-5">
                  <h3 class="text-dark fs-5 pb-1">
                    Computing for the health of the planet
                  </h3>
                  <Card className="w-50 mx-auto border-0">
                    <Card.Subtitle className="text-dark py-3">
                      The MIT Schwarzman College of Computing welcomes four new
                      faculty members engaged in research and teaching that
                      address climate risks and other environmental issues.
                    </Card.Subtitle>
                    <Card.Text className="text-info">
                      <a
                        href="https://news.mit.edu/2022/computing-health-planet-new-faculty-0913"
                        className="text-decoration-none"
                      >
                        click here to know more
                      </a>
                    </Card.Text>
                  </Card>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <video
                className="d-block w-50 mx-auto my-5"
                width="640"
                height="360"
                controls
              >
                <source src={v2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Carousel.Item>
          </Carousel>

          {/* <Container className="mt-4">
            <Carousel>
              <Carousel.Item interval={1000}>
                <Row className="justify-content-center align-items-center">
                  <Col md={6} className="text-center">
                    <img
                      className="d-block w-50 mx-auto my-5"
                      src={"https://picsum.photos/600/300?random=1"}
                      alt="First slide"
                    />
                    <Container>
                      <Carousel.Caption className="mb-5">
                        <Card className="w-75 mx-auto mb-5 border-0 bg-transparent">
                          <Card.Title className="text-dark">
                            Deep learning with light
                          </Card.Title>
                          <Card.Text className="text-dark">
                            A new method uses optics to accelerate
                            machine-learning computations on smart speakers and
                            other low-power connected devices.
                          </Card.Text>
                          <Card.Text className="text-info">
                            <a
                              href="https://news.mit.edu/2022/optics-deep-learning-computations-1020"
                              className="text-decoration-none"
                            >
                              click here to know more
                            </a>
                          </Card.Text>
                        </Card>
                      </Carousel.Caption>
                    </Container>
                  </Col>

                  <Col md={6} className="text-center">
                    <img
                      className="d-block w-50 mx-auto my-5"
                      src={"https://picsum.photos/600/300?random=2"}
                      alt="Second slide"
                    />
                    <Container>
                      <Carousel.Caption className="mb-5">
                        <Card className="w-75 mx-auto mb-5 border-0 bg-transparent">
                          <Card.Title className="text-dark">
                            Neural chips made of light
                          </Card.Title>
                          <Card.Text className="text-dark">
                            Researchers explore photonic processors to speed up
                            deep learning with reduced power usage.
                          </Card.Text>
                          <Card.Text className="text-info">
                            <a
                              href="https://news.mit.edu/2022/optics-deep-learning-computations-1020"
                              className="text-decoration-none"
                            >
                              click here to know more
                            </a>
                          </Card.Text>
                        </Card>
                      </Carousel.Caption>
                    </Container>
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item interval={1000}>
                <Row className="justify-content-center align-items-center">
                  <Col md={6} className="text-center">
                    <img
                      className="d-block w-50 mx-auto my-5"
                      src="https://picsum.photos/600/300?random=3"
                      alt="Third slide"
                    />
                    <Container>
                      <Carousel.Caption className="mb-5">
                        <Card className="w-75 mx-auto mb-5 border-0 bg-transparent">
                          <Card.Title className="text-dark">
                            Optical computing breakthrough
                          </Card.Title>
                          <Card.Text className="text-dark">
                            Scientists achieve new efficiency levels in
                            light-based deep learning computations.
                          </Card.Text>
                        </Card>
                      </Carousel.Caption>
                    </Container>
                  </Col>

                  <Col md={6} className="text-center">
                    <img
                      className="d-block w-50 mx-auto my-5"
                      src="https://picsum.photos/600/300?random=4"
                      alt="Fourth slide"
                    />
                    <Container>
                      <Carousel.Caption className="mb-5">
                        <Card className="w-75 mx-auto mb-5 border-0 bg-transparent">
                          <Card.Title className="text-dark">
                            Smart devices powered by optics
                          </Card.Title>
                          <Card.Text className="text-dark">
                            Optical chips enable faster, low-energy
                            machine-learning in portable electronics.
                          </Card.Text>
                        </Card>
                      </Carousel.Caption>
                    </Container>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Container> */}

          <Container fluid className="mt-5 bg-dark">
            <Container>
              <Carousel>
                {/* --------------------------- Slide 1 --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Deep Learning with Light",
                        text: "A new method uses optics to accelerate machine-learning computations on smart speakers and other low-power connected devices.",
                        link: "https://news.mit.edu/2022/optics-deep-learning-computations-1020",
                      },
                      {
                        title: "Learning on the Edge",
                        text: "AI models continually learn from new data on edge devices, reducing energy cost and privacy risk.",
                        link: "https://news.mit.edu/2022/machine-learning-edge-microcontroller-1004",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={image}
                            alt={item.title}
                          />
                          <Card.Body>
                            <Card.Title className="text-dark">
                              {item.title}
                            </Card.Title>
                            <Card.Text className="text-dark">
                              {item.text}
                            </Card.Text>
                            <Card.Text className="text-info">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                              >
                                click here to know more
                              </a>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 2 --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Neurodegenerative Disease Patterns",
                        text: "A machine-learning method finds patterns of health decline in ALS, informing future clinical trial designs and mechanism discovery.",
                        link: "https://news.mit.edu/2022/neurodegenerative-disease-can-progress-newly-identified-patterns-0927",
                      },
                      {
                        title: "Translational AI Research",
                        text: "The MIT-Pillar AI Collective will cultivate prospective entrepreneurs and drive innovation.",
                        link: "https://news.mit.edu/2022/new-program-support-translational-research-ai-data-science-machine-learning-0927",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={image}
                            alt={item.title}
                          />
                          <Card.Body>
                            <Card.Title className="text-dark">
                              {item.title}
                            </Card.Title>
                            <Card.Text className="text-dark">
                              {item.text}
                            </Card.Text>
                            <Card.Text className="text-info">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                              >
                                click here to know more
                              </a>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 3 --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "In-home Wireless Tracking for Parkinson’s",
                        text: "By continuously monitoring a patient’s gait speed, the system can assess condition severity between doctor visits.",
                        link: "https://news.mit.edu/2022/home-wireless-parkinsons-progression-0921",
                      },
                      {
                        title: "Computing for the Health of the Planet",
                        text: "The MIT Schwarzman College of Computing welcomes new faculty addressing climate risks and environmental challenges.",
                        link: "https://news.mit.edu/2022/computing-health-planet-new-faculty-0913",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={image}
                            alt={item.title}
                          />
                          <Card.Body>
                            <Card.Title className="text-dark">
                              {item.title}
                            </Card.Title>
                            <Card.Text className="text-dark">
                              {item.text}
                            </Card.Text>
                            <Card.Text className="text-info">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                              >
                                click here to know more
                              </a>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Container>
          </Container>
        </Container>
      </Container>

      {/*------------------------------------------carousel block ends----------------------------------------------*/}

      {/*---------------------------------------home title ends----------------------------------------------------*/}
      {/* <Container className="w-100 my-5 py-5">
        <Row className="g-4 mx-auto" style={{ maxWidth: "1400px" }}>
          <Col xs={12} md={4}>
            <Card className="home_headercard_1 border-1 h-100 shadow-lg">
              <Card.Body className="text-center text-black p-0">
                <div className="p-5">
                  <Card.Title
                    className="mb-4"
                    style={{
                      fontFamily: "'Shalimar', cursive",
                      fontSize: "2.5rem",
                      color: "blue",
                    }}
                  >
                    Research Impacts
                  </Card.Title>
                </div>
                <Card.Img
                  src={researchImpactImg}
                  style={{
                    width: "100%",
                    height: "300px",
                  }}
                /> */}
      {/* <div className="d-flex flex-column gap-3">
                  <Card.Text className="mb-0 fs-5">
                    Associate Professor(July, 22 - Pres.), Assistant
                    Professor(July, 19 - June, 22),
                    <p style={{ color: "red" }}>
                      Concordia University of Edmonton
                    </p>
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    <p style={{ color: "blue" }}>
                      Chair of the Mathematical and Physical Sciences,
                    </p>{" "}
                    Program Director of MScIT program, and Coordinator of IT
                    Program (July, 21 - June, 24),{" "}
                    <p style={{ color: "red" }}>
                      Concordia University of Edmonton
                    </p>
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    Assistant Professor (Aug, 14 - June, 19),
                    <p style={{ color: "red" }}>CIMAT, Mexico</p>
                  </Card.Text>
                </div> */}
      {/* </Card.Body>
            </Card>
          </Col> */}

      {/* <Col xs={12} md={4}>
            <Card className="home_headercard_1 border-1 h-100 shadow-lg">
              <Card.Body className="text-center text-black p-5">
                <Card.Title
                  className="mb-4"
                  style={{
                    fontFamily: "'Shalimar', cursive",
                    fontSize: "2.5rem",
                    color: "blue",
                  }}
                >
                  Research Interests
                </Card.Title>
                <div className="d-flex flex-column gap-3">
                  <Card.Text className="mb-0 fs-5">
                    Industry 4.0/5.0/6.0
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    Artificial Intelligence/Machine Learning
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    Computer Vision/Robotics
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    Natural Language Processing
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    Software Reliability/Quality Engineering
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col> */}

      {/* <Col xs={12} md={4}>
            <Card className="home_headercard_1 border-1 h-100 shadow-lg">
              <Card.Body className="text-center text-black p-5">
                <Card.Title
                  className="mb-4"
                  style={{
                    fontFamily: "'Shalimar', cursive",
                    fontSize: "2.5rem",
                    color: "blue",
                  }}
                >
                  Research Achievements
                </Card.Title>
                <div className="d-flex flex-column gap-3">
                  <Card.Text className="mb-0 fs-5">
                    Received NSERC Discovery and a Launch Supplement Grant as an
                    early career researcher in Canada (2020 - 2027)
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    (MITACS) Business Strategy Internship (BSI) Grant, Canada
                    (2025 - 2026)
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    NVIDIA Corporation Accelerated Data Science Call for
                    Proposals Award (2019)
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    Basic Science research fund as a young investigator,
                    Conacyt, Mexico (2016 - 2019)
                  </Card.Text>
                  <Card.Text className="mb-0 fs-5">
                    MITACS ACCELERATE internship Award, Canada (2010)
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      {/* <Card className="w-100 border-0">
          <Card.Body className=" text-center intro_content">
            I'm an associate professor in Information Technology at Concordia
            University of Edmonton, Alberta, Canada. Prior to that, I worked as
            an Investigador Asociado (equivalent to assistant professor) at
            CIMAT, Monterrey, Mexico. I received his Ph.D. from the University
            of Alberta, Canada. I conducted postdoctoral research at the
            University of Calgary, Canada, and Wake Forest School of Medicine,
            USA. My research interests include Artificial Intelligence, Machine
            Learning, Computer Vision, and Natural Language Processing. At
            present, I holds an NSERC discovery grant in Canada.
            <br />
            <br />
            <blockquote className="w-50 mx-auto text-center text-info mb-0 quotes_cont ">
              <p>
                {" "}
                A teacher can never truly teach unless he is still learning
                himself. A lamp can never light another lamp unless it continues
                to burn its own flame.{" "}
              </p>
              <footer className="blockquote-footer text-info">
                <cite title="Source Title">
                  Rabindranath Tagore (Nobel Laureate)
                </cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card> */}
      {/* </Container> */}
      {/*---------------------------------------Author intro ends--------------------------------------------------*/}

      <br />
      <br />
      {/* <Container fluid className="tech_cont pb-5">
        <p class="text-white tech_title text-center py-5">TEACHING</p>

        <Row>
          <Col sm className="mb-4">
            <Card style={{ width: "18rem" }} className="mx-auto mt-3 h-100">
              <Card.Body>
                <Card.Title className="text-center  mb-4 pt-4">
                  Philosophy
                </Card.Title>
                <Card.Text className="text-center card1_title text-secondary ">
                  With great enthusiasm by creating a constructive, interactive,
                  cooperative and collaborative environment that facilitates
                  learning
                </Card.Text>
                <Card className="border-0">
                  <Button className="text-center mx-auto my-2" variant="dark">
                    <NavLink
                      to="/philosophy"
                      className="fs-5 text-decoration-none text-white"
                    >
                      Click here
                    </NavLink>
                  </Button>
                </Card>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="mb-4">
            <Card style={{ width: "18rem" }} className="mx-auto mt-3 h-100">
              <Card.Body>
                <Card.Title className="text-center mb-4 pt-4">
                  PG Courses
                </Card.Title>
                <Card.Text className="text-center card1_title text-secondary mt-3">
                  Graduate Studies teaching at Concordia University of Edmonton,
                  Canada
                </Card.Text>
                <Card className="border-0">
                  <Button className="text-center mx-auto mt-5 " variant="dark">
                    <NavLink
                      to="/pgcourses"
                      className="fs-5 text-decoration-none text-white"
                    >
                      Click here
                    </NavLink>
                  </Button>
                </Card>
              </Card.Body>
            </Card>
          </Col>

          <Col sm className="mb-4">
            <Card style={{ width: "18rem" }} className="mx-auto mt-3 h-100">
              <Card.Body>
                <Card.Title className="text-center  mb-4 pt-4">
                  UG Courses
                </Card.Title>
                <Card.Text className="text-center card1_title text-secondary mt-3">
                  Undergraduate Studies teaching at Concordia University of
                  Edmonton, Canada
                </Card.Text>
                <Card className="border-0">
                  <Button className="text-center mx-auto mt-5" variant="dark">
                    <NavLink
                      to="/ugcourses"
                      className="fs-5 text-decoration-none text-white"
                    >
                      Click here
                    </NavLink>
                  </Button>
                </Card>
              </Card.Body>
            </Card>
          </Col>

          <Col sm className="mb-4">
            <Card style={{ width: "18rem" }} className="mx-auto mt-3 h-100">
              <Card.Body>
                <Card.Title className="text-center  mb-4 pt-4">
                  Supervision
                </Card.Title>
                <Card.Text className="text-center card1_title text-secondary mt-3">
                  Had the opportunity to mentor thirty-five (35) trainees having
                  multidisciplinary background from multiple institutions
                </Card.Text>
                <Card className="border-0">
                  <Button className="text-center mx-auto mt-5" variant="dark">
                    <NavLink
                      to="/supervision"
                      className="fs-5 text-decoration-none text-white"
                    >
                      Click here
                    </NavLink>
                  </Button>
                </Card>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
      {/*-------------------------------------------------Teaching content ends-------------------------------------*/}

      {/* <Container fluid className="py-5">
        <p class=" research_title text-center mt-5 mb-5 pt-5">
          RESEARCH HIGHLIGHTS
        </p>
        <Row>
          <Col>
            <Card className="mx-auto mt-3 w-75">
              <Card.Body>
                <Card.Title className="text-center pt-3">
                  Research interests
                </Card.Title>
                <br />
                <Card.Text className="text-start text-secondary ps-3  ">
                  My research interest revolves around a broad range of areas
                  such as, Artificial Intelligence, Machine Learning, Computer
                  Vision, Robotics, Computational Cognitive Science,
                  Reliability, Signal Processing, and Software Engineering. To
                  learn more...
                </Card.Text>
                <Card className="border-0">
                  <Button className="text-center mx-auto my-2" variant="dark">
                    <NavLink
                      to="/interest"
                      className="fs-5 text-decoration-none text-white"
                    >
                      Click here
                    </NavLink>
                  </Button>
                </Card>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mx-auto mt-3 w-75">
              <Card.Body>
                <Card.Title className="text-center pt-3">
                  Publications
                </Card.Title>
                <br />
                <Card.Text className="text-start text-secondary ps-3">
                  Research articles received 510 google scholar citations and
                  9823 reads in research gates till today. My present h-index,
                  i10-index, and RG score are 9, 9, and 14.15 respectively. To
                  learn more...
                </Card.Text>
                <Card className="border-0">
                  <Button className="text-center mx-auto my-2" variant="dark">
                    <NavLink
                      to="/blog"
                      className="fs-5 text-decoration-none text-white"
                    >
                      Click here
                    </NavLink>
                  </Button>
                </Card>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}

      <Container fluid className="pb-5">
        <p class=" research_title text-center">ADMINISTRATIVE ROLES</p>
        <Row>
          <Col>
            <Card className="mx-auto mt-3 w-75">
              <Card.Body>
                <Card.Title className="text-center pt-3">
                  Research interests
                </Card.Title>
                <br />
                <Card.Text className="text-start text-secondary ps-3  ">
                  My research interest revolves around a broad range of areas
                  such as, Artificial Intelligence, Machine Learning, Computer
                  Vision, Robotics, Computational Cognitive Science,
                  Reliability, Signal Processing, and Software Engineering. To
                  learn more...
                </Card.Text>
                <Card className="border-0">
                  <Button className="text-center mx-auto my-2" variant="dark">
                    <NavLink
                      to="/interest"
                      className="fs-5 text-decoration-none text-white"
                    >
                      Click here
                    </NavLink>
                  </Button>
                </Card>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mx-auto mt-3 w-75">
              <Card.Body>
                <Card.Title className="text-center pt-3">
                  Publications
                </Card.Title>
                <br />
                <Card.Text className="text-start text-secondary ps-3">
                  Research articles received 510 google scholar citations and
                  9823 reads in research gates till today. My present h-index,
                  i10-index, and RG score are 9, 9, and 14.15 respectively. To
                  learn more...
                </Card.Text>
                <Card className="border-0">
                  <Button className="text-center mx-auto my-2" variant="dark">
                    <NavLink
                      to="/blog"
                      className="fs-5 text-decoration-none text-white"
                    >
                      Click here
                    </NavLink>
                  </Button>
                </Card>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <blockquote className="w-50 mx-auto text-center text-info mb-0 quotes_cont ">
        <p>
          {" "}
          A teacher can never truly teach unless he is still learning himself. A
          lamp can never light another lamp unless it continues to burn its own
          flame.{" "}
        </p>
        <footer className="blockquote-footer text-info">
          <cite title="Source Title">Rabindranath Tagore (Nobel Laureate)</cite>
        </footer>
      </blockquote>

      {/*-------------------------------------------------Research content ends-------------------------------------*/}

      <Card.Footer className="text-center bg-white rounded-0 border-top p-2 text-secondary fw-normal others_card">
        Copyright &copy; 2025-26 Baidya Saha. All rights reserved.
      </Card.Footer>
    </>
  );
}

export default Home;
