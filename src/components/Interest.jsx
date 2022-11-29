import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Interest(){
    return (<>

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
 
{/*----------------------------------------------Interest Navbar ends-------------------------------------------*/}

<Container fluid className="bg-dark h-50 py-5 border-bottom border-5">
 <Container className="py-5 ">
        <Card className="py-4 px-4 border-0 rounded-0"> 
        <Card.Text className="text-center text-uppercase fs-1 fw-bolder py-4 text-white bg-dark text-decoration-underline"> Research Interest</Card.Text>
        </Card>
        </Container> 
</Container>

{/*----------------------------------------------Interest title ends--------------------------------------------*/}

<Card.Text className="mx-auto text-center text-decoration-underline mt-5 text-uppercase fs-3 py-4 fw-bold w-75">Highlights of my research achievements</Card.Text>
<Card className="w-75 mx-auto rounded-0 border border-1 border-info interest_abtc1 mb-5 ">
    <Card.Body>
    <ListGroup variant="flush interest_about">
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary ">Recently awarded prestigious Discovery grant for five years (2020-2025) and a launch supplement grant as an
                      early career researcher</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Received Grant on ”Machine Learning based Rapid Self-Assessment and Understanding of COVID-19 Disease
                      Progression to Support Public Policy Decisions funded by Concordia University of Edmonton</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Successfully completed prestigioius Basic Science research fund, awarded by Conacyt, Mexico titled ”Potential
                      Association between imaging phenotypes and genomic biomarkers for diagnosis of cancer” as an early career researcher</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Developed Bounding Box algorithm for brain tumor localization which are well received by Imaging Community</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Developed various algorithms to tackle different complex medical imaging problems such as optimal sequence
                      selection for deformable registration,white matter lesion segmentation from MRI, leukocyte segmentation and
                      tracking, pulmonary disease detection from proton MRI and Myocardial Border Tracking from Cardiac MRI</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Published articles in prestigious venues such as MICCAI, ACCV, ECML, Pattern Recognition, and American
                      Journal of Neuroradiology, and Pattern Recognition</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Our research articles received 510 google scholar citations and 9823 reads in research gates till today. My
                      present h-index, i10-index, and RG score are 9, 9, and 14.15 respectively</ListGroup.Item>
    </ListGroup>
    </Card.Body>
</Card>

{/*----------------------------------------------------Interest About ends-----------------------------------------*/}

<Container fluid className="int_card_bg py-5">
    <Container className='my-5' >
        <Row className="mx-auto w-75">
            <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top border-info border-5   "> 
                <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Machine Learning & AI</Card.Text>
                <Col className='text-center mt-4'><Button  className=" text-center mt-4 btn btn-dark " variant="dark" href="/interestsub">Learn More</Button></Col>
            </Col>
            <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top  border-5  border-info ">
                <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Computer Vision & Image Processing</Card.Text>
                <Col className='text-center mt-4'><Button  className=" text-center btn btn-dark " variant="dark" href="/interestsub#two">Learn More</Button></Col>
            </Col>
            <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top  border-5  border-info">
                <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Natural Language Processing</Card.Text>
                <Col className='text-center mt-4'><Button  className=" text-center btn  btn-dark" variant="dark" href="/interestsub">Learn More</Button></Col>
            </Col>
            
        </Row>
        <Row className="mt-5 mx-auto w-75">
        <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top  border-5  border-info">
            <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Industry 4.0</Card.Text>
            <Col className='text-center mt-4'><Button  className=" text-center mt-4 btn  btn-dark " variant="dark" href="/interestsub">Learn More</Button></Col>
        </Col>
        <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top  border-5  border-info">
            <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Cognitive Science</Card.Text>
            <Col className='text-center mt-4'><Button  className=" text-center mt-4 btn  btn-dark" variant="dark" href="/interestsub">Learn More</Button></Col>
        </Col>
        <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top  border-5  border-info">
            <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Multimodal Signal Processing</Card.Text>
            <Col className='text-center mt-4'><Button  className=" text-center btn  btn-dark " variant="dark" href="/interestsub">Learn More</Button></Col>
        </Col>
        </Row>
    </Container>
</Container>

{/*----------------------------------------------------Interest topics ends-----------------------------------------*/}
<Card.Footer className="text-center fs-5 bg-white rounded-0 border-top pt-3 pb-2 text-secondary fw-normal others_card">Copyright &copy; 2022</Card.Footer>
    </>);
}

export default Interest;