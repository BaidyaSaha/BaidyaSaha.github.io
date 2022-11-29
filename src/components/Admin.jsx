import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

function Admin(){
    return(<>
    <Navbar bg="white" expand="lg" className="others_nav">
      <Container fluid>
        <Navbar.Brand href="#home" className="brand-style me-auto">BAIDYA SAHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto others_navlink ">
            <Nav.Link href="/" className=" navbar1_link fs-5">Home</Nav.Link>
            
            <NavDropdown title="Teaching" id="basic-nav-dropdown2" className="navbar1_link ">
              <NavDropdown.Item href="/course_one " className='fs-5'>Philosophy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/course_two" className='fs-5'>PG Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/course_three" className='fs-5'>UG Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/course_four" className='fs-5'>Supervision</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research Highlights" id="basic-nav-dropdown2" className="navbar1_link ">
              <NavDropdown.Item href="/interest " className='fs-5'>Interests</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/blog" className='fs-5'>Publications</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="/admin" className="hover-shadow navbar1_link fs-5">Administration</Nav.Link>
            <Nav.Link href="/awards" className="hover-shadow navbar1_link fs-5 ">Awards</Nav.Link>
            <Nav.Link href="/others" className="hover-shadow navbar1_link fs-5 ">Others</Nav.Link>
            <Nav.Link href="/contact" className="hover-shadow navbar1_link fs-5">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
 
{/*----------------------------------------------Home Nav bar ends-------------------------------------------*/}
<Container fluid className="px-0 h-100">
<div className="bg_height">
          
<section class="gradient-custom-5 admin_bg h-75">
<h1 className="admin_title text-center shadow-5">ADMINISTRATION DETAILS</h1>
        
  <div class="container py-5">
    <div class="main-timeline-5">
      <div class="timeline-5 right-5">
        <div class="card ">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Chair, Mathematical and Physical Sciences and MSc-IT Program Director</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Graduate Studies Faculty Council Representative</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">One of the representatives from Science in General Faculties Council (GFC)</h5>
        
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Member of AI course curriculum development committee for Artificial Intelligence
pathway Program (AIPP) in collaboration with Norquest College</h5>
          </div>
        </div>
      </div>
      

      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Member of Faculty Hiring Committee (Math and Information Technology)</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Coordinator of Information Technology program</h5>
            
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Member of Science Faculty Council</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Co-Director (Academic) of Interdisciplinary Research Cluster on Machine
Learning & Artificial Intelligence (IRCMLAI)</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">One of the Concordia representatives for launching IT dual credit courses
(IT 101 and IT 110) to Edmonton Catholic School District (ECSD)</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Expert reviewer of CUE’s Program to Assist Grant Endeavours (PAGE)</h5>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
</div>
</Container>

{/*-----------------------------------------Admin timeline ends------------------------------------------------*/}
<Card.Footer className="text-center bg-white rounded-0 border-top pt-3 pb-2 fs-5 text-secondary fw-normal others_card">Copyright &copy; 2022</Card.Footer> 
          
          
          </>);
}

export default Admin;