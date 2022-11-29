import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import first from './image/2022.jpg';
import second from './image/2021.png';
import third from './image/2020.webp';
import four from './image/2019.png';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';




function UGCourses(){
    return(
        <>
        <Navbar bg="dark" expand="lg" className="others_nav ">
      <Container fluid className='py-5'>
        <Navbar.Brand href="#home" className="brand-style me-auto">BAIDYA SAHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto others_navlink ">
            <Nav.Link href="/" className=" navbar1_link text-white fs-5">Home</Nav.Link>
            
            <NavDropdown title="Teaching" id="basic-nav-dropdown1" className="navbar1_link  text-white">
              <NavDropdown.Item href="/course_one " className='fs-5'>Philosophy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/course_two" className='fs-5'>PG Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/course_three" className='fs-5'>UG Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/course_four" className='fs-5'>Supervision</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research Highlights" id="basic-nav-dropdown1" className="navbar1_link text-white">
              <NavDropdown.Item href="/interest " className='fs-5'>Interests</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/blog" className='fs-5'>Publications</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="/admin" className="hover-shadow navbar1_link fs-5 text-white ">Administration</Nav.Link>
            <Nav.Link href="/awards" className="hover-shadow navbar1_link fs-5 text-white">Awards</Nav.Link>
            <Nav.Link href="/others" className="hover-shadow navbar1_link fs-5 text-white">Others</Nav.Link>
            <Nav.Link href="/contact" className="hover-shadow navbar1_link fs-5 text-white">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
{/*----------------------------------------------Undergraduate Nav bar ends-------------------------------------------*/}




<div className='container-fluid cont_c2 mb-5'>
<div className='c2title_cont'><h1 className='text-center c3_title'>UG Studies</h1></div>
</div>

<br/>
<br/>

<Container  className='py-5 text-center'>
  <Card.Text className='fs-4'>Teaching at Concordia University of Edmonton, Canada</Card.Text>
</Container>

{/*-------------------------------------------------Course cards-------------------------------------------------------*/}

<Container className='mb-5'>
  <Row>
    <Col className='my-4' sm={6} >
    <Card className='border-dark  border-2'>
    <Row>
      <Col className='col-md-4   mx-auto my-auto'>
      <Card.Img src={first} alt="2022" className="c3_img mt-4 ms-4  "></Card.Img>
      </Col>
      <Col className='col-md-8 border-start border-dark border-1 '>
      <Card.Body>
        <ListGroup variant="flush" className='mt-2'>
          <ListGroup.Item className='pb-3  fs-5 '>Winter - Machine Leaning Basics (IT 493)</ListGroup.Item>
          <ListGroup.Item className='fs-5 pt-3'>Winter - Senior Capstone Project (IT 451 & IT 452)</ListGroup.Item>
        </ListGroup>
      </Card.Body></Col>
    </Row>
    </Card>
    </Col>
    </Row>
  {/*----------------------------------------Card 2022 ends--------------------------------------------*/}
  
  <Row>
  <Col className='my-4' md={{ span: 6, offset: 2 }}>
    <Card className='border-dark  border-2'>
      <Row>
        <Col className='col-md-4 border-end border-dark border-1 mx-auto my-auto'>
          <Card.Img src={second} alt="2021" className="c3_img "></Card.Img>
        </Col>
        <Col className='col-md-8'>
        <Card.Body>
          <ListGroup variant="flush" className='mt-4'>
            <ListGroup.Item className='p-3  fs-5 '>Winter -Senior Capstone Project (IT 451 & IT 452)</ListGroup.Item>
          </ListGroup>
        </Card.Body></Col>
      </Row>
    </Card>
    </Col>
  </Row>

  {/*----------------------------------------Card 2021 ends--------------------------------------------*/}
  <Row>
  <Col className='my-4' md={{ span: 6, offset: 4 }}>
  <Card className='border-dark  border-2'>
      <Row>
        <Col className='col-md-4 my-auto mx-auto'>
          <Card.Img src={third} alt="2020" className="c3_img"></Card.Img>
        </Col>
        <Col className='col-md-8 border-start border-dark border-1'>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className='p-3  fs-5 '>Fall, Winter - Senior Capstone Project (IT 451 & IT 452)</ListGroup.Item>
            <ListGroup.Item className='p-3  fs-5 '>Fall - Introduction to Computing Science (CMPT 111)</ListGroup.Item>
            <ListGroup.Item className='p-3  fs-5 '>Winter - Introduction to Software Development (CMPT 211)</ListGroup.Item>
            <ListGroup.Item className='p-3  fs-5 '>Winter - Introduction to Information Technology (IT 101)</ListGroup.Item>
          </ListGroup>
        </Card.Body></Col>
      </Row>
    </Card>
    </Col>
    
  </Row>

  {/*----------------------------------------Card 2020 ends--------------------------------------------*/}
  <Row>
  <Col className='my-4' md={{ span: 5, offset: 6 }}>
  <Card className='border-dark  border-2'>
      <Row>
        <Col className='col-md-4 my-auto mx-auto '>
          <Card.Img src={four} alt="2019" className="c3_img"></Card.Img>
        </Col>
        <Col className='col-md-8 border-start border-dark border-1 '>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className='p-3  fs-5 '>Fall - Introduction to Information Technology (IT 101)</ListGroup.Item>
            <ListGroup.Item className='p-3  fs-5 '>Fall - Introduction to Computing Science (CMPT 111)</ListGroup.Item>
          </ListGroup>
        </Card.Body></Col>
      </Row>
    </Card>
  </Col>
  </Row>

  {/*----------------------------------------Card 2019 ends--------------------------------------------*/}
</Container>


{/*------------------------------------------Footer ----------------------------------------------*/}

<Card.Footer className="text-center fs-5 bg-dark rounded-0 border-top p-3 text-white fw-normal others_card">Copyright &copy; 2022</Card.Footer>
        </>
    );
}




export default UGCourses;