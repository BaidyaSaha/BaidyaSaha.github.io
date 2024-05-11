import first from './image/2022.jpg';
import second from './image/2021.png';
import third from './image/2020.webp';
import four from './image/2019.png';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import BlackNavBar from './BlackNavBar';



function UGCourses(){
    return(
        <>
      <BlackNavBar/>
 
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