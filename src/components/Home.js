import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import image from "./image/white_img.webp";
import header_img from "./image/linked_profile pic.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { NavLink } from 'react-router-dom';
import WhiteNavBar from './WhiteNavBar';


function Home(){
    return (
<>
<WhiteNavBar/>
 
{/*----------------------------------------------Home Nav bar ends-------------------------------------------*/}

<Container fluid className='home_headerct px-0  mb-5 '>



    <Card className='home_headercard mx-auto  border-0 g-0 container-sm'>
      <Card.Img src={header_img} className=' rounded-circle head_img mx-auto mt-5  mb-4'></Card.Img>
      <Card.Body className='text-center head_text text-white p-0 container-sm'>Hello, My Name is</Card.Body>
      <Card.Text className='text-center head_title mx-auto' xs={6}>BAIDYA NATH SAHA</Card.Text>
      </Card>
    <Card.Img src='https://futuregreensolutions.com.au/wp-content/uploads/2021/08/Homepage_slider_curve.png' alt="bg image" className='home_headerwave w-100  mb-0'/>
     
       
   
</Container>

{/*---------------------------------------home title ends----------------------------------------------------*/}
<Container className='w-100 my-5 py-5' >
<Card className='w-100 border-0'>
  <Card.Body className=' text-center intro_content'>I'm an associate professor in Information Technology at Concordia University of Edmonton, Alberta, Canada. 
        Prior to that, I worked as an Investigador Asociado (equivalent to assistant professor) at CIMAT, Monterrey, Mexico. 
        I received his Ph.D. from the University of Alberta, Canada.  I conducted postdoctoral research at the University of Calgary, Canada, and Wake Forest School of Medicine, USA.  
        My research interests include Artificial Intelligence, Machine Learning, Computer Vision, and Natural Language Processing.  
        At present, I holds an NSERC discovery grant in Canada.
        <br/>
        <br/>
        
        <blockquote className="w-50 mx-auto text-center text-info mb-0 quotes_cont ">
          <p>
            {' '}
            A teacher can never truly teach unless he is still learning himself. A lamp can never light another lamp unless it continues to burn its own flame.{' '}
          </p>
          <footer className="blockquote-footer text-info">
            <cite title="Source Title">Rabindranath Tagore (Nobel Laureate)</cite>
          </footer>
        </blockquote>
  </Card.Body>
</Card>
</Container>
{/*---------------------------------------Author intro ends--------------------------------------------------*/}

<br/>
<br/>
<Container fluid className='tech_cont pb-5'>
<p class="text-white tech_title text-center py-5">TEACHING</p>

<Row>
    <Col sm className='mb-4'>
        <Card style={{ width: '18rem'}} className="mx-auto mt-3 h-100">
          <Card.Body>
            <Card.Title className="text-center  mb-4 pt-4">Philosophy</Card.Title>
            <Card.Text className="text-center card1_title text-secondary ">
            With great enthusiasm by creating a constructive, interactive, cooperative and collaborative environment that facilitates learning
            </Card.Text>
            <Card className='border-0'>
                <Button  className="text-center mx-auto my-2" variant="dark"><NavLink to='/philosophy'  className='fs-5 text-decoration-none text-white'>Click here</NavLink></Button>
            </Card>
        
          </Card.Body>
        </Card>
    </Col>
    <Col sm className='mb-4'>
        <Card style={{ width: '18rem' }} className="mx-auto mt-3 h-100">
          <Card.Body>
            <Card.Title className="text-center mb-4 pt-4">PG Courses</Card.Title>
            <Card.Text className="text-center card1_title text-secondary mt-3">
            Graduate Studies teaching at Concordia University of Edmonton, Canada
            </Card.Text>
            <Card className='border-0'>
                <Button  className="text-center mx-auto mt-5 " variant="dark" ><NavLink to='/pgcourses' className='fs-5 text-decoration-none text-white'>Click here</NavLink></Button>
            </Card>
          </Card.Body>
        </Card>
    </Col>
        
    <Col sm className='mb-4'>
      <Card style={{ width: '18rem' }} className="mx-auto mt-3 h-100">
        <Card.Body>
          
          <Card.Title className="text-center  mb-4 pt-4">UG Courses</Card.Title>
          <Card.Text className="text-center card1_title text-secondary mt-3">
          Undergraduate Studies teaching at Concordia University of Edmonton, Canada
          </Card.Text>
          <Card className='border-0'>
                <Button  className="text-center mx-auto mt-5" variant="dark" ><NavLink to='/ugcourses' className='fs-5 text-decoration-none text-white'>Click here</NavLink></Button>
          </Card>
        </Card.Body>
      </Card>
    </Col>
    
    <Col sm className='mb-4'>
      <Card style={{ width: '18rem' }} className="mx-auto mt-3 h-100">
        <Card.Body>
        <Card.Title className="text-center  mb-4 pt-4">Supervision</Card.Title>
        <Card.Text className="text-center card1_title text-secondary mt-3">
        Had the opportunity to mentor thirty-five (35) trainees having multidisciplinary background from multiple institutions
          </Card.Text>
          <Card className='border-0'>
                <Button  className="text-center mx-auto mt-5" variant="dark" ><NavLink to='/supervision' className='fs-5 text-decoration-none text-white'>Click here</NavLink></Button>
          </Card>
        
        </Card.Body>
      </Card>
    </Col>
  </Row>   
</Container>
{/*-------------------------------------------------Teaching content ends-------------------------------------*/}

<Container fluid  className='py-5'>
<p class=" research_title text-center mt-5 mb-5 pt-5">RESEARCH HIGHLIGHTS</p>
<Row >
        <Col>
              <Card  className="mx-auto mt-3 w-75">
              <Card.Body>
                <Card.Title className="text-center pt-3">Research interests</Card.Title>
                <br/>
                <Card.Text className="text-start text-secondary ps-3  ">
                My research interest revolves around a broad range of areas such as, Artificial Intelligence, Machine Learning, 
                Computer Vision, Robotics, Computational Cognitive Science, Reliability, Signal Processing, and Software Engineering. To learn more...
                </Card.Text>
                <Card className='border-0'>
                <Button  className="text-center mx-auto my-2" variant="dark" ><NavLink to='/interest' className='fs-5 text-decoration-none text-white'>Click here</NavLink></Button>
                </Card>
                
              
              </Card.Body>
              </Card>
        </Col>
        <Col>
            <Card className="mx-auto mt-3 w-75">
              <Card.Body>
                
                <Card.Title className="text-center pt-3">Publications</Card.Title>
                <br/>
                <Card.Text className="text-start text-secondary ps-3">
                Research articles received 510 google scholar citations and 9823 reads in research gates till today. 
                My present h-index, i10-index, and RG score are 9, 9, and 14.15 respectively. To learn more...
                </Card.Text>
                <Card className='border-0'>
                <Button  className="text-center mx-auto my-2" variant="dark"  ><NavLink to='/blog' className='fs-5 text-decoration-none text-white'>Click here</NavLink></Button>
                </Card>
              
              </Card.Body>
            </Card>
          </Col>
      </Row>
</Container>

{/*-------------------------------------------------Research content ends-------------------------------------*/}
<Container fluid className=" mt-5 bg-dark"  >
<Container>
<Carousel >
      {/*-------------------------------slide one--------------------------------*/}
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-50 mx-auto my-5"
          src={image}
          alt="First slide"
        />
        <Container>
        <Carousel.Caption className='mb-5'>
          
          <Card className='w-50 mx-auto mb-5 border-0'>
            <Card.Title className='text-dark'>Deep learning with light</Card.Title>
            <Card.Text className='text-dark'>
            A new method uses optics to accelerate machine-learning computations on smart speakers and other low-power connected devices.
            </Card.Text>

            <Card.Text className='text-info'><a href='https://news.mit.edu/2022/optics-deep-learning-computations-1020' className='text-decoration-none'>click here to know more</a></Card.Text>
          </Card>
        </Carousel.Caption></Container>
      </Carousel.Item>
      {/*-------------------------------slide two--------------------------------*/}
      <Carousel.Item interval={600}>
        <img
          className="d-block w-50 mx-auto my-5"
          src={image}
          alt="Second slide"
        />
        <Container>
        <Carousel.Caption className='mb-5'>
        <h3 class="text-dark pb-4">Learning on the edge</h3>
          <Card className='w-50 mx-auto border-0'>
          
            <Card.Subtitle className='text-dark py-3'>A new technique enables AI models to continually learn from new data on intelligent edge devices like smartphones and sensors, reducing energy costs and privacy risks.</Card.Subtitle>
            <Card.Text className='text-info'><a href='https://news.mit.edu/2022/machine-learning-edge-microcontroller-1004' className='text-decoration-none'>click here to know more</a></Card.Text>
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
        <Carousel.Caption className='mb-5'>
        <h3 class="text-dark fs-6 pb-1">Neurodegenerative disease can progress in newly identified patterns</h3>
        <Card className='w-50 mx-auto border-0'>
         
          
            <Card.Subtitle className='text-dark fs-6 py-2 '>A machine-learning method finds patterns of health decline in ALS, informing future clinical trial designs and mechanism discovery. The technique also extends to Alzheimer’s and Parkinson’s.</Card.Subtitle>
            <Card.Text className='text-info'><a href='https://news.mit.edu/2022/neurodegenerative-disease-can-progress-newly-identified-patterns-0927' className='text-decoration-none'>click here to know more</a></Card.Text>
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
        <Carousel.Caption className='mb-5'>
        <h3 class="text-dark w-50 mx-auto fs-5 pb-1">New program to support translational research in AI, data science, and machine learning</h3>
        <Card className='w-50 mx-auto border-0'>
          
          
            <Card.Subtitle className='text-dark fs-6 py-2 '>The MIT-Pillar AI Collective will cultivate prospective entrepreneurs and drive innovation.</Card.Subtitle>
            <Card.Text className='text-info'><a href='https://news.mit.edu/2022/new-program-support-translational-research-ai-data-science-machine-learning-0927' className='text-decoration-none'>click here to know more</a></Card.Text>
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
        <Carousel.Caption className='mb-5'>
        <h3 class="text-dark w-50 mx-auto fs-5 pb-1">In-home wireless device tracks disease progression in Parkinson’s patients</h3>
        <Card className='w-50 mx-auto border-0'>
          
            <Card.Subtitle className='text-dark py-3'>By continuously monitoring a patient’s gait speed, the system can assess the condition’s severity between visits to the doctor’s office.</Card.Subtitle>
            <Card.Text className='text-info'><a href='https://news.mit.edu/2022/home-wireless-parkinsons-progression-0921' className='text-decoration-none'>click here to know more</a></Card.Text>
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
        <Carousel.Caption className='mb-5'>
        <h3 class="text-dark fs-5 pb-1">Computing for the health of the planet</h3>
        <Card className='w-50 mx-auto border-0'>
          
            <Card.Subtitle className='text-dark py-3'>The MIT Schwarzman College of Computing welcomes four new faculty members engaged in research and teaching that address climate risks and other environmental issues.</Card.Subtitle>
            <Card.Text className='text-info'><a href='https://news.mit.edu/2022/computing-health-planet-new-faculty-0913' className='text-decoration-none'>click here to know more</a></Card.Text>
          </Card>
        </Carousel.Caption>
        </Container>
      </Carousel.Item>
    </Carousel>
    </Container>
</Container>


{/*------------------------------------------carousel block ends----------------------------------------------*/}

<Card.Footer className="text-center bg-white rounded-0 border-top p-2 text-secondary fw-normal others_card">Copyright &copy; 2022</Card.Footer>      
</>
  );
   
}

export default Home;