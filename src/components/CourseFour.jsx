import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';



function CourseFour(){
  
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
              <NavDropdown.Item href="/course_three" className='fs-5'> UG Courses</NavDropdown.Item>
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
 
{/*----------------------------------------------Supervision Nav bar ends-------------------------------------------*/}

<Container fluid className='my-3 py-5'>
<h1 className='text-center text-uppercase cont_c4 container my-5 py-5'>Students & Thesis Supervision</h1>
</Container>


{/*----------------------------------------------------content-------------------------------------------------------*/}

<Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
<Tab eventKey="home" title="ABOUT" className='c4_tablink' >
      <div className='container container-sm  container-md'>
          <h4  class="text-center fs-1 py-4" id='home'>ABOUT</h4>
            <p className='fs-4 text-secondary c4_about '> To date, I had the opportunity to mentor thirty-five (35) trainees (2 postdocs, 2 PhDs, 11
            masters (thesis), and 20 undergraduate students) having multidisciplinary background from
            multiple institutions. This supervision has led to thirty-five (35) peer-reviewed publications.
            Two students, Adeola Ayandeyi and Rene Avalloni de Morais received the best and second
            best session paper award respectively in ICTCON 2021 conference. Victor Cheruiyot and
            Adeola Ayandeyi received First and third best paper award respectively in the graduate student
            category in student research forum 2021 organized by CUE. Among the undergraduate
            students, Subhampreet Singh Manshahia received second best paper in the Undergraduate
            Research in Science Conference of Alberta (URSCA), 2021 and Jainth Chaudhary received
            third prize in the computer science and IT Category at URSCA 2021. One of my students, Ali
            Boukrich received the Canada Graduate Scholarships - Master's program (CGS-M), $17,500,
            the most coveted award for masters' conferred by NSERC in 2021. Ali also received NSERC
            Undergraduate Student Research Award (USRA) in 2021. Another student Rene Avalloni de
            Morais received prestigious Alberta Graduate Excellence Scholarship, $11,000 in 2021. Most
            of the students who worked under my supervision have also excelled in their careers. They are
            working either as a professor, or a graduate student, or an engineer at reputed companies in
            different countries.</p>

      </div>
</Tab>

{/*--------------------------------------------POSTDOCTORAL RESEARCHER-------------------------------------------------------*/}


<Tab eventKey="PostRe" title="POSTDOCTORAL RESEARCHER">
  <div className='container c4_homepg'>
    <h4  class="text-center fs-2 text-uppercase py-5 mt-2" id='home'>Postdoctoral Researcher</h4>
    <Card className='container border-top-0  border-end-0 border-start-0 c4_doccard rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Ritwik Bhattacharya</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">PhD, Indian Statistical Institute</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep, 16 - Pres</Card.Subtitle>
        <Card.Text >
           Worked on optimization problems in the domain of Reliability<br/>
           <em>Present Position:</em> Research Professor, Tecnológico de Monterrey, Querétaro<br/>
           Campus, Mexico
        </Card.Text>
      </Card.Body>
    </Card>



    <Card className='container border-0 c4_doccard'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Apurbalal Senapati</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">PhD, Indian Statistical Institute</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Feb, 18 - Pres</Card.Subtitle>
        <Card.Text >
        
        Developing computerized algorithms for Anaphora Resolution in Natural language
        Processing (NLP)<br/>
        <em>Present Position:</em> Assistant Professor, Central Institute of Technology,
        Kokrajhar, Assam, India
        </Card.Text>
      </Card.Body>
    </Card>
    <br/>
  </div>
</Tab>





{/*--------------------------------------------Doctoral Students-------------------------------------------------------*/}
<Tab eventKey="Doc" title="DOCTORAL STUDENTS">
  <div className='container c4_homepg'>
    <h4  class="text-center fs-2 text-uppercase py-5 mt-2" id='home'>DOCTORAL STUDENTS</h4>
    <Card className='container border-top-0  border-end-0 border-start-0 c4_doccard rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Jesus Antonio Romero Hernandez</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Doctorate program in Mechatronics</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep, 14 - Pres</Card.Subtitle>
        <Card.Text >
           
        <p className='c4_mastext'>Centro de Ingeniería y Desarrollo Industrial (CIDESI), Monterrey, Mexico</p>
           <em>Thesis title:</em> Development of methodologies for reducing distortions in industrial
           welding processes through optimization with FEM analysis and artificial
           intelligence techniques.
        </Card.Text>
      </Card.Body>
    </Card>



    <Card className='container c4_mascard1 border-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>M. C. David Ortega Aranda</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Doctorate program in Mechatronics</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Jan, 16 - Pres</Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Centro de Ingeniería y Desarrollo Industrial (CIDESI), Monterrey, Mexico</p>
        <em>Thesis title:</em> Study and experimentation of artificial intelligence algorithms to
        learn bimanual tasks in a double arm robot
        </Card.Text>
      </Card.Body>
    </Card>
<br/>
<br/>
</div>
</Tab>
      
 {/*--------------------------------------------MASTER Students-------------------------------------------------------*/}     



<Tab eventKey="master" title="MASTER STUDENTS" className='grid' >

<div className='container'>
    <h4  class="text-center fs-1 text-uppercase " id='home'>MASTER STUDENTS</h4>
    <Card className='container border-top-0  border-end-0 border-start-0 c4_doccard rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Ali Boukrich</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Master of Science (MSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep,20 - Pres </Card.Subtitle>
        <Card.Text >
           <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
           <em>Project title:</em> Unifying Epidemiological and AI Modelling for Monitoring and
           Tracking Infectious Diseases
        </Card.Text>
      </Card.Body>
    </Card>



    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0  rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Rene Avalloni de Morais</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Master of Science (MSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep,20 - Pres </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
        <em>Project title:</em>  Speech Transcription (Audio-to-Text) and Sentiment Analysis
        from customer service call audio using deep learning    
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1  border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Adeniyi Adeshina</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Master of Science (MSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep,20 - Pres </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
        <em>Project title:</em> Machine learning based prediction model to defense cyber-attacks
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext  w-75'>
        <Card.Title>Adeola Ayandeyi</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Master of Science (MSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep,20 - Pres </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
        <em>Project title:</em> Assessing mental health associated with covid-19 pandemic from
        twitter data
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext  w-75'>
        <Card.Title>Victor Cheruiyot</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Master of Science (MSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep,20 - Pres </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
        <em>Project title:</em> Statistical analysis to support public policy decisions associated
        with Covid-19 pandemic
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Tanjimul Ahad Asif</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Master of Science (MSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep,20 - Pres </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
        <em>Project title:</em> Filter selfie face image on Instagram Using Deep Learning
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Lekhasree Narayanagari</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Master of Science (MSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep,20 - Pres </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
        <em>Project title:</em> Developing Machine Learning Driven Internet of Things (IOT)
        based Smart Health Care Kit 
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Adrían Alejandro Rodríguez Villarreal</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Master program in Computational Statistics</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug,16 - Jun, 2021 </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Centro de Investigación en Matemáticas (CIMAT), Monterrey, Mexico</p>
        <em>Thesis title:</em> Modelos de pronóstico de fallas basados en sensores para el monitoreo
        del estado de máquinaria utilizando Deep Learning (Sensor-based failure
        forecasting models for machinery health monitoring using Deep Learning)
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Arnulfo González Cantú</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Master program in Computational Statistics</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug,16 -Feb,19 </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Centro de Investigación en Matemáticas (CIMAT), Monterrey, Mexico</p>
        <em>Thesis title:</em> Decision Trees and their Application in Metabolic Syndrome<br/>
        <em>Present Position:</em> Endocrinologist, Vanguard Clinic, Monterrey, Mexico
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Jesús Elizalde Balboa</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Master program in Design and Development of Mechanical System</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug,15 -Apr,19 </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Centro de Ingeniería y Desarrollo Industrial (CIDESI), Monterrey, Mexico</p>
        <em>Thesis title:</em> Design and analysis of reconfigurable clamping device for industrial
        robot<br/>
        <em>Present Position:</em> Research Engineer, Centro de Ingeniería y Desarrollo
        Industrial (CIDESI), Monterrey, Mexico  
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-0 rounded-0'>
      <Card.Body className='c4_subtext  w-75'>
        <Card.Title>Alejandro Alonso Tovar</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Master program in Mechatronics</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug,15-Mar,18 Jose </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Centro de Ingeniería y Desarrollo Industrial (CIDESI), Monterrey, Mexico</p>
        <em>Thesis title:</em> Design and implementation of a controller with force feedback for
        insertion task in a industrial robot<br/>
        <em>Present Position:</em> Research Engineer, DITEM_JIZGO S de RL, Mexico.
        </Card.Text>
      </Card.Body>
    </Card>
    <br/>

  </div>
</Tab>

{/*----------------------------------------Undergraduate Students--------------------------------------------------------*/}

<Tab eventKey="undergrad" title="UNDERGRADUATE STUDENTS" >


<div className='container'>
    <h4  class="text-center fs-1 text-uppercase " id='home'>UNDERGRADUATE STUDENTS</h4>
    <Card className='container border-top-0  border-end-0 border-start-0 c4_doccard rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Rhythm Mahajan</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Science (BSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep, 21 - Pres</Card.Subtitle>
        <Card.Text >
           <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
           <em>Project title:</em> Fuzzy String Matching and its application in Natural Language
            Processing
        </Card.Text>
      </Card.Body>
    </Card>



    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0  '>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Khoa Bui</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Science (BSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep, 21 - Pres</Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
        <em>Project title:</em>  Artificial Intelligence to Create Unbeatable Games
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1  border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Aman Bahuguna</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Computer Science and Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">June, 21 - Pres</Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Chandigarh University</p>
        <em>Project title:</em> Deep Learning for COVID Induced Pneumonia Detection from Chest X-ray
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext  w-75'>
        <Card.Title>Deepak Yadav</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Computer Science and Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">June, 21 - Pres</Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Chandigarh University</p>
        <em>Project title:</em> ADeep Learning for Audio sentiment Analysis
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext  w-75'>
        <Card.Title>Gyan Ranjan</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Computer Science and Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">June, 21 - Pres     </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Chandigarh University</p>
        <em>Project title:</em> Sentiment Analysis from Text Data
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Shubhampreet Singh Manshahia</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Science (BSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep, 20 - Aug, 21   </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
        <em>Project title:</em> Developing a virtual machine learning driven cook book for finding
        optimized recipe for different dishes based on the available ingredients
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Jainth Chaudhary</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Science (BSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep, 20 - Aug, 21   </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
        <em>Project title:</em> Developing privacy preserving machine learning model for sensitive
        big data applications
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Shubham Malhotra</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Science (BSc) in Information Technology (IT)</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Sep, 20 - Aug, 21   </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Concordia University of Edmonton (CUE), Alberta, Canada</p>
        <em>Project title:</em> Developing an interactive and robust machine learning driven
        chatbot to help in self assessments of the patient having covid-19 symptoms
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Diana Laura Bañuelos Villegas</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Industrial Processes Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 14 - Jul,18    </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Universidad Autónoma de Sinaloa, Culiacán, Mexico</p>
        <em>Thesis title:</em>Gas Metal Arc Welding (GMAW) sequence optimization for an
        agricultural component using artificial intelligence algorithms
        <em>Present Position:</em> Engineer, Culiacán, Mexico
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Luis Enrique Rodríguez González</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Mechanical and Electrical Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug,12 - Dec,18   </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Universidad Autónoma de Nuevo León, Mexico and Centro de Ingeniería y
        Desarrollo Industrial (CIDESI), Monterrey, Mexico</p>
        <em>Thesis title:</em> Deep CNN for cell segmentation<br/>
        <em>Present Position:</em> ADAS Algorithms Engineer, Continental
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Aranda Sinaí Miramontes</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Mechatronics Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 11 - Jul, 16   </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Universidad tecnológica de Nayarit, Mexcio</p>
        <em>Thesis title:</em> Welding sequence optimization using genetic algorithms<br/>
        <em>Present Position:</em> Research Engineer, Centro de Ingeniería y Desarrollo
          Industrial (CIDESI), Monterrey, Mexico
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext  w-75'>
        <Card.Title>Jonathan Ramiro Martinez Galin</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Mechatronics Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 12 - Apr, 17   </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Instituto Tecnológico Superior de Poza Rica, Mexico and Centro de Ingenieríay Desarrollo Industrial (CIDESI), Monterrey, Mexico</p>
        <em>Thesis title:</em> Machine learning techniques for the “Peg-In-Hole" task<br/>
        <em>Present Position:</em> Algorithm Engineer, Continental, Queretaro, Mexico
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext  w-75'>
        <Card.Title>Harsh Verma</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Technology in Mechanical Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 13 - May, 17   </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>National Institute of Technology, Patna, India</p>
        <em>Thesis title:</em> Job scheduling problem for “N" jobs and “N" machines Using First
        Come, First Serve (FCFS) algorithm with backtracking<br/>
        <em>Present Position:</em> Senior Analyst, Capgemini, Bangalore, India
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0'>
      <Card.Body className='c4_subtext  w-75'>
        <Card.Title>Gauravdeep</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Technology in Mechanical Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 13 - May, 17   </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>National Institute of Technology, Patna, India</p>
        <em>Thesis title:</em> Job scheduling problem for “N" jobs and “N" machines Using First
        Come, First Serve (FCFS) algorithm with backtracking<br/>
        <em>Present Position:</em> Engineer, Larsen & Toubro (L & T)
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-0 rounded-0 mb-2'>
      <Card.Body className='c4_subtext  w-75'>
        <Card.Title>David Adrían Beltran Borquez</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Mechatronics Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 12 - Apr, 17   </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Instituto Tecnológico Nacional de Mexico, Los Mochis, Sinaloa, Mexico</p>
        <em>Thesis title:</em> Application of artificial intelligence algorithms for welding sequence
          optimization<br/>
        <em>Present Position:</em> Engineer, Culiacán, Mexico
        </Card.Text>
      </Card.Body>
    </Card>
<br/>
  </div>

</Tab>


{/*----------------------------------------Summer Students--------------------------------------------------------*/}

<Tab eventKey="summer" title="SUMMER STUDENTS"  >



   <div className='container'>
    <h4  class="text-center fs-1 text-uppercase " id='home'>SUMMER STUDENTS</h4>
    <Card className='container border-top-0  border-end-0 border-start-0 c4_doccard rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Debopriyo Bhattacharya</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Computer Science and Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 14 - Jul,18</Card.Subtitle>
        <Card.Text >
           <p className='c4_mastext'>Heritage Institute of Technology, Kolkata, India</p>
           <em>Parallelization of Active Contour based segmentation algorithms</em> 
        </Card.Text>
      </Card.Body>
    </Card>



    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0 '>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Ernesto Salazar Joya</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Mechatronics Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 13 -July,18</Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Instituto Tecnológico de Culiacán, Sinaloa, Mexico</p>
        <em>A Reinforcement Learning (RL) based welding sequence optimization method
        for a mechanical component</em>  
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0 '>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Andrés Sauceda Cienfuegos</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Mechanical and Electrical Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 11 - Dec,16</Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Universidad Autónoma de Nuevo León, Mexico and Centro de Ingeniería y Desarrollo Industrial (CIDESI), Monterrey, Mexico</p>
        <em>Computer vision based robot automation for peg in hole insertion task</em>  
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0 '>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Dario Alberto Cruz Santiago</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Mechatronics Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 11 - Dec, 16 </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Instituto Tecnológico Superior de Poza Rica, Veracruz, Mexico and Centro de Ingeniería y Desarrollo Industrial (CIDESI), Monterrey, Mexico</p>
        <em>Computer vision based algorithm for automatic detection of the contact points
        of the gripper for lifting objects of irregular shapes through Genetic Algorithm</em>  
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0 '>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Jesus Eloradana Ochoa Corona</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Industrial Processes</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 11 - Dec, 16 </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Universidad Autónoma de Sinaloa, Culiacán, Mexico and Centro de Ingeniería y Desarrollo Industrial (CIDESI), Monterrey, Mexico</p>
        <em>Detection and removal of chattering during drilling operation</em>  
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0 '>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Saúl Herrera</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Physics</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 11 - Dec, 16 </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Universidad Autónoma de Nuevo León, Monterrey, Mexico</p>
        <em>Developing Support Vector Machines for big data</em>  
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0  rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Daniel Cavazos</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Bachelor of Physics</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 11 - Dec, 16 </Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Universidad Autónoma de Nuevo León, Monterrey, Mexico</p>
        <em>Developing Support Vector Machines for big data</em>  
        </Card.Text>
      </Card.Body>
    </Card>

    
    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0 rounded-0 '>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Ethan Nava López</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Mechatronics Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 13 - July, 18</Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Instituto Tecnológico de Culiacán, Sinaloa, Mexico</p>
        <em>An Arduino based controller for regulating the level and temperature of the
            tank water using the combination of mulitple sensors ( ultrasonic, camera, and
            temperature) with Kalman filter</em>  
        </Card.Text>
      </Card.Body>
    </Card>

    
    <Card className='container c4_mascard1 border-top-0  border-end-0 border-start-0  rounded-0'>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Jesús Ernesto Osuna Jiménez</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Mechatronics Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 13 - July, 18</Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Instituto Tecnológico de Culiacán, Sinaloa, Mexico</p>
        <em>A Raspberry based line tracker using robot in the presence of obstacles using
            the combination of mulitple sensors (infrared, ultrasonic, and camera) with
            Kalman filter</em>  
        </Card.Text>
      </Card.Body>
    </Card>

    
    <Card className='container c4_mascard1 border-0 rounded-0 mb-5  '>
      <Card.Body className='c4_subtext w-75'>
        <Card.Title>Dorian Alexis Velazquez Sotomayor</Card.Title>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Mechatronics Engineering</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted me-3 mt-3 mb-3">Aug, 13 - July, 18</Card.Subtitle>
        <Card.Text >
        <p className='c4_mastext'>Instituto Tecnológico de Colima, Mexico</p>
        <em>Developing algorithms to segment and separate overlapping cells through Chan-
            Vese algorithm</em>  
        </Card.Text>
      </Card.Body>
    </Card>

  </div>  
</Tab>
</Tabs>

<Card.Footer className=" mt-5 text-center fs-5 bg-dark rounded-0 border-top p-3 text-white fw-normal others_card">Copyright &copy; 2022</Card.Footer>


        </>
    );
}




export default CourseFour;