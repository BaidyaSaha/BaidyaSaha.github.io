import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


function Blog(){
    return (
        <>
      <Navbar bg="white" expand="lg" className="others_nav">
      <Container fluid>
        <Navbar.Brand href="#home" className="brand-style me-auto">BAIDYA SAHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto others_navlink ">
            <Nav.Link href="/" className=" navbar1_link fs-5 ">Home</Nav.Link>
            
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
            
            <Nav.Link href="/admin" className="hover-shadow navbar1_link fs-5 ">Administration</Nav.Link>
            <Nav.Link href="/awards" className="hover-shadow navbar1_link fs-5 ">Awards</Nav.Link>
            <Nav.Link href="/others" className="hover-shadow navbar1_link fs-5 ">Others</Nav.Link>
            <Nav.Link href="/contact" className="hover-shadow navbar1_link fs-5">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
{/*----------------------------------------------Publication Nav bar ends-------------------------------------------*/}


<div class="blog_container">


  <div class="row">

  <div class="col-md-4 sidenav_bar  ">
  
    <div id="scrollspy1" class=" sticky-top section_list">
   <br/>
   <br/>
   
      <ul class="nav flex-column nav-pills menu-sidebar section_menu">
        <li class="nav-item">
          <a class="nav-link text-dark p-3 space_btw link-dark" href="#example-1">Books</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark p-3 space_btw link-dark" href="#example-2">Machine Learning</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark p-3 space_btw link-dark" href="#example-3">Computer Vision</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark p-3 space_btw link-dark" href="#example-4">Robots</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark p-3 space_btw link-dark" href="#example-5">Welding Process</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark p-3 space_btw link-dark" href="#example-6">Predictive Maintenance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark p-3 space_btw link-dark" href="#example-7">Cognitive Science</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark p-3 space_btw link-dark" href="#example-8">Natural Language Processing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark p-3 space_btw link-dark" href="#example-9">Others</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link text-dark p-3 space_btw link-dark" href="#example-10">Long Term Goals</a>
          
        </li>
        
      </ul>
    </div>
   
  </div>
    <div class="col-md-8 blog_content">
    <br/>
    <br/>
    <br/>
    <h1> RESEARCH HIGHLIGHTS</h1>
    <br/>
    <br/>
    
    <p class="pub_content text-secondary text-left fs-5 lh-base">My research interests lie on the intersection of advancement and application of the machine
learning and computer vision-based algorithms. My research interest revolves around a broad
range of areas such as, Artificial Intelligence, Machine Learning, Computer Vision, Robotics,
Computational Cognitive Science, Reliability, Signal Processing, and Software Engineering. To
date, I published fifty six (56) research papers in the peer-reviewed journals and conferences.
My research articles are published in the reputed journals like Pattern Recognition (Impact
Factor (I. F.) 7.740), Emerging Applications of Artificial Intelligence (Impact Factor (I. F.)
4.201), IEEE Signal Processing Letters (I. F. 3.109), American Journal of Neuroradiology
(I. F. 3.653), and premier conferences like MICCAI (Acceptance Rate (A. R.) ~32%, rank 1
conference in computer science) , ECML (A. R. ~30%) , ACCV (A. R. ~29%), and ICIP (A.
R. ~45%). I received 558 google scholar citations and 11572 research gate reads to date; My
publications are categorized into the following major areas.
</p>
 <hr className="divider"/>
    <div
      data-mdb-spy="scroll"
      data-mdb-target="#scrollspy1"
      data-mdb-offset="0"
      class="scrollspy-example"
    >
      <section id="example-1" class="blog_ct intro_title">
      <h1>BOOKS & BOOK CHAPTERS</h1>
      <br/>
      <p class="book_content fs-5 text-secondary">1. 
          
          <em class="text-info "> B. N. Saha</em>, The evolution of snake toward automation for multiple blob-object segmentation.
LAP Lambert Academic Publishing, 2012
          </p>
          <br/>
          
          <p class="book_content fs-5 text-secondary">
          2.  A. González-Cantú, M. E. Romero-Ibarguengoitia, and <em class="text-info">B. N. Saha</em>, Classification of Left
Ventricular Hypertrophy and NAFLD Through Decision Tree Algorithm. Chapman and
Hall/CRC Press, Taylor & Francis Group, Editors Ayman El-Baz, Jasjit S. Suri, 2021.
          </p>
             </section>
             <hr className="divider"/>
      <section id="example-2" class="blog_ct">
        <h1>MACHINE LEARNING</h1>
        <br/>
        <p class="pub_content text-justify fs-5 lh-base">One of my research interests is to incorporate novel data-driven regularization strategy into
classification algorithms such as, AdaBoost, Support Vector Machine (SVM), and Decision
Tree which in turn reduces test error by averting overfitting and impelling early convergence.
I developed novel Adaptive Regularized Boosting (AR-Boost) and kNN-SVM algorithms. My
publications are mentioned below.
</p>
<br/>
          <p class="book_content fs-5 text-secondary">3. 
          
          <em class="text-info"> B. N. Saha</em>, G. Kunapuli, N. Ray, J. A. Maldjian, and S. Natarajan, “Ar-boost: Reducing
overfitting by a robust data-driven regularization strategy,” in Joint European Conference
on Machine Learning and Knowledge Discovery in Databases (ECMLPKDD). Springer,
2013, pp. 1–16, acceptance rate ~25%.
          </p>
           <br/>


           <section id="example-3" class="blog_ct intro_title">
      <h1>COMPUTER VISION & IMAGE PROCESSING</h1>
      <br/>
      <p className="pub_content text-secondary text-left fs-5 lh-base">My research interests lie in advancing segmentation, filtering, tracking, registration, object
localization, detection and validation (Principal Component Analysis (PCA) and AR-Boost)
algorithms. I developed novel approximate segmentation (Probabilistic Quad Tree (PQT),
Fast Bounding Box (FBB)) algorithms, automatic snake segmentation algorithms, Hierarchical
Level Set (HLS), Topological Graph Cut (TGC), Robust Convergence Index (RCI) and
Inclusion Filter, Statistical Relational Learning (SRL) for Alzheimer disease prediction, and
Minimum Spanning Tree (MST) based sequence optimization algorithm for registering long
microscopic time-sequenced images. My publications in this area are listed below.</p>
      <p class="book_content fs-5 text-secondary">4. T. A. Asif and<em class="text-info "> B. N. Saha</em>, “Instagram image filtration with computer vision,” in Intelligent
Computing and Technologies Conference (ICTCON), 2021, pp. 170–173. </p>
          <br/>
          
          <p class="book_content fs-5 text-secondary">5.
          <em class="text-info "> B. N. Saha</em>, N. Ray, S. McArdle, and K. Ley, “Selecting the optimal sequence for deformable
registration of microscopy image sequences using a two-stage mst-based clustering
algorithm,” in Medical Image Computing and Computer Assisted Intervention -
MICCAI 2017: 20th International Conference, Quebec City, QC, Canada, September 11-
13, 2017, Proceedings. Springer International Publishing, 2017, pp. 353–361, acceptance
rate ~32% (rank 1 conference in computer science).
          </p><br/>
          <p class="book_content fs-5 text-secondary">6. “A two-stage minimum spanning tree (mst) based clustering algorithm for 2d deformable
registration of time sequenced images,” in Proceedings of IEEE International
Conference on Image Processing (ICIP), 2017, pp. 1472–1476.</p><br/>
<p class="book_content fs-5 text-secondary">7. S. Natarajan, <em class="text-info "> B. N. Saha</em>, S. Joshi, A. Edwards, T. Khot, E. M. Davenport, K. Kersting,
C. T. Whitlow, and J. A. Maldjian, “Relational learning helps in three-way classification of
alzheimer patients from structural magnetic resonance images of the brain,” International
Journal of Machine Learning and Cybernetics, vol. 5, no. 5, pp. 659–669, 2014, impact
factor 3.753 (15 google scholar citations).</p><br/>
<p class="book_content fs-5 text-secondary">8. J. A. Maldjian, C. T. Whitlow, <em class="text-info "> B. N. Saha</em>, G. Kota, C. Vandergriff, E. M. Davenport,
J. Divers, B. I. Freedman, and D. W. Bowden, “Automated white matter total lesion
volume segmentation in diabetes,” American Journal of Neuroradiology, vol. 34, no. 12,
pp. 2265–2270, 2013, impact factor 3.653 (38 google scholar citations).</p>
<br/>
<p class="book_content fs-5 text-secondary">9. <em class="text-info "> B. N. Saha</em>, N. Ray, R. Greiner, A. Murtha, and H. Zhang, “Quick detection of brain
tumors and edemas: A bounding box method using symmetry,” Computerized Medical
Imaging and Graphics, vol. 36, no. 2, pp. 95–107, 2012, impact factor 6.418 (127 google
scholar citations).</p>
<br/>
<p class="book_content fs-5 text-secondary">10. <em class="text-info "> B. N. Saha</em>, N. Ray, and H. Zhang, “Snake validation: A pca-based outlier detection
method,” IEEE Signal Processing Letters, vol. 16, pp. 549–552, 2009, impact factor 3.109
(40 google scholar citations).</p>

<br/>
<p class="book_content fs-5 text-secondary">11. <em class="text-info "> B. N. Saha</em> and N. Ray, “Image thresholding by variational minimax optimization,” Pattern
Recognition, vol. 42, pp. 843–856, 2009, impact factor 7.740 (80 google scholar citations).
</p>
<br/>

<p class="book_content fs-5 text-secondary">12. <em class="text-info "> B. N. Saha</em>, A. Saini, N. Ray, R. Greiner, J. Hugh, and M. Tambasco, “A robust convergence
index filter for breast cancer cell segmentation,” in Proceedings of the IEEE
International Conference on Image Processing (ICIP), 2014. IEEE, 2014, pp. 922–926,
acceptance rate ~40%.</p><br/>

<p class="book_content fs-5 text-secondary">13. <em class="text-info "> B. N. Saha</em>, S. Natarajan, G. Kota, C. T. Whitlow, D. Bowden, J. Divers, B. I. Freedman,
and J. A. Maldjian, “A novel hierarchical level set with ar-boost for white matter lesion
segmentation in diabetes,” in Proceedings of the 11th International Conference on Machine
Learning and Applications (ICMLA), 2012, vol. 1. IEEE, 2012, pp. 90–95.</p><br/>

<p class="book_content fs-5 text-secondary">14. S. Natarajan, S. Joshi, <em class="text-info "> B. N. Saha</em>, A. Edwards, T. Khot, E. Moody, K. Kersting, C. T.
Whitlow, and J. A. Maldjian, “A machine learning pipeline for three-way classification of
alzheimer patients from structural magnetic resonance images of the brain,” in Proceedings
of the 11th International Conference on Machine Learning and Applications (ICMLA),
2012, vol. 1. IEEE, 2012, pp. 203–208.</p>
<br/>

<p class="book_content fs-5 text-secondary">15. S. Mukherjee, <em class="text-info "> B. N. Saha</em>, I. Jamal, R. Leclerc, and N. Ray, “A novel framework for
automatic passenger counting,” in Proceedings of the 18th IEEE International Conference
on Image Processing (ICIP), Brussels, Belgium, 2011, pp. 2969–2972, acceptance rate
~40% (53 google scholar citations).</p><br/>

<p class="book_content fs-5 text-secondary">16. <em class="text-info "> B. N. Saha</em>, N. Ray, and H. Zhang, “Automating snakes for multiple objects detection,”
in Proceedings of the Asian Conference on Computer Vision (ACCV). Springer, 2010,
pp. 39–51, acceptance rate ~29% (5 google scholar citations).</p><br/>


<p class="book_content fs-5 text-secondary">17. N. Ray, <em class="text-info "> B. N. Saha</em>, and H. Zhang, “Change detection and object segmentation: A histogram
of features-based energy minimization approach,” in Proceedings of the IEEE International
Conference of Computer Vision, Graphics and Image Processing (ICVGIP).
IEEE, 2008, pp. 628–635, acceptance rate ~29% (7 google scholar citations).</p><br/>

<p class="book_content fs-5 text-secondary">18. N. Ray, <em class="text-info "> B. N. Saha</em>, and S. T. Acton, “Oil sand image segmentation using the inclusion
filter,” in Proceedings of the 15th IEEE International Conference of Image Processing
(ICIP). IEEE, 2008, pp. 2188–2191, acceptance rate ~45%.</p><br/>

<p class="book_content fs-5 text-secondary">19. <em class="text-info "> B. N. Saha</em>, N. Ray, and H. Zhang, “Computing oil sand particle size distribution by
snake-pca algorithm,” in Proceedings of the IEEE International Conference on Acoustics,
Speech and Signal Processing (ICASSP), 2008. IEEE, 2008, pp. 977–980, acceptance rate
~48% (9 google scholar citations).</p><br/>

<p class="book_content fs-5 text-secondary">20. N. Ray and <em class="text-info "> B. N. Saha</em>, “Deformable object tracking: A kernel density estimation approach
via level set function evolution,” in Proceedings of the International Conference on Pattern
Recognition and Machine Intelligence (PReMI), 2007, pp. 624–631, acceptance rate ~25%.</p><br/>

<p class="book_content fs-5 text-secondary">21. N. Ray, <em class="text-info "> B. N. Saha</em>, and M. Brown, “Locating brain tumor from mr imagery using symmetry,”
in Proceedings of the Conference Record of the Forty-First Asilomar Conference
on Signals, Systems and Computers, 2007. ACSSC 2007. IEEE, 2007, pp. 224–228,
acceptance rate ~40% (52 google scholar citations).</p><br/>

<p class="book_content fs-5 text-secondary">22. N. Ray and <em class="text-info "> B. N. Saha</em>, “Edge sensitive variational image thresholding,” in Proceedings
of IEEE International Conference of Image Processing (ICIP), vol. 6. IEEE, 2007, pp.
37–40, acceptance rate ~45% (45 google scholar citations).</p>
</section>

<section id="example-4" class="blog_ct intro_title">
      <h1>AUTOMATION OF MANUFACTURING OPERATIONS BY ROBOTS</h1>
      <br/>
      <p className="pub_content text-secondary text-left fs-5 lh-base">Parts mating, peg in hole insertion or assembly operation is the most common operation in
industrial production, but autonomous execution by robots can significantly increase overall
productivity. We have developed computer vision- based (fast template matching and camera
calibration) algorithms to automatically find a work piece (peg and hole) from the complex
working environment. To overcome the limitations of visual sensor or camera (occlusion and
imprecision), we devised the problem of position uncertainty of the peg and hole as the travelling
salesman problem and solved the position uncertainty problem using dynamic programming.
Our method has been successfully implemented on industrial Motoman MH-6, SDA-20
dual-arm and gantry or Cartesian robots. Our research articles are listed below.</p>
<br/>

<p class="book_content fs-5 text-secondary">23. D. Ortega-Aranda, J. F. Jimenez-Vielma, <em class="text-info "> B. N. Saha</em>, and I. Lopez-Juarez, “Dual-arm
peg-in-hole assembly using dnn with double force/torque sensor,” Applied Sciences,
vol. 11, no. 15, 2021. [Online]. Available: https://www.mdpi.com/2076-3417/11/15/6970</p><br/>

<p class="book_content fs-5 text-secondary">24. D. Ortega-Aranda, I. Lopez-Juarez, <em class="text-info "> B. N. Saha</em>, R. Osorio-Comparan, M. P. na Cabrera,
and G. Lefrnc, “Learning contact states during peg-in-hole assembly with a dual-arm
robot,” in Proceedings of the IEEE CHILECON, 2017, pp. 1–6.</p><br/>

<p class="book_content fs-5 text-secondary">25. A. S. Cienfuegos, <em class="text-info "> B. N. Saha</em>, J. Romero-Hdz, and D. Ortega, “Efficient integration of
template matching , calibration and triangulation for automating peg hole insertion task using two cameras,” SSRG International Journal of Computer Science and Engineering
(SSRG-IJCSE), vol. 3, pp. 61–70, Nov. 2016, impact factor 2.150.</p><br/>

<p class="book_content fs-5 text-secondary">26. E. Rodriguez, <em class="text-info "> B. N. Saha</em>, J. Romero-Hdz, and D. Ortega, “A multi-objective differential
evolution algorithm for robot inverse kinematics,” SSRG International Journal of Computer
Science and Engineering (SSRG-IJCSE), vol. 3, pp. 71–79, Nov. 2016, impact factor
2.150.</p><br/>

<p class="book_content fs-5 text-secondary">27. J. Alonso-Tovar, <em class="text-info "> B. N. Saha</em>, J. Romero-Hdz, and D. Ortega, “Bayesian network classifier
with efficient statistical time-series features for the classification of robot execution failures,”
SSRG International Journal of Computer Science and Engineering (SSRG-IJCSE),
vol. 3, pp. 80–89, Nov. 2016, impact factor 2.150.</p><br/>

<p class="book_content fs-5 text-secondary">28. A. Sauceda, E. Rodriguez, J. Romero, D. Ortega, and <em class="text-info "> B. N. Saha</em>, “Implementation of
computer vision guided peg-hole insertion task performed by robot through labview,”
MICAI 2016, Part I, Lecture Notes in Artificial Intelligence (LNAI) 10061, pp. 437–458,
2017.</p>


</section>

<section id="example-5" class="blog_ct intro_title">
      <h1>AUTOMATION AND OPTIMIZATION OF WELDING PROCESS</h1>
      <br/>
      <p className="pub_content text-secondary text-left fs-5 lh-base">Welding deformation plays a negative role in metal joining processes. It greatly impacts industries
in several ways such as constraints in the design phase, reworks, quality cost and
overall capital expenditure. Welding sequence optimization significantly reduces the welding
deformation and residual stress. Selecting an optimal welding sequence can be considered as
a combinatorial optimization problem with many possible configurations which often make it
computationally very expensive. We deployed Modified Lowest Cost Search (MLCS), multiobjective
Genetic Algorithm (GA) and Reinforcement Learning (RL) algorithm which produces
a pseudo-optimal welding sequence yielding less deformation and effective stress. We
first demonstrate in literature the use of both Low Temperature Transform (LTT) and conventional
wire for welding sequence optimization which increases the fatigue life of the weldment.
Our publications on welding are provided below.</p>

<p class="book_content fs-5 text-secondary">29. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>, S. Tstutsumia, R. Fincatoa, and G. Toledo, “Incorporating
domain knowledge into reinforcement learning to expedite welding sequence optimization,”
in Engineering Applications of Artificial Intelligence, vol. 91, 2020, pp. 1–10.</p><br/>

<p class="book_content fs-5 text-secondary">30. “Statistical validation of weldment deformation through welding simulation and 3d
optical scanning,” in Proceedings of the Welding Structure Symposium, 2017, pp. 1–8.</p><br/>


<p class="book_content fs-5 text-secondary">31. J. Romero-Hdz, S. Tstutsumia, R. Fincatoa, and <em class="text-info "> B. N. Saha</em>, “Influence of welding sequence
on residual stress and deformation pattern using conventional and ltt wires,” in
Proceedings of the Welding Structure Symposium, 2017, pp. 1–8.</p><br/>

<p class="book_content fs-5 text-secondary">32. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>, G. Toledo, and I. Lopez, “A reinforcement learning based
approach for welding sequence optimization,” Transactions on Intelligent Welding Manufacturing,
pp. 33–45, 2017.</p><br/>

<p class="book_content fs-5 text-secondary">33. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>, and G. Toledo, “Welding sequence optimization through a
modified lowest cost search algorithm,” Computer Science and Engineering, vol. 6, pp.
25–32, 2016.</p><br/>

<p class="book_content fs-5 text-secondary">34. J. Romero-Hdz, S. Aranda, G. Toledo-Ramirez, J. Segura, and <em class="text-info "> B. N. Saha</em>, “Deformation
and residual stress based multiobjective genetic algorithm for welding sequence optimization,”
Journal of Research in Computing Science, vol. 132, pp. 155–179, 2017.</p><br/>

<p class="book_content fs-5 text-secondary">35. J. Romero-Hdz, S. Aranda, G. Toledo, J. Segura, and <em class="text-info "> B. N. Saha</em>, “An elitism based
genetic algorithm for welding sequence optimization to reduce deformation,” Journal of
Research in Computing Science, vol. 121, pp. 17–36, 2016.</p><br/>

<p class="book_content fs-5 text-secondary">36. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>, G. Toledo-Ramirez, and D. Beltran-Bqz, “Welding sequence
optimization using artificial intelligence techniques, an overview,” SSRG International
Journal of Computer Science and Engineering (SSRG-IJCSE), vol. 3, pp. 90–95, Nov.
2017, impact factor 2.150.</p><br/>

<p class="book_content fs-5 text-secondary">37. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>, and G. Toledo, “Deformation driven fast and approximate
shortest path algorithm for selecting a pseudo-optimal welding sequence,” Global Conference
on Engineering and Applied Science, vol. GCEAS-487, pp. 439–449, 2016.</p><br/>

<p class="book_content fs-5 text-secondary">38. J. Romero-Hdz, G. Toledo, and <em class="text-info "> B. N. Saha</em>, “Deformation and residual stress based multiobjective
genetic algorithm for welding sequence optimization,” in 2016 Fifteenth Mexican
International Conference on Artificial Intelligence (MICAI), Oct 2016, pp. 80–91.</p><br/>
      
 </section>

 <section id="example-6" class="blog_ct intro_title">
      <h1>REABILITY AND OPTIMIZATION FOR PREDICTIVE MAINTENANCE</h1>
      <br/>
      <p className="pub_content text-secondary text-left fs-5 lh-base">Prognostics have recently attracted a lot of research interest due to the need of models for
accurate estimation of the Remaining Useful Life (RUL) for different applications. Currently
we have developed machine learning based prognostic model for electric motor as well as cancer
patients. In addition, we are optimizing the design parameters for the optimal life testing plan
under censoring scheme using genetic algorithm based multi-objective optimization methods
specially for progressive censoring scheme which is a combinatorial optimization problem. I
advocated a novel restricted weak integer composition based sample initialization algorithm
which expedites convergence and increases robustness of Genetic Algorithm for progressive
censoring. Our articles in this area are provided below.</p><br/>

<p class="book_content fs-5 text-secondary">39. R. Bhattacharya, <em class="text-info "> B. N. Saha</em>, G. González-Farías, and N. Balakrishnan, “Multi-criteria
based optimum life testing plans under hybrid censoring,” Test, pp. 1–24, 2019.</p><br/>
</section>

<section id="example-7" class="blog_ct intro_title">
      <h1>COMPUTATIONAL COGNITIVE SCIENCE</h1>
      <br/>
      <p className="pub_content text-secondary text-left fs-5 lh-base">One of my research areas was on developing mathematical modelling and computational simulations
to achieve a better understanding of human perception, cognition, learning and behavioral
psychology. Recently, I have developed statistical models and deployed novel statistical
visualization chart (pie-bubble chart) on color perception, effects of digital diversion on alleviating
curriculum related stress and characteristics of computer generated biological imagery
causing horripilation. Our research articles are mentioned below.</p><br/>

<p class="book_content fs-5 text-secondary">40. T. P. Mukhopadhyay, <em class="text-info "> B. N. Saha</em>, N. Gurieva, and R. T. Lopez, “Rosa mexicano: the
social optics of a color neologism,” Journal of the International Colour Association, pp.
1–16, 2017.</p><br/>

<p class="book_content fs-5 text-secondary">41. T. P. Mukhopadhyay, M. Siprut, and <em class="text-info "> B. N. Saha</em>, “Digital diversions in education: Interactive
multimedia for adolescent motivation in unilateral classroom scenarios,” International
Journal of Innovation, Creativity and Change, vol. 3, pp. 60–74, 2017.</p><br/>

</section>

<section id="example-8" class="blog_ct intro_title">
      <h1>NATURAL LANGUAGE PROCESSING IN RESOURCE-SCARCE LANGUAGES</h1>
      <br/>
      <p className="pub_content text-secondary text-left fs-5 lh-base">My research interests include discovering novel solutions for several well known Natural Language
Processing (NLP) problems such as, anaphora resolution, sentiment analysis, fake news
detection, Hate speech and offensive content identification, and text summarization to improve
the generalization capability. Our publications in the area of NLP are mentioned below.</p><br/>

<p class="book_content fs-5 text-secondary">42. A. Bahuguna, D. Yadav, A. Senapati, and <em class="text-info "> B. N. Saha</em>, “A unified deep neuro-fuzzy approach
for covid-19 twitter sentiment classification,” in 8th International Symposium on
Language & Knowledge Engineering</p><br/>

<p class="book_content fs-5 text-secondary">43. <em class="text-info "> B. N. Saha</em>, A. Senapati, and U. Garain, “A deep learning framework for anaphora resolution
from social media text,” in 3rd International Conference on Machine Intelligence
and Signal Processing (MISP), 2021.</p><br/>

<p class="book_content fs-5 text-secondary">44. A. A. Ayandeyi and <em class="text-info "> B. N. Saha</em>, “Twitter data sentiment analysis to understand effect
of covid-19 on mental health,” in Intelligent Computing and Technologies Conference
(ICTCON), 2021, pp. 174–179.</p><br/>

<p class="book_content fs-5 text-secondary">45. <em class="text-info "> B. N. Saha</em> and A. Senapati, “Hate speech and offensive content identification: Lstm
based deep learning approach @ hasoc 2020,” in Working Notes of FIRE 2020 - Forum
for Information Retrieval Evaluation, 2020, pp. 290–297.</p><br/>

<p class="book_content fs-5 text-secondary">46. Long short term memory (lstm) based deep learning for sentiment analysis of
english and spanish data,” in International Conference on Computational Performance
Evaluation (ComPE), 2020, pp. 1–5.</p><br/>

<p class="book_content fs-5 text-secondary">47. <em class="text-info "> B. N. Saha</em>, A. Senapati, and A. Mahajan, “Lstm based deep rnn architecture for election
sentiment analysis from bengali newspaper,” in International Conference on Computational
Performance Evaluation (ComPE), 2020, pp. 1–6.</p><br/>

<p class="book_content fs-5 text-secondary">48. A. Senapati, A. Poudyal, P. Adhikary, S. Kaushar, A. Mahajan, and <em class="text-info "> B. N. Saha</em>, “A
machine learning approach to anaphora resolution in nepali language,” in International
Conference on Computational Performance Evaluation (ComPE), 2020, pp. 1–6.</p><br/>

<p class="book_content fs-5 text-secondary">49. <em class="text-info "> B. N. Saha</em> and A. Senapati, “Lstm based deep rnn architecture for hate speech and
offensive content (hasoc) identification in indo – european languages,” in The 11th meeting
of Forum for Information Retrieval Evaluation (FIRE), 2019.</p><br/>

</section>

<section id="example-9" class="blog_ct intro_title">
      <h1>OTHERS</h1>
      <br/>
      <section id="example-sub-A-collapsible">
          <h5 class="book_title">SIGNALS PROCESSING</h5>
          <p className="pub_content text-secondary text-left fs-5 lh-base">We propose a deep learning based end-to-end architecture for speech recognition.</p>
          <br/>
          <p class="book_content fs-5 text-secondary">50.  R. A. de Morais and
          
          <em class="text-info"> B. N. Saha</em>, “End-to-end speech recognition using recurrent neural
network (rnn),” in Intelligent Computing and Technologies Conference (ICTCON), 2021,
pp. 152–158. The evolution of snake toward automation for multiple blob-object segmentation.
LAP Lambert Academic Publishing, 2012
          </p><br/>

          
</section>

<section id="example-sub-B-collapsible">
          <h5 class="book_title">NETWORK SECURITY</h5>
          <p className="pub_content text-secondary text-left fs-5 lh-base">This research demonstrates how machine learning can predict distributed denial of service
attack and save financial institutions from cyber attacks.</p>
          <br/>
          <p class="book_content fs-5 text-secondary">51.  Q. A. Adeshina and
          
          <em class="text-info"> B. N. Saha</em>, “Using machine learning to predict distributed denial-ofservice
(ddos) attack,” in Intelligent Computing and Technologies Conference (ICTCON),
2021, pp. 159–169.
          </p><br/>

          
</section>

<section id="example-sub-C-collapsible">
          <h5 class="book_title">INTERNET OF THINGS</h5>
          <p className="pub_content text-secondary text-left fs-5 lh-base">The research presents a machine learning based smart health care kit which improves patient
care by online monitoring of the patient data.</p>
          <br/>
          <p class="book_content fs-5 text-secondary">52.  L. Narayanagari and
          
          <em class="text-info"> B. N. Saha</em>, “Machine learning driven iot based smart health care
kit,” in Intelligent Computing and Technologies Conference (ICTCON), 2021, pp. 180–
185.
          </p><br/>

          
</section>

<section id="example-sub-D-collapsible">
          <h5 class="book_title">SOFTWARE ENGINEERING</h5>
          <p className="pub_content text-secondary text-left fs-5 lh-base">This reserach intends to select important test cases through machine learning which allows to
conduct software testing with limited resources and time.</p>
          <br/>
          <p class="book_content fs-5 text-secondary">53.  V. Cheruiyot and
          
          <em class="text-info"> B. N. Saha</em>, “A machine learning based approach for software test case
selection,” in Intelligent Computing and Technologies Conference (ICTCON), 2021, pp.
186–189.
          </p>

          
</section>
</section>

      </section>
      <hr className="divider"/>
      <section id="example-10" >
        <h2>LONG TERM RESEARCH GOALS</h2>
        <br/>
        <p class="pub_content text-justify fs-5 lh-base">In the long term of my research career, I am interested to solve application driven large scale
(complex) big data analysis. In my understanding, only engineering solutions are not sufficient
enough to solve such complex problems in real life applications. I believe that theoretical
advancement is a prerequisite to offer optimal solutions for these complex problems. Citations
of my publications are available:
<br/>
<br/>
Bibliometrics URL: <em class="text-info">https://scholar.google.com/citations?user=HkY4OJgAAAAJ&hl=en</em> </p>
        <br/>
        
      </section>
      <br/>
      <br/>
      <br/>
      
      
      
      
      
      
     
    </div>
   
  </div>

  
</div>
</div>
      


        </>
    );
}

export default Blog;