import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function BlackNavBar() {
  const [showPublications, setShowPublications] = useState(false);

  return (
    <div>
      <Navbar expand="lg" className="others_nav" id="nav_bar_black">
        <Container fluid>
          <Navbar.Brand className="brand-style me-auto">
            <NavLink to="/">BAIDYA SAHA</NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle_black" />
          <Navbar.Collapse id="basic-navbar-navb">
            <Nav className="ms-auto others_navlink">
              {/* Home */}
              <Nav.Link className="navbar1_link fs-5">
                <NavLink
                  to="/"
                  className="fs-5 text-decoration-none text-white"
                >
                  Home
                </NavLink>
              </Nav.Link>

              {/* Teaching */}
              <NavDropdown
                title={<span style={{ color: "white" }}>Teaching</span>}
                id="basic-nav-dropdown3"
                className="navbar1_link fs-5 text-white"
              >
                <NavDropdown.Item>
                  <NavLink
                    to="/philosophy"
                    className="fs-5 text-decoration-none text-secondary"
                  >
                    Philosophy
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink
                    to="/pgcourses"
                    className="fs-5 text-decoration-none text-secondary"
                  >
                    PG Courses
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink
                    to="/ugcourses"
                    className="fs-5 text-decoration-none text-secondary"
                  >
                    UG Courses
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink
                    to="/supervision"
                    className="fs-5 text-decoration-none text-secondary"
                  >
                    Supervision
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Research Highlights */}
              <NavDropdown
                title={
                  <span style={{ color: "white" }}>Research Highlights</span>
                }
                id="basic-nav-dropdown4"
                className="navbar1_link fs-5 text-decoration-none text-secondary"
              >
                {/* Interests */}
                <NavDropdown.Item>
                  <NavLink
                    to="/interest"
                    className="fs-5 text-decoration-none text-secondary"
                  >
                    Interests
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                {/* Publications submenu (opens on hover, right side) */}
                <div
                  className="publication-dropdown-wrapper"
                  onMouseEnter={() => setShowPublications(true)}
                  onMouseLeave={() => setShowPublications(false)}
                >
                  <NavDropdown
                    show={showPublications}
                    title={
                      <span className="fs-5 text-secondary text-decoration-none">
                        Publications
                      </span>
                    }
                    id="publications-dropdown"
                    className="no-arrow-dropdown dropend"
                    drop="end"
                  >
                    <NavDropdown.Item>
                      <NavLink
                        to="/books"
                        className="fs-5 text-decoration-none text-secondary"
                      >
                        Books
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/machine-learning"
                        className="fs-5 text-decoration-none text-secondary"
                      >
                        Machine Learning
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/computer-vision"
                        className="fs-5 text-decoration-none text-secondary"
                      >
                        Computer Vision
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/robots"
                        className="fs-5 text-decoration-none text-secondary"
                      >
                        Robots
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/welding-process"
                        className="fs-5 text-decoration-none text-secondary"
                      >
                        Welding Process
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/predictive-maintenance"
                        className="fs-5 text-decoration-none text-secondary"
                      >
                        Predictive Maintenance
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/cognitive-science"
                        className="fs-5 text-decoration-none text-secondary"
                      >
                        Cognitive Science
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/nlp"
                        className="fs-5 text-decoration-none text-secondary"
                      >
                        Natural Language Processing
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/publications-others"
                        className="fs-5 text-decoration-none text-secondary"
                      >
                        Other Publications
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/long-term-goals"
                        className="fs-5 text-decoration-none text-secondary"
                      >
                        Long Term Goals
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>

                <NavDropdown.Divider />

                {/* Grants */}
                <NavDropdown.Item>
                  <NavLink
                    to="/grants"
                    className="fs-5 text-decoration-none text-secondary"
                  >
                    Grants
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Other Links */}
              <Nav.Link className="hover-shadow navbar1_link fs-5">
                <NavLink
                  to="/admin"
                  className="fs-5 text-decoration-none text-white"
                >
                  Administration
                </NavLink>
              </Nav.Link>

              <Nav.Link className="hover-shadow navbar1_link fs-5">
                <NavLink
                  to="/awards"
                  className="fs-5 text-decoration-none text-white"
                >
                  Awards
                </NavLink>
              </Nav.Link>

              <Nav.Link className="hover-shadow navbar1_link fs-5">
                <NavLink
                  to="/others"
                  className="fs-5 text-decoration-none text-white"
                >
                  Others
                </NavLink>
              </Nav.Link>

              <Nav.Link className="hover-shadow navbar1_link fs-5">
                <NavLink
                  to="/contact"
                  className="fs-5 text-decoration-none text-white"
                >
                  Contact Us
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BlackNavBar;
