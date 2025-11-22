import React, { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import image from "./image/white_img.webp";
import header_img from "./image/Baidya.jpg";
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
import header_img2 from "./image/Baidya-1.jpeg";
import anotherCV from "./image/CCV-Baidya_NathSaha (2).pdf";
import idgvf from "./image/slides/IDGVF.png";
import wso from "./image/slides/WeldingSequenceOptimization.png";
import snakeAutomationGif from "./image/slides/snakeAutomation.gif";
import diversityStatementExpanded from "./image/documents/Diversity_Statement.pdf";
import diversityStatementShort from "./image/documents/Equity_Diversity_Inclusion.pdf";
import teachingStatement from "./image/documents/Teaching_Statement.pdf";
import researchStatementRobotics from "./image/documents/Research_Statement_Robotics.pdf";
import researchStatementML from "./image/documents/Research_Statement_ML.pdf";
import researchStatementIP from "./image/documents/Research_Statement_IP.pdf";
import researchStatemtentMI from "./image/documents/Research_Statement_MI.pdf";
import "bootstrap-icons/font/bootstrap-icons.css";
import WhiteNavBar from "./WhiteNavBar";
import Chatbot from "./Chatbot";

function Home() {
  const [currentImage, setCurrentImage] = useState(header_img);

  useEffect(() => {
    const images = [header_img, header_img2];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Add this useEffect in your Home component, after your existing useEffect for image switching

  const aboutMe = () => {
    const bioText = `I'm an associate professor in Information Technology at Concordia University of Edmonton, Alberta, Canada. 
    Prior to that, I worked as an Investigador Asociado, equivalent to assistant professor, at CIMAT, Monterrey, Mexico.
    I received my Ph.D. from the University of Alberta, Canada. 
    I conducted postdoctoral research at the University of Calgary, Canada, and Wake Forest School of Medicine, USA. 
    My research interests include Artificial Intelligence, Machine Learning, Computer Vision, and Natural Language Processing. 
    At present, I hold an NSERC discovery grant in Canada.`;

    const synth = window.speechSynthesis;

    // Small delay to ensure page is fully loaded
    const timer = setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(bioText);
      utterance.rate = 1;
      utterance.pitch = 1;
      synth.speak(utterance);
    }, 1000);

    // Cleanup: cancel speech if user navigates away
    return () => {
      clearTimeout(timer);
      synth.cancel();
    };
  };

  useEffect(() => {
    console.log("Home component mounted");
    const bioText = `I'm an associate professor in Information Technology at Concordia University of Edmonton, Alberta, Canada. 
    Prior to that, I worked as an Investigador Asociado, equivalent to assistant professor, at CIMAT, Monterrey, Mexico. 
    I received my Ph.D. from the University of Alberta, Canada. 
    I conducted postdoctoral research at the University of Calgary, Canada, and Wake Forest School of Medicine, USA. 
    My research interests include Artificial Intelligence, Machine Learning, Computer Vision, and Natural Language Processing. 
    At present, I hold an NSERC discovery grant in Canada.`;

    const synth = window.speechSynthesis;

    // Small delay to ensure page is fully loaded
    const timer = setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(bioText);
      utterance.rate = 1;
      utterance.pitch = 1;
      synth.speak(utterance);
    }, 1000);

    // Cleanup: cancel speech if user navigates away
    return () => {
      clearTimeout(timer);
      synth.cancel();
    };
  }, []);

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
                  {
                    name: "Industry 4.0",
                    icon: "lightbulb",
                    path: researchStatementRobotics,
                  },
                  {
                    name: "Machine Learning",
                    icon: "lightbulb",
                    path: researchStatementML,
                  },
                  {
                    name: "Computer Vision & Image Processing",
                    icon: "lightbulb",
                    path: researchStatementIP,
                  },
                  {
                    name: "Medical Image Analysis",
                    icon: "lightbulb",
                    path: researchStatemtentMI,
                  },
                ],
              },
              {
                title: "Teaching Statement",
                icon: "book",
                path: teachingStatement,
              },
              {
                title: "Diversity Statement",
                icon: "people",
                path: "/path-to-diversity.pdf",
                subItems: [
                  {
                    name: "Diversity Statement Expanded",
                    icon: "people",
                    path: diversityStatementExpanded,
                  },
                  {
                    name: "Diversity Statement Short",
                    icon: "people",
                    path: diversityStatementShort,
                  },
                ],
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

      <Container fluid className="px-0 py-3">
        <Button variant="dark" className="mx-auto d-block" onClick={aboutMe}>
          Click here to hear my story
        </Button>
      </Container>

      <Container className="w-100 py-5">
        <Row className="g-4 mx-auto" style={{ maxWidth: "1400px" }}>
          <Col xs={12} md={5}>
            <Card className="home_headercard border-0 h-100 shadow-lg">
              <Card.Img
                src={currentImage}
                className="rounded-circle head_img mx-auto mt-5 mb-4"
                style={{
                  width: "225px",
                  height: "225px",
                  opacity: 0.5,
                  filter: "alpha(opacity=40)",
                  backgroundColor: "#000",
                  transition: "opacity 0.5s ease-in-out", // Smooth fade transition
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
                interval={5000}
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
                interval={5000}
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
                interval={5000}
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
                interval={10000}
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

                      <Card.Text className="mb-0 fs-5">
                        <img
                          src={snakeAutomationGif}
                          style={{ width: "50%", height: "150px" }}
                          alt="Snake Robot Automation"
                        />
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item
                interval={5000}
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
          {/* <p class=" research_title text-center mt-5 mb-5 pt-5 text-white">
            RESEARCH HIGHLIGHTS
          </p> */}
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
                {/* --------------------------- Slide 1: Computer Vision --------------------------- */}
                <Carousel.Item interval={10000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Passenger Counting & Vehicle Detection",
                        text: "Automated people detection and tracking using optical flow (Horn-Schunck method), Hough Circle transforms, and spatio-temporal background subtraction. Published at ICIP 2011.",
                        // image: passengerCountingImg,
                        image: image, // Replace with actual image
                      },
                      {
                        title: "Thermal Image Analysis for Disease Detection",
                        text: "Non-invasive veterinary disease detection from Alberta Veterinary Surveillance Network using hierarchical variational thresholding for detecting Bovine Viral Diarrhoea and Laryngotracheitis.",
                        // image: thermalImg,
                        image: snakeAutomationGif, // Replace with actual image
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className="badge bg-primary">
                                Computer Vision (2006-2011)
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 2: Oil Sand Analysis --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Active Contour (Snake) Algorithms - IDGVF",
                        text: "Developed Interleave Directional Gradient Vector Flow for automated oil sand particle delineation with improved capture range. Based on seminal Kass et al. work (22,500+ citations).",
                        // image: snakeAlgorithmImg,
                        image: image,
                      },
                      {
                        title: "Bayesian Quad Tree (BQT) Segmentation",
                        text: "Statistical object modeling using PCA-based texture analysis with iterative splitting criteria for particle size distribution in IN-BIT bitumen extraction. Published at ACCV 2010.",
                        // image: oilSandImg,
                        image: image,
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className="badge bg-success">
                                Oil Sand Particle Analysis
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 2b: IDGVF Equations --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {/* Left Column - Equations */}
                    <Col xs={12} md={6}>
                      <Card className="mx-auto border-0 bg-light shadow-sm h-100">
                        <Card.Body className="p-3">
                          <Card.Title className="text-dark mb-3 text-center">
                            <strong>IDGVF Algorithm</strong>
                          </Card.Title>

                          {/* Algorithm Container */}
                          <div
                            style={{
                              border: "3px solid #2196F3",
                              borderRadius: "10px",
                              padding: "15px",
                              backgroundColor: "#fff",
                              textAlign: "left",
                              fontSize: "0.85rem",
                            }}
                          >
                            {/* For loop header */}
                            <p
                              style={{
                                color: "#d32f2f",
                                fontStyle: "italic",
                                marginBottom: "10px",
                              }}
                            >
                              <strong>for</strong> i = 1 to n
                            </p>

                            {/* Rho equation */}
                            <div
                              style={{
                                marginBottom: "10px",
                                paddingLeft: "15px",
                              }}
                            >
                              <p style={{ color: "#00695c", margin: 0 }}>
                                ρ(x, y) = max(0,
                                <span
                                  style={{
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      borderBottom: "1px solid #000",
                                      display: "block",
                                      padding: "1px 3px",
                                      fontSize: "0.8rem",
                                    }}
                                  >
                                    (x − x<sub>0</sub>
                                    <sup>i</sup>)(∂I/∂x) + (y − y<sub>0</sub>
                                    <sup>i</sup>)(∂I/∂y)
                                  </span>
                                  <span
                                    style={{
                                      display: "block",
                                      padding: "1px 3px",
                                      fontSize: "0.8rem",
                                    }}
                                  >
                                    √[(x − x<sub>0</sub>
                                    <sup>i</sup>)<sup>2</sup> + (y − y
                                    <sub>0</sub>
                                    <sup>i</sup>)<sup>2</sup>]
                                  </span>
                                </span>
                                )
                              </p>
                            </div>

                            {/* Compute force field */}
                            <p
                              style={{
                                color: "#00695c",
                                fontWeight: "bold",
                                marginBottom: "8px",
                                paddingLeft: "15px",
                              }}
                            >
                              Compute force field (u(x, y), v(x, y)) by
                            </p>

                            {/* Diffusion equations */}
                            <div
                              style={{
                                paddingLeft: "15px",
                                marginBottom: "8px",
                                fontSize: "0.8rem",
                              }}
                            >
                              <p style={{ marginBottom: "5px" }}>
                                ∂u/∂t = exp(−ρ/K)∇<sup>2</sup>u −
                                (1−exp(−ρ/K))(u − ∂ρ/∂x)
                              </p>
                              <p style={{ marginBottom: "10px" }}>
                                ∂v/∂t = exp(−ρ/K)∇<sup>2</sup>v −
                                (1−exp(−ρ/K))(v − ∂ρ/∂y)
                              </p>
                            </div>

                            {/* Boundary condition - green box */}
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                style={{
                                  border: "2px solid #4CAF50",
                                  borderRadius: "6px",
                                  padding: "6px 10px",
                                  marginLeft: "15px",
                                  fontSize: "0.8rem",
                                }}
                              >
                                <p style={{ color: "#00695c", margin: 0 }}>
                                  <strong>(u, v) = n(x, y),</strong> for (x, y)
                                  ∈ ∂Ω
                                </p>
                              </div>
                              <div
                                style={{
                                  color: "#1565C0",
                                  fontWeight: "bold",
                                  fontSize: "0.7rem",
                                  marginLeft: "10px",
                                  lineHeight: "1.2",
                                }}
                              >
                                Dirichlet
                                <br />
                                Boundary
                              </div>
                            </div>

                            {/* Snake evolution equations */}
                            <div
                              style={{
                                paddingLeft: "15px",
                                fontSize: "0.8rem",
                              }}
                            >
                              <p style={{ marginBottom: "5px" }}>
                                X<sup>i+1</sup> = X<sup>i</sup> + Δt(α
                                <span
                                  style={{
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      borderBottom: "1px solid #000",
                                      display: "block",
                                    }}
                                  >
                                    d<sup>2</sup>X
                                  </span>
                                  <span>
                                    ds<sup>2</sup>
                                  </span>
                                </span>
                                − β
                                <span
                                  style={{
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      borderBottom: "1px solid #000",
                                      display: "block",
                                    }}
                                  >
                                    d<sup>4</sup>X
                                  </span>
                                  <span>
                                    ds<sup>4</sup>
                                  </span>
                                </span>
                                + u)
                              </p>
                              <p style={{ marginBottom: "5px" }}>
                                Y<sup>i+1</sup> = Y<sup>i</sup> + Δt(α
                                <span
                                  style={{
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      borderBottom: "1px solid #000",
                                      display: "block",
                                    }}
                                  >
                                    d<sup>2</sup>Y
                                  </span>
                                  <span>
                                    ds<sup>2</sup>
                                  </span>
                                </span>
                                − β
                                <span
                                  style={{
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      borderBottom: "1px solid #000",
                                      display: "block",
                                    }}
                                  >
                                    d<sup>4</sup>Y
                                  </span>
                                  <span>
                                    ds<sup>4</sup>
                                  </span>
                                </span>
                                + v)
                              </p>
                            </div>

                            {/* End */}
                            <p
                              style={{
                                color: "#d32f2f",
                                fontStyle: "italic",
                                marginTop: "10px",
                                marginBottom: 0,
                              }}
                            >
                              <strong>end</strong>
                            </p>
                          </div>

                          <Card.Text className="text-info mt-2 text-center">
                            <span className="badge bg-success">
                              IDGVF Algorithm
                            </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    {/* Right Column - Image */}
                    <Col xs={12} md={6}>
                      <Card className="mx-auto border-0 text-center bg-light shadow-sm h-100">
                        <Card.Body className="p-3 d-flex flex-column justify-content-center">
                          <Card.Title className="text-dark mb-3">
                            <strong>Oil Sand Particle Segmentation</strong>
                          </Card.Title>
                          <img
                            className="d-block mx-auto"
                            src={idgvf}
                            alt="IDGVF Algorithm Diagram"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "350px",
                              objectFit: "contain",
                              borderRadius: "8px",
                            }}
                          />
                          <Card.Text
                            className="text-dark mt-3"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Comparison of GVF vs IDGVF showing improved capture
                            range and contour evolution for particle
                            delineation.
                          </Card.Text>
                          <Card.Text className="text-info mt-2">
                            <span className="badge bg-success">
                              Oil Sand Particle Analysis
                            </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 3: Robotics & Automation --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Automated Peg-Hole Insertion",
                        text: "AI-controlled Motoman SDA20 robot using ML classifiers (Naive Bayes, Neural Networks, SVM, Decision Trees) with F/T sensor feedback. Published in LNAI 2016 & SSRG-IJCSE 2016.",
                        // image: pegHoleImg,
                        image: image,
                      },
                      {
                        title: "Welding Sequence Optimization",
                        text: "Integrating FEM with AI techniques (Genetic Algorithm, Reinforcement Learning, Graph Search) to minimize deformation. Reduced simulations from 115 to 38 for 8 weld beads.",
                        // image: weldingImg,
                        image: wso,
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className="badge bg-warning text-dark">
                                Robotics & Manufacturing (2014-2019)
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 4: Online Inspection --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Online Welding Inspection via Kalman Filter",
                        text: "Real-time tracking of molten metal droplets using Kalman filtering to detect welding defects: overlap, spatter, undercut, and porosity during arc welding process.",
                        // image: kalmanImg,
                        image: image,
                      },
                      {
                        title: "Wire Arc Additive Manufacturing Optimization",
                        text: "Parameter optimization using non-linear regression and Taguchi L25 experimental design (6 factors, 5 levels) for controlling weld bead height, width, and sinusoidal profile.",
                        // image: weldingImg,
                        image: image,
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className="badge bg-danger">
                                Quality Control & Inspection
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 5: Industrial AI Applications --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Chattering Detection in Drilling",
                        text: "Vibration analysis using SVM-based nonparametric control charts for real-time detection of machining anomalies and statistical process quality monitoring.",
                        // image: chatteringImg,
                        image: image,
                      },
                      {
                        title: "Paint Defect Detection in Automotive",
                        text: "Laser and camera-based system for detecting paint defects in automotive rear-view mirrors, focusing on critical visibility areas (upper front, lower front, internal side).",
                        // image: image,
                        image: image,
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className="badge bg-secondary">
                                Industrial AI Applications
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 6: Smart Manufacturing --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Industrial Augmented Reality",
                        text: "AR applications for welding sequence training, virtual shipping method validation, quality virtual checklists, and Process Failure Mode & Effect Analysis (PFMEA) visualization.",
                        // image: arImg,
                        image: image,
                      },
                      {
                        title: "Furnace Temperature Control with AI",
                        text: "AI-powered monitoring using neural networks, linear regression, and time series analysis. Optimization via Genetic Algorithms, Differential Evolution, and MCMC methods (~747m³ gas consumed).",
                        // image: furnaceImg,
                        image: image,
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className="badge bg-info text-dark">
                                Smart Manufacturing & Industry 4.0
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 7: Test Case & Effort Estimation --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Bayesian Effort Evaluation for Build Tasks",
                        text: "Establishing baselines for Simple/Average/Complex task efforts using Bayesian probability. 10-fold cross validation showed planned vs actual: Simple <32/16, Average 32-56/41.52, Complex >56/90.8 hours.",
                        image: image,
                      },
                      {
                        title: "Test Case Selection Optimization",
                        text: "Multi-objective optimization maximizing coverage based on Usage, Criticality, and Probability of Failure. Integer programming approach with functional and environmental constraints.",
                        image: image,
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className="badge bg-dark">
                                Software Engineering & Quality
                              </span>
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
          {/* <p class=" research_title text-center mt-5 mb-5 pt-5 text-white">
            TEACHING HIGHLIGHTS
          </p> */}
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
                {/* --------------------------- Slide 1: Multicultural Experience & Background --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Multicultural Teaching Experience",
                        text: "Teaching across diverse cultures and languages: India (নমস্কার, नमस्ते), Mexico (Hola), United States & Canada (Hello). Passionate about education since childhood.",
                        image: image,
                        badge: "Global Educator",
                        badgeColor: "bg-primary",
                      },
                      {
                        title: "Educational Background",
                        text: "Bachelor in Mechanical Engineering → M.Tech in Quality, Reliability & Operations Research → M.Tech in Computer Science → PhD in Computer Science. Comprehensive interdisciplinary foundation.",
                        image: image,
                        badge: "Academic Journey",
                        badgeColor: "bg-success",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className={`badge ${item.badgeColor}`}>
                                {item.badge}
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 2: Teaching Interests --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Core Computing Courses",
                        text: "Introduction to Computing (Fall 2006), Programming and Analysis of Algorithm (Fall 2016), Numerical Methods and Optimization (Winter 2007, Fall 2008, Fall 2009, Fall 2017, Winter 2018).",
                        image: image,
                        badge: "Foundational Courses",
                        badgeColor: "bg-info",
                      },
                      {
                        title: "AI & Machine Learning Courses",
                        text: "Artificial Intelligence (Fall 2015), Machine Learning and Big Data (Winter 2016), AI and its Application in Robotics (Fall 2016), Optimization in Image Analysis (Fall 2007, Fall 2017, Fall 2018).",
                        image: image,
                        badge: "Advanced AI/ML",
                        badgeColor: "bg-danger",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className={`badge ${item.badgeColor}`}>
                                {item.badge}
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 3: Specialized Courses --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Medical & Graphics Courses",
                        text: "Medical Image Processing (Winter 2018), 3D Graphics and Animation with 3DS Max (Winter 2011). Combining technical expertise with specialized domain applications.",
                        image: image,
                        badge: "Specialized Teaching",
                        badgeColor: "bg-warning text-dark",
                      },
                      {
                        title: "Research Interests in Teaching",
                        text: "Software Engineering, Image Processing, AI, Machine Learning, Computer Vision, Medical Imaging, BioInformatics, Robotics, Welding, Wire Arc Additive Manufacturing, Robot Arm Design.",
                        image: image,
                        badge: "Interdisciplinary",
                        badgeColor: "bg-secondary",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className={`badge ${item.badgeColor}`}>
                                {item.badge}
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 4: Thesis Supervision --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Thesis Supervision Areas",
                        text: "Undergraduate: Leukocyte Detection, Spiral Bevel Gearbox Design. M.Tech CS: State-of-the-art & Proposed Snake algorithms. PhD: Software Effort, Schedule, and Defect Estimation.",
                        image: image,
                        badge: "Student Mentorship",
                        badgeColor: "bg-primary",
                      },
                      {
                        title: "Student Project: Robot Gripper Design",
                        text: "Supervised students in designing adaptive and reconfigurable robot grippers using FEM analysis. Hands-on experience with industrial robotics applications.",
                        image: image,
                        badge: "Robotics Projects",
                        badgeColor: "bg-success",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className={`badge ${item.badgeColor}`}>
                                {item.badge}
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 5: Industrial Experience --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Software Engineering Industry Projects",
                        text: "Nonparametric Bootstrapping for bug fixing effort estimation. Integer Programming for test case selection optimization. Data-driven online project schedule controlling to reduce delay.",
                        image: image,
                        badge: "Industry Experience",
                        badgeColor: "bg-dark",
                      },
                      {
                        title: "Quality & Defect Management",
                        text: "Statistical Customer Satisfaction Index (SCSI) based on delivery, quality & feedback. S/A/C baseline methodology using Bayes' theorem. Regression-based software defect management system.",
                        image: image,
                        badge: "Quality Engineering",
                        badgeColor: "bg-info",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className={`badge ${item.badgeColor}`}>
                                {item.badge}
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 6: Research Grants --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title: "Major Research Grant - Conacyt Mexico",
                        text: "Potential Association between image-based phenotypes and genomic biomarkers for cancer therapeutic and prognostic decisions. Basic Science research fund as young investigator ($600,000, 2016-2019).",
                        image: image,
                        badge: "$600,000 Grant",
                        badgeColor: "bg-danger",
                      },
                      {
                        title: "Applied Research Grants",
                        text: "Automatic passenger counting for Edmonton LRT ($30,000). Thermal image analysis for non-invasive disease detection from Alberta Veterinary Surveillance Network ($15,000).",
                        image: image,
                        badge: "Applied Projects",
                        badgeColor: "bg-success",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className={`badge ${item.badgeColor}`}>
                                {item.badge}
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>

                {/* --------------------------- Slide 7: Curriculum Design --------------------------- */}
                <Carousel.Item interval={1000}>
                  <Row className="justify-content-center g-4 pb-5">
                    {[
                      {
                        title:
                          "Curriculum Design: MSc in Computational Statistics",
                        text: "Designed curriculum using Information Retrieval techniques. Referenced programs from UCL, NYU, UCF, and University of Maryland. Used cosine similarity for course matching.",
                        image: image,
                        badge: "Curriculum Development",
                        badgeColor: "bg-primary",
                      },
                      {
                        title: "Research Impact & Citations",
                        text: "329 total citations, h-index: 8, i10-index: 7. Top cited: 'Quick detection of brain tumors using symmetry' (84 citations), 'Image thresholding by variational minimax' (51 citations).",
                        image: image,
                        badge: "Research Impact",
                        badgeColor: "bg-warning text-dark",
                      },
                    ].map((item, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                          <img
                            className="d-block w-75 mx-auto mt-4"
                            src={item.image}
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
                              <span className={`badge ${item.badgeColor}`}>
                                {item.badge}
                              </span>
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

      {/* <Container fluid className="pb-5">
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
      </Container> */}

      <p className="research_title text-center mt-5 mb-5 pt-5">
        ADMINISTRATIVE ROLES
      </p>

      <Container fluid className="mt-5 bg-dark">
        <Container className="py-5">
          <Carousel>
            {/* --------------------------- Slide 1: Leadership Positions --------------------------- */}
            <Carousel.Item interval={1000}>
              <Row className="justify-content-center g-4 pb-5">
                {[
                  {
                    title: "Academic Leadership at CUE",
                    text: "Associate Professor (July 2022 - Present), Assistant Professor (July 2019 - June 2022). Chair of Mathematical and Physical Sciences (2021-2024) at Concordia University of Edmonton, Canada.",
                    image: image,
                    badge: "Leadership",
                    badgeColor: "bg-primary",
                  },
                  {
                    title: "Program Director & Coordinator",
                    text: "MSc-IT Program Director (June 2021 - June 2024). Coordinator, Information Technology Program (July 2019 - June 2021). Developer of New Courses for BSc and MSc in IT Programs (July 2021 - Present).",
                    image: image,
                    badge: "Program Management",
                    badgeColor: "bg-success",
                  },
                ].map((item, idx) => (
                  <Col xs={12} md={6} key={idx}>
                    <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                      <img
                        className="d-block w-75 mx-auto mt-4"
                        src={item.image}
                        alt={item.title}
                      />
                      <Card.Body>
                        <Card.Title className="text-dark">
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-dark">{item.text}</Card.Text>
                        <Card.Text className="text-info">
                          <span className={`badge ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>

            {/* --------------------------- Slide 2: Research Cluster & Industry Liaison --------------------------- */}
            <Carousel.Item interval={1000}>
              <Row className="justify-content-center g-4 pb-5">
                {[
                  {
                    title: "Research Cluster Leadership",
                    text: "Co-Director (Academic) of Interdisciplinary Research Cluster on Machine Learning & Artificial Intelligence (IRCMLAI) (June 2021 - June 2024).",
                    image: image,
                    badge: "Research Leadership",
                    badgeColor: "bg-danger",
                  },
                  {
                    title: "Industry Liaison",
                    text: "Industry Liaison for Promoting AI and ML-Based Industrial Research through CIAR (July 2022 - July 2024). Bridging academia and industry for collaborative research initiatives.",
                    image: image,
                    badge: "Industry Partnerships",
                    badgeColor: "bg-info",
                  },
                ].map((item, idx) => (
                  <Col xs={12} md={6} key={idx}>
                    <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                      <img
                        className="d-block w-75 mx-auto mt-4"
                        src={item.image}
                        alt={item.title}
                      />
                      <Card.Body>
                        <Card.Title className="text-dark">
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-dark">{item.text}</Card.Text>
                        <Card.Text className="text-info">
                          <span className={`badge ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>

            {/* --------------------------- Slide 3: Educational Partnerships --------------------------- */}
            <Carousel.Item interval={1000}>
              <Row className="justify-content-center g-4 pb-5">
                {[
                  {
                    title: "Dual Credit Courses Initiative",
                    text: "Concordia Representative for Launching IT Dual Credit Courses (IT 101 and IT 110) with the Edmonton Catholic School District (ECSD) (June 2021 - June 2024).",
                    image: image,
                    badge: "K-12 Partnerships",
                    badgeColor: "bg-warning text-dark",
                  },
                  {
                    title: "AI Pathway Program",
                    text: "Member, AI Course Curriculum Development Committee for the Artificial Intelligence Pathway Program (AIPP), in collaboration with NorQuest College (June 2021 - June 2024).",
                    image: image,
                    badge: "Curriculum Development",
                    badgeColor: "bg-secondary",
                  },
                ].map((item, idx) => (
                  <Col xs={12} md={6} key={idx}>
                    <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                      <img
                        className="d-block w-75 mx-auto mt-4"
                        src={item.image}
                        alt={item.title}
                      />
                      <Card.Body>
                        <Card.Title className="text-dark">
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-dark">{item.text}</Card.Text>
                        <Card.Text className="text-info">
                          <span className={`badge ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>

            {/* --------------------------- Slide 4: Council Representation --------------------------- */}
            <Carousel.Item interval={1000}>
              <Row className="justify-content-center g-4 pb-5">
                {[
                  {
                    title: "General Faculties Council (GFC)",
                    text: "GFC Representative (June 2021 - June 2024). Contributing to university-wide academic governance and policy development at Concordia University of Edmonton.",
                    image: image,
                    badge: "University Governance",
                    badgeColor: "bg-primary",
                  },
                  {
                    title: "Graduate & Science Faculty Councils",
                    text: "Representative, Graduate Studies Faculty Council (July 2019 - June 2021). Member, Science Faculty Council (July 2019 - Present). Active participation in faculty governance.",
                    image: image,
                    badge: "Faculty Governance",
                    badgeColor: "bg-success",
                  },
                ].map((item, idx) => (
                  <Col xs={12} md={6} key={idx}>
                    <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                      <img
                        className="d-block w-75 mx-auto mt-4"
                        src={item.image}
                        alt={item.title}
                      />
                      <Card.Body>
                        <Card.Title className="text-dark">
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-dark">{item.text}</Card.Text>
                        <Card.Text className="text-info">
                          <span className={`badge ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>

            {/* --------------------------- Slide 5: Committee Memberships --------------------------- */}
            <Carousel.Item interval={1000}>
              <Row className="justify-content-center g-4 pb-5">
                {[
                  {
                    title: "Faculty Hiring Committee",
                    text: "Member, Faculty Hiring Committee (Mathematics, Information Technology, Science, and Management) (July 2019 - June 2024). Contributing to faculty recruitment and selection.",
                    image: image,
                    badge: "Hiring & Recruitment",
                    badgeColor: "bg-dark",
                  },
                  {
                    title: "Program Review & Development",
                    text: "Program Review Committee Member for MISAM/MISSM programs (July-August 2022). MSc-IT program development committee member (July 2019 - December 2020).",
                    image: image,
                    badge: "Program Development",
                    badgeColor: "bg-info",
                  },
                ].map((item, idx) => (
                  <Col xs={12} md={6} key={idx}>
                    <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                      <img
                        className="d-block w-75 mx-auto mt-4"
                        src={item.image}
                        alt={item.title}
                      />
                      <Card.Body>
                        <Card.Title className="text-dark">
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-dark">{item.text}</Card.Text>
                        <Card.Text className="text-info">
                          <span className={`badge ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>

            {/* --------------------------- Slide 6: Grant Review & International Experience --------------------------- */}
            <Carousel.Item interval={1000}>
              <Row className="justify-content-center g-4 pb-5">
                {[
                  {
                    title: "Grant Review Expertise",
                    text: "Expert reviewer of CUE's Program to Assist Grant Endeavours (PAGE) (June 2021 - Present). Evaluating and supporting research grant applications within the university.",
                    image: image,
                    badge: "Grant Review",
                    badgeColor: "bg-danger",
                  },
                  {
                    title: "International Program Development",
                    text: "Program Development Committee Member, Master's in Computational Statistics, Centro de Investigación en Matemáticas (CIMAT), Monterrey, Mexico (2015). International academic collaboration.",
                    image: image,
                    badge: "International Experience",
                    badgeColor: "bg-warning text-dark",
                  },
                ].map((item, idx) => (
                  <Col xs={12} md={6} key={idx}>
                    <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                      <img
                        className="d-block w-75 mx-auto mt-4"
                        src={item.image}
                        alt={item.title}
                      />
                      <Card.Body>
                        <Card.Title className="text-dark">
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-dark">{item.text}</Card.Text>
                        <Card.Text className="text-info">
                          <span className={`badge ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>

            {/* --------------------------- Slide 7: Diversity & Enrollment Initiatives --------------------------- */}
            <Carousel.Item interval={1000}>
              <Row className="justify-content-center g-4 pb-5">
                {[
                  {
                    title: "Diversity & Enrollment Initiatives",
                    text: "Program Review Committee Member, contributing to the Recruitment Group to enhance diversity, increase domestic enrollment, and strengthen industry partnerships for MISAM/MISSM programs (July-August 2022).",
                    image: image,
                    badge: "Diversity & Inclusion",
                    badgeColor: "bg-primary",
                  },
                  {
                    title: "Course Development",
                    text: "Developer of New Courses for the BSc and MSc in IT Programs (July 2021 - Present). Continuously updating curriculum to meet industry demands and academic standards.",
                    image: image,
                    badge: "Curriculum Innovation",
                    badgeColor: "bg-success",
                  },
                ].map((item, idx) => (
                  <Col xs={12} md={6} key={idx}>
                    <Card className="w-84 mx-auto border-0 text-center bg-light shadow-sm h-100">
                      <img
                        className="d-block w-75 mx-auto mt-4"
                        src={item.image}
                        alt={item.title}
                      />
                      <Card.Body>
                        <Card.Title className="text-dark">
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-dark">{item.text}</Card.Text>
                        <Card.Text className="text-info">
                          <span className={`badge ${item.badgeColor}`}>
                            {item.badge}
                          </span>
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
