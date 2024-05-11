import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function BlackNavBar() {
return (
<div>

<Navbar expand="lg" className="others_nav " id='nav_bar_black'>
      <Container fluid >
      <Navbar.Brand  className="brand-style me-auto"><NavLink to='/'>BAIDYA SAHA</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id='toggle_black'/>
        <Navbar.Collapse id="basic-navbar-navb">
          <Nav className="ms-auto others_navlink ">
            <Nav.Link className=" navbar1_link fs-5"><NavLink to='/' className='fs-5 text-decoration-none text-white'>Home</NavLink></Nav.Link>
            
            <NavDropdown title="Teaching" id="basic-nav-dropdownb" className="navbar1_link text-white rounded-0">
              <NavDropdown.Item className='fs-5'><NavLink to='/philosophy' className='fs-5 text-decoration-none text-secondary '>Philosophy</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/pgcourses' className='fs-5 text-decoration-none text-secondary '>PG Courses</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/ugcourses' className='fs-5 text-decoration-none text-secondary '>UG Courses</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/supervision' className='fs-5 text-decoration-none text-secondary '>Supervision</NavLink></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research Highlights" id="basic-nav-dropdownb" className="navbar1_link text-white ">
              <NavDropdown.Item className='fs-5'><NavLink to='/interest' className='fs-5 text-decoration-none text-secondary '>Interests</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/blog' className='fs-5 text-decoration-none text-secondary '>Publications</NavLink></NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link className="hover-shadow navbar1_link fs-5"><NavLink to='/admin' className='fs-5 text-decoration-none text-white'>Administration</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5 "><NavLink to='/awards' className='fs-5 text-decoration-none text-white'>Awards</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5 "><NavLink to='/others' className='fs-5 text-decoration-none text-white'>Others</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5"><NavLink to='/contact' className='fs-5 text-decoration-none text-white'>Contact Us</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
    );
}


export default BlackNavBar;