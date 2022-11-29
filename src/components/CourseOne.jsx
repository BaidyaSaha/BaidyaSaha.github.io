import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import no1 from './image/no1.png';
import no2 from './image/no2.png';
import no3 from './image/no3.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function CourseOne(){
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
 

{/*----------------------------------------Philosophy Header ends--------------------------------------------*/}

<Container>
  <Row>
    <Col className=' text-center text-uppercase my-auto px-0 me-5'><Card.Text className=' c1_title '>PHILOSOPHY</Card.Text></Col>
    <Col className='c1_content  fs-2 text-secondary py-auto h-50'>As an educational architect, I foster the essence of learning with great enthusiasm by creating
        a constructive, interactive, cooperative and collaborative environment that facilitates learning. My teaching philosophy
        centers around three perspectives. </Col>
  </Row>
</Container>



{/*----------------------------Philosophy header ends------------------------------------------------------*/}
<Container className='mt-5 pt-5 mb-5'>
  <Row className='mx-auto'>
  {/*-----------------Card1-------------------------*/}
  <Col className='col-sm-3 c1_card1 me-2 h-75 mb-4 ms-4'>
      <Card className='rounded-0 h-75'>
        <Card.Body>
          <Card.Img src={no1} className='c1_img_size  mb-5 mt-3 '></Card.Img>
          <Card.Text className='fs-3  text-secondary c1_card_cont'>First, I make sure that the classrooms incorporate a diversity of learning techniques
            that encourages a diversity of students. While I teach, I don't think that I teach “a class of students", rather I teach
            “a set of unique individuals". I meet with each of my students on a one-on-one basis during the first month of each
            semester to facilitate a diversified approach to learning course topics and of planting them on a wide spectrum so that
            it could satisfy the interests of students from diverse backgrounds.</Card.Text>
        </Card.Body>
      </Card>
  </Col>
  {/*-----------------Card2-------------------------*/}
  <Col className='col-sm-3 c1_card1 me-2 h-75 mb-4'>
    <Card className='rounded-0 h-75 '>
      <Card.Body>
      <Card.Img src={no2} className='c1_img_size mb-5 mt-3'></Card.Img>
          <Card.Text className='fs-3  text-secondary c1_card_cont'>Second, while I teach I don’t confine myself only
            to textbook materials, rather I demonstrate the “big picture" of the topic, experiential case studies, ongoing research,
            industry applications and probable future research directions. Experiential learning provides greater insights and longer
            retention than textbook materials.</Card.Text>
      </Card.Body>
    </Card>
  </Col>
  {/*-----------------Card3-------------------------*/}
  <Col className='col-sm-3 c1_card1 me-5 h-75 mb-4'>
    <Card className='rounded-0 h-75'>
      <Card.Body>
        <Card.Img src={no3} className='c1_img_size mb-5 mt-3'></Card.Img>
        <Card.Text className='fs-3  text-secondary c1_card_cont'>Third, I do not believe in hand-holding the students. It is my experience that setting
            firm and high expectations, and carrying through on these expectations motivates students to rise to the occasion,
            resulting in students working more effectively and therefore learning more. I choose content and activities that are both
            significant and challenging for the students so that they are stimulated to think “beyond" their comfort zone and feel
            involved in their own learning process.</Card.Text>
      </Card.Body>
    </Card>
  </Col>
  </Row>
</Container>

<hr className='c1_line text-center'/>
<Container className='container-sm fs-3 text-center text-secondary c1_end_content mb-5'>
<Card className='w-75 mx-auto border-0'>
  <Card.Text>
  Similarly, I facilitate the activities and class discussions that encourage students
  to make connections between my field of study and other disciplines. Collaborative learning is core to my teaching
  philosophy in order to promote reflective thinking and improve the students’ communicative and trans-cultural skills. I
  try to create “classrooms without walls" where each student gets the opportunity of developing his ability to deal with
  the real world challenges. I encourage students to take responsibility and hold them accountable for their actions and
  performance so that they can lead their work in future.
  </Card.Text>
</Card>

</Container>
{/*------------------------------------Final content ends----------------------------------------*/}

<Card.Footer className=" mt-5 text-center fs-5 bg-dark rounded-0 border-top p-3 text-white fw-normal others_card">Copyright &copy; 2022</Card.Footer>

        </>
    );
}




export default CourseOne;