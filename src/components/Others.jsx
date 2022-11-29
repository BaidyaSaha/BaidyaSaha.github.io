import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';


function Others(){
    return(<>
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
 



{/*----------------------------------------Others Header ends--------------------------------------------*/}
<Tab.Container id="left-tabs-example" defaultActiveKey="industry"  >
      <Row >
        <Col sm={3} className="border-end pe-0 pt-5">
          <Nav variant="pills" className=" flex-column">
            <Nav.Item >
              <Nav.Link eventKey="industry" className=" rounded-0 border-top-0 mt-2 py-4 text-start border-end-0 border-start-0 others_link nav-link fw-bold">INDUSTRY EXPERIENCE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="collaborators" className=" text-start py-4 rounded-0 border-top-0  border-end-0 border-start-0 others_link fw-bold">COLLABORATORS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reviewer" className="text-start py-4 rounded-0 border-top-0  border-end-0 border-start-0 others_link fw-bold">REVIEWER</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="industry">
             <p className="text-center fs-1 text-uppercase pt-5">Industry Experience</p>
             <br/>
             <br/>
             <br/>
             <br/>
             <Card className="w-75  rounded-0 mb-5 mx-auto border-top-0  border-end-0 border-start-0">
                <Card.Body>
                  <Card.Title className="mb-3 text-info">Research Consultant</Card.Title>
                  <Card.Subtitle className="mb-4 text-muted ">CIMAT, Monterrey, Mexico</Card.Subtitle>
                  <Card.Subtitle className="mb-4 text-muted ">2014 - 2019</Card.Subtitle>
                  <Card.Text className="ms-3 others_card" >
                  Automated quality inspection of the painted surface of the rearview mirrors
                  of the automobiles through laser ray and camera
                  </Card.Text>
                  <Card.Text className="ms-3 others_card">
                  Monitoring the performance and controlling the temperature of the industrial
                  furnace with minimum reosurces and cost through thermodynamic modelling
                  and evolutionary Markov Chain Monte Carlo (MCMC)
                  </Card.Text>
                  <Card.Text className="ms-3 others_card">
                  Hidden Markov Model for the temperature control inside a specialized furnace
                  to improve the production quality of the core of the transformers
                  </Card.Text>
                  <Card.Text className="ms-3 others_card">
                  Monte Carlo simulations for probabilistic seismic loss assessment
                  </Card.Text>
                  <Card.Text className="ms-3 others_card">
                  A Bayesian time series control chart and two stage sampling technique for
                  visual inspection of the electronic components
                  </Card.Text>
                  <Card.Text className="ms-3 others_card">
                  A response surface methodology and Taguchi orthogonal design for improving
                  the quality of cold metal welding for making industrial steel tubes
                  </Card.Text>
                </Card.Body>
            </Card>
                    {/*-------------------------------------card1 ends----------------------------*/}

            <Card className="w-75 rounded-0 mt-5 mx-auto border-top-0  border-end-0 border-start-0">
              <Card.Body>
                <Card.Title className="mb-3 text-info">Research Consultant</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">Acellere, Pune, India</Card.Subtitle>
                <Card.Subtitle className="mb-4 text-muted">2013-2014</Card.Subtitle>
                <Card.Text className="ms-3 others_card">Assessing the quality of the class of software on the basis of a set of metrics
                and developing a new metric by incorporating the class dependency information</Card.Text>
              </Card.Body>
            </Card>

                  {/*-------------------------------------card2 ends----------------------------*/}

            <Card className="w-75 rounded-0 mt-5 mx-auto border-top-0  border-end-0 border-start-0">
              <Card.Body>
                <Card.Title className="mb-3 text-info">2009-2010 Summer Intern</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">AQL Management Consulting Inc., Edmonton, Alberta, Canada</Card.Subtitle>
                <Card.Subtitle className="mb-4 text-muted">2009-2010 </Card.Subtitle>
                <Card.Text className="ms-3 others_card">Conducted several image processing research projects including</Card.Text>
                <Card.Text className="ms-5 others_card">Developed an autonomous passenger counting system for LRT (Light Railway
                  Transit)</Card.Text>
                <Card.Text className="ms-5 others_card">
                Built an automated tool to analyze chickens behavior monitoring
                </Card.Text>
                <Card.Text className="ms-5 others_card">
                Early disease detection of flocks using infrared imaging
                </Card.Text>
                <Card.Text className="ms-5 others_card">
                Automatic assessment of feather cover of laying hens by infrared thermography
                </Card.Text>
              </Card.Body>
            </Card>
                  {/*-------------------------------------card3 ends----------------------------*/}            

            <Card className="w-75 rounded-0 mt-5 mx-auto border-top-0  border-end-0 border-start-0">
              <Card.Body >
                <Card.Title className="mb-3 text-info">Summer Intern</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">Cognizant Technology Solutions, Kolkata, India</Card.Subtitle>
                <Card.Subtitle className="mb-4 text-muted">2005 </Card.Subtitle>
                <Card.Text className="ms-3 others_card">Developed a game theory based Economic Modelling of Optimal Bidding in
                one client, multiple vendors’ scenario in a win-win condition</Card.Text>
              </Card.Body>
            </Card>
                  {/*-------------------------------------card4 ends----------------------------*/}   

            <Card className="w-75 rounded-0 mt-5 mx-auto border-top-0  border-end-0 border-start-0">
              <Card.Body>
                <Card.Title className="mb-3 text-info">Summer Intern</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">Usha Martin Limited, Kolkata, India</Card.Subtitle>
                <Card.Subtitle className="mb-4 text-muted">2004 </Card.Subtitle>
                <Card.Text className="ms-3 others_card">Developed Software tool to facilitate Supply Chain Management System</Card.Text>
              </Card.Body>
            </Card>
                  {/*-------------------------------------card5 ends----------------------------*/}        

            <Card className="w-75 rounded-0 mt-5 mx-auto border-top-0  border-end-0 border-start-0">
              <Card.Body>
                <Card.Title className="mb-3 text-info">Summer Intern</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">ITC InfoTech India Limited , Bangalore, India</Card.Subtitle>
                <Card.Subtitle className="mb-4 text-muted">2004 </Card.Subtitle>
                <Card.Text className="ms-3 others_card">Conducted several statistical software quality projects including</Card.Text>
                <Card.Text className="ms-5 others_card">A Bayesian approach to evaluate methodology followed to establish baselines
                of build efforts on the basis of SAC (Simple/Average/Complex) methodology</Card.Text>
                <Card.Text className="ms-5 others_card">Developed software defect management system</Card.Text>
              </Card.Body>
            </Card> 
                  {/*-------------------------------------card6 ends----------------------------*/}   

            <Card className="w-75 rounded-0 mt-5 pb-3 mx-auto border-0">
              <Card.Body>
                <Card.Title className="mb-3 text-info">Summer Intern</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">Robert Bosch India Limited, Bangalore, India</Card.Subtitle>
                <Card.Subtitle className="mb-4 text-muted">2003 </Card.Subtitle>
                <Card.Text className="ms-3 others_card">Conducted several statistical data analysis & operations research projects
                including</Card.Text>
                <Card.Text className="ms-5 others_card">Estimated the efforts required to fix the number of bugs reported by the
                customer</Card.Text>
                <Card.Text className="ms-5 others_card">Developed methodology for managing project schedule whenever it overruns</Card.Text>
                <Card.Text className="ms-5 others_card">Measured statistical Customer satisfaction index (CSI) based on Customer
                Survey and Delivery delay</Card.Text>
              </Card.Body>
            </Card>     
                  {/*-------------------------------------card7 ends----------------------------*/}  
      </Tab.Pane>
            
{/*********************************************Tab1 ends**************************************************************************/}            
      <Tab.Pane eventKey="collaborators">
      <p className="text-center fs-1 text-uppercase pt-5">Collaborators</p>
          <Card className="w-75 rounded-0 mt-5 pb-3 mx-auto border-0">
            <Card.Body>
              <Card.Text className="text-center"><em className="text-info">Prof. Joseph Maldjian</em>, University of Texas Southwestern Medical Center</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Klaus Ley</em>, La Jolla Institute for Allergy & Immunology, USA</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Mauro Tambasco</em>, San Diego State University</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Mark Siprut</em>, San Diego State University</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Ross Mitchell</em>,Mayo Clinic, Scottsdale, Arizona, USA</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Sriraam Natarajan</em>,University of Texas at Dallas, USA</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Christopher Whitlow</em>,Wake Forest School of Medicine, USA</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Russell Greiner</em>,University of Alberta, Canada</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Nilanjan Ray</em>,University of Alberta, Canada</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Hong Zhang</em>,University of Alberta, Canada</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Tirtha Prasad Mukhopadhyay</em>,University of Guanajuato, Mexico</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Moisés Santillán</em>,CINVESTAV, Mexico</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Christian Scheckhuber</em>,CINVESTAV, Mexico</Card.Text>
              <Card.Text className="text-center"><em className="text-info">Prof. Dipti Prasad Mukhopadhyay</em>,Indian Statistical Institute, Kolkata, India</Card.Text>
              <Card.Text className="text-center pb-5"><em className="text-info">Prof. Amitava Bandopadhyay</em>,Indian Statistical Institute, Kolkata, India</Card.Text>   
            </Card.Body>
          </Card>
      </Tab.Pane>
{/*********************************************Tab2 ends**************************************************************************/}      



      <Tab.Pane eventKey="reviewer">
      <p className="text-center fs-1 text-uppercase pt-5">reviewer</p>
      <Card className="w-50 rounded-0 mt-5 pb-3 mx-auto border-0 ">
        <Card.Body>
          <Card.Text className="text-info fs-4">Served as a reviewer in the following journals and conferences:</Card.Text>
          <Card.Text className="ms-5 others_card">Emergeing Applications of Artificial Intelligence (EAAI), 2021</Card.Text>
          <Card.Text className="ms-5 others_card">Sustainable Computing: Informatics and Systems, 2021</Card.Text>
          <Card.Text className="ms-5 others_card">International Conference on Machine Intelligence and Signal Processing (MISP), 2021</Card.Text>
          <Card.Text className="ms-5 others_card">IEEE Transactions Image Processing</Card.Text>
          <Card.Text className="ms-5 others_card">Pattern Recognition</Card.Text>
          <Card.Text className="ms-5 others_card">IEEE Transactions of Man, Machine and Cybernatics, Part-C</Card.Text>
          <Card.Text className="ms-5 others_card">IEEE Conference of Computer Vision and Pattern Recognition (CVPR), 2014</Card.Text>
          <Card.Text className="ms-5 others_card">Asian Conference on Computer Vision (ACCV), 2010</Card.Text>
        </Card.Body>
      </Card>

      </Tab.Pane>
    </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>


    <Card.Footer className=" mt-5 text-center fs-5 bg-dark rounded-0 border-top p-3 text-white fw-normal others_card">Copyright &copy; 2022</Card.Footer>

    </>);
}

export default Others;