import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import Tabs from 'react-bootstrap/Tabs';

function InterestSub()
{
    return (<>
        <Navbar bg="white" expand="lg" className="others_nav">
      <Container fluid>
        <Navbar.Brand href="#home" className="brand-style me-auto">BAIDYA SAHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto others_navlink ">
            <Nav.Link href="/" className=" navbar1_link ">Home</Nav.Link>
            
            <NavDropdown title="Teaching" id="basic-nav-dropdown" className="navbar1_link ">
              <NavDropdown.Item href="/course_one " className='fs-5'>Philosophy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/course_two" className='fs-5'>PG Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/course_three" className='fs-5'> UG Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/course_four" className='fs-5'>Supervision</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research Highlights" id="basic-nav-dropdown" className="navbar1_link ">
              <NavDropdown.Item href="/interest " className='fs-5'>Interests</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/blog" className='fs-5'>Publications</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="/admin" className="hover-shadow navbar1_link ">Administration</Nav.Link>
            <Nav.Link href="/awards" className="hover-shadow navbar1_link ">Awards</Nav.Link>
            <Nav.Link href="/others" className="hover-shadow navbar1_link  ">Others</Nav.Link>
            <Nav.Link href="/contact" className="hover-shadow navbar1_link ">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
{/*----------------------------------------------Interest Sub Nav bar ends-------------------------------------------*/}

<Tab.Container id="left-tabs-example" defaultActiveKey="one">
      <Row>
        <Col sm={2} className='border-end pe-0'>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="one" className="rounded-0 mt-5 py-4 text-start  fw-bold" >MACHINE LEARNING & AI</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="two" className="rounded-0 text-start py-4 fw-bold"  >COMPUTER VISION & IMAGE PROCESSING</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three" className="rounded-0 text-start py-4 fw-bold" >NATURAL LANGUAGE PROCESSING</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four" className="rounded-0 text-start py-4  fw-bold" >INDUSTRY 4.0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="five" className="rounded-0 text-start py-4  fw-bold" >COGNITIVE SCIENCE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="six" className="rounded-0 text-start py-4 fw-bold" >MULTIMODAL SIGNAL PROCESSING</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="one" >
              <Card className="mt-5 pt-5 text-center border-0 ">
                <Card.Title className="fs-1 text-decoration-underline mb-5">MACHINE LEARNING & AI</Card.Title>
                <Card.Body className="py-5 text-start fs-5 sub_text px-3">A plethora of emerging Big Data applications such as, social media analysis, video surveillance, network security monitoring,
                    personalized and precision medicine, genomics, neuroscience, economics, finance, and such others, usher processing and
                    analyzing streams of data to extract valuable information in real-time. Big Data hold great promises for discovering subtle
                    population patterns and heterogeneities that are not possible with small-scale data. On the other hand, the massive sample
                    size and high dimensionality of Big Data introduce unique computational and statistical challenges: (i) high dimensionality
                    brings noise accumulation, spurious correlations and incidental homogeneity; (ii) high dimensionality combined with large
                    sample size creates issues such as heavy computational cost and algorithmic instability; (iii) the massive samples in Big Data
                    are typically aggregated from multiple sources at different time points using different technologies. This creates issues of
                    heterogeneity, experimental variations and statistical biases, and requires us to develop more adaptive and robust procedures.
                    These challenges are distinguished and require new computational and statistical paradigm. In terms of statistical accuracy,
                    dimension reduction and variable selection play pivotal roles in analyzing high-dimensional data. This motivates advancement
                    of new regularization methods and sure independence screening. In terms of computational efficiency, Big Data motivate the
                    development of new computational infrastructure and data-storage methods. Such a paradigm change has led to significant
                    progresses on developments of fast algorithms that are scalable to massive data with high dimensionality. My research
                    interests lie in capacitating classification algorithms for hadling Big data by incorporating data-driven regularization strategy
                    which improves classification accuracy by avoiding overfitting and expediting the convergence. Details are given below.</Card.Body>
                    <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Adaptive Regularized Boosting (AR-Boost):</Card.Text>
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Adaboost is one of the state-of-the-art classifers for two class classification.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">I developed a novel Adaptive Regularized Boosting (AR-Boost) by incorporating a regularization parameter into the boosting
                            loss function that relaxes the weak learner assumption of boosting algorithm and thus facilitates a natural extension of
                            boostging algorithm for multiclass setting [12].</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">I advocated a regulazied exponential loss function for AR-Boost which
                            enforces more weight than Adaboost on misclassified samples at each iteration to classify correctly in the immediate iteration
                            and consequently leads to early convergence.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Unlike Adaboost, the user can select optimal weights of the features through
                            cross-validation.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Currently, I am deploying AR-Boost for pediatric brain age classification from MRI which can help in early
                            non-invasive diagnosis and prognosis of abnormal pediatric brain development.</ListGroup.Item>
                    </ListGroup>
                    <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">kNN Regularized Support Vector Machine (kNN-SVM):</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We describe a novel approach to combining the properties of
                        two well-known formalisms: k-Nearest Neighbors (kNN) and Support Vector Machines (SVMs).</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We introduce a k-Nearest
                        Neighbor (kNN) based regularization term into SVM optimization framework which improves the classification accuracy
                        of SVM by leveraging the strengths of both SVM and kNN.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The proposed loss function minimizes the slackness and
                        maximizes the surplus, provides weights to the slack variables based on the degree of their k-NN and thus introduces a novel
                        regularization strategy into SVM framework.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Our approach extends the total margin SVM, which considers the distance of
                        all points from the margin; each point is weighted based on its k neighbors.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The intuition is that examples that are mostly
                            surrounded by similar neighbors, i.e., of their own class, are given more priorit yto minimize the influence of drastic outliers
                            and improve generalization and robustness.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Thus, our approach combines the local sensitivity of kNN with the global stability
                        of the total-margin SVM.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We analyzed its theoretical properties and empirically demonstrate improved generalization and
                        robustness in noisy settings for both binary and multi class classification.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We are now extending the idea of kNN-SVM in
                        Big Data domain by ameliorating the bottelnecks of kNN in high dimensional framework.</ListGroup.Item>
                        </ListGroup>

                        {/*---------------------------3rd title--------------------------------------*/}
                        <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Bayesian Network (BN) Classifier: </Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Motivated by the success of Bayesian Calssifier with with strong assumptions of
                            independence among features, called Naive Bayes (NB), we deployed Bayesian Network (BN) Classifer with slightly less
                            restrictive assumptions of independence among features, called Tree Augmented Naive Bayes (TAN) to classify successfully
                            the robot execution failures associated with automation of peg in hole insertion task by Industria Robot, Motoman MH-
                            6.</ListGroup.Item>
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">TAN approximates the interactions between attributes by using a tree structure imposed on the NB structure that
                            generalize the NB classifier and explicitly represent statements about independence which outperforms Naive Bayes, yet at
                            the same time maintains the computational simplicity (no search involved) and robustness that characterize NB.</ListGroup.Item>
                       </ListGroup>
                         {/*---------------------------4th title--------------------------------------*/}
                       <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Exploiting Domain Knowledge for Early Convergence of Genetic Algorithm (GA):</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Genetic algorithms (GAs) are a heuristic
                            search and optimisation technique inspired by natural evolution.</ListGroup.Item>
                                                    <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">They have been successfully applied to a wide range of
                            real-world problems of significant complexity.</ListGroup.Item>
                                                    <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Success of GA depends on smart choice of selection, crossover and mutation
                            mechanism and fitness function as well.</ListGroup.Item>
                                                    <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We advocated domain knowledge in selection, crossover and mutation algorithms
                            that expedites the convergence and makes GA more robust for combinatorial optimization problems.</ListGroup.Item>
                                                    <ListGroup.Item className="lh-base sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed a
                            novel restricted weak integer composition based sample initialization algorithm which introduce diversity in the population
                            and in turn increases likelihood of convergence for solving progressive censoring throuh GA.</ListGroup.Item>
                                                    <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In another effort, Algebraic
                            Method (AM) is a well known analytical method for robot inverse kinematic problem.</ListGroup.Item>
                                                    <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">However, this method demonstrates
                            poor convergence rate and falls into local minima in many occasions.</ListGroup.Item>
                                                    <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed a GA based solution where AM has
                            been introduced to reduce the search space and thus helps in speeding up the convergence rate for GA.</ListGroup.Item>
                            <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Like Differential
                            Evolution (DE), we introduced a novel vector differential based crossover algorithm in both binary and continuous domains
                            which increases the likelihood of finding global optima.</ListGroup.Item>
                            <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We also advocated data driven parameter optimization method for
                            GA.</ListGroup.Item>
                            <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We are now performing parallel and online implementation for GA to offer realtime solutions.</ListGroup.Item>
                        </ListGroup>
                        {/*---------------------------5th title--------------------------------------*/}
                        <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Tailoring Classification Algorithm for Big Data:</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Support Vector Machines (SVMs) are currently the state-of-the-art
                            models for many classification problems but they suffer from the complexity of their training algorithm which is at least
                            quadratic with respect to the number of examples.</ListGroup.Item>
                                                                                <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Conventional Sequential Minimization Method (SMO) is not computationally
                            efficient for using Support Vector Machine(SVM) for large scale problems.</ListGroup.Item>
                                                                                <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We are conducting research on faciltating
                            SVM for solving large scale problems using coordinate descent method.</ListGroup.Item>
                                                                                <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We are also introducing the idea of mixture of
                            experts, divide and conquer, Bayesian committee machine, and MapReduce algorithms in classifcation algorithms such as
                            SVM, AdaBoost, and Decision Tree for enabling them tackle to Big Data where training data is divided into a number of
                            clusters, run training algorithm on each of the cluster separately and parallely and then amalgamate them to generate the
                            training model using the mixture of experts.</ListGroup.Item>
                                                                                <ListGroup.Item className="lh-base sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In an alternative procedure, we are implementing a novel culstering based
                            sampling techniques to generate a resprestative sample of the Big data and perform training algorithm on the sample instead
                            of the whole large dataset to alleviate massive computation.</ListGroup.Item>
                            </ListGroup>
                            {/*---------------------------6th title--------------------------------------*/}
                       <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">To Improve Medical Diagnosis through Decision Tree:</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In medical decision making (classification, diagnosing, etc.)
                            there are many situations where decision must be made effectively and reliably.</ListGroup.Item>
                                                                                <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Conceptual simple decision making models
                            with the possibility of automatic learning are the most appropriate for performing such tasks.</ListGroup.Item>
                                                                                <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Decision trees are a reliable
                            and effective decision making technique that provide high classification accuracy with a simple representation of gathered
                            knowledge and they have been used in different areas of medical decision making.</ListGroup.Item>
                                                                                <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In addition, automated decision making
                            models developed for medical applications need to be interpretable akin to decision tree that help medical practitioners
                            for making diagnostic and prognostic decisions for treating diseases.</ListGroup.Item>
                                                                                <ListGroup.Item className="lh-base sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Automated decision tree can successfully diagnose NAFLD in 96% cases using only biochemical features.</ListGroup.Item>
                                                                                <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">However, the conventional clinically-oriented metabolic feature based decision
                            tree developed by exploiting the knowledge of the physician (domain expert) can clasify accurately only in 70% cases.</ListGroup.Item>
                                                                                <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We
                            implemented lookahead decision tree that can compensate immediate wrong decision as well as incorporate induction of
                            XOR along with conjunction and disjunction.</ListGroup.Item>
                                                    
                        </ListGroup>
                        {/*---------------------------7th title--------------------------------------*/}
                        <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Improving exploration in Reinforcement Learning (RL) through Domain Knowledge:</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We presented a novel work on how
                        to improve exploration in reinforcement learning using domain knowledge and knowledge-based approaches to reinforcement
                        learning.</ListGroup.Item>
                                                <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Reinforcement learning algorithms normally face the problem of deciding whether to execute explorative of
                        exploitative actions, and the paramount goal is to limit the number of executions of suboptimal explorative actions.</ListGroup.Item>
                                            
                                            <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We
                        achieve this through better understanding of domain knowledge and understanding of algorithms’ and domains’ properties.</ListGroup.Item>
                                                <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We incorporated the knowledge of thermal affected zone and joint rigidity of the system while solving welding sequence
                        optimization through RL.</ListGroup.Item>
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">At present, we are deploying monte carlo tree search for welding sequence optimization where
                        exploration-exploitation dilemma is being balanced by UCB (Upper Confidence Bound).</ListGroup.Item>
                       </ListGroup>
                       
                       {/*---------------------------8th title--------------------------------------*/}
                       <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Deep Reinforcement Learning (DRL):</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Motivated by unprecedented success of human level control through DRL [16],
                        we are conducting research on developing a novel object detection algorithm through DRL.</ListGroup.Item>
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The agent (proposed DRL based
                        object detection algorithm) automatically learns a policy which computes the probability of taking an action (translation
                        and scale) in every state so that the agent can reach to the final state (desired object circumscribed by the bounding box)
                        from the initial state (the whole image itself is circumscribed by the bounding box).</ListGroup.Item>
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">DRL is adept in reducing run time
                        complexity without compromising the detection accuracy by avoiding searches in the areas where the probability of having
                        objects is very low.</ListGroup.Item>
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The agent constructs a deep learning feature representation of the current state (bounding box), which
                        is then used by the Deep Q-Network (DQN) to determine the next suitable course of action so that the goal can be achieved
                        very quickly.</ListGroup.Item>
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We are also working for developing DRL based model for robot inverse kinematic problem and peg in hole
                        autoamtion.</ListGroup.Item>
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Reduction of state space is one of main challenges in these problems which are being handled through DRL.</ListGroup.Item>
                       </ListGroup>
              </Card>
            </Tab.Pane>

    {/*-----------------------------------------------COMPUTER VISION & IMAGE PROCESSING--------------------------------------------*/}
<Tab.Pane eventKey="two" className="mb-5"  >
  <Card className="mt-5 pt-5 text-center border-0 ">
    <Card.Title className="fs-1 text-decoration-underline mb-5">COMPUTER VISION & IMAGE PROCESSING</Card.Title>
    <Card.Body className="pt-5 text-start fs-5 sub_text px-3">I developed several novel image segmentation, and tracking algorithms. Very few of them are mentioned below.</Card.Body>
      <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Smart Document Digitization:</Card.Text>
        <ListGroup variant="flush ">
        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In this research, we develop a smart platform for digitizing, storing and managing
          inspection report of manufacturing operations.</ListGroup.Item>
        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Document digitization replaces paper based inspection checklists with digital
          forms which optimizes internal business processes, better compliance, reduce paper use, human error, ensure accuracy, and
          increase operational efficiency.</ListGroup.Item>
        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We deploy both Optical Mark Recognition (OMR) and Optical Character Recognition (OCR)
          methods to digitize manufacturing inspection reports.</ListGroup.Item>
        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Improper paper handling such as twisting or folding the paper by the
          workers applies deformation on the QR (Quick Response) code and damage the regular shape of the QR which is almost
          unrecoverable by the available software.</ListGroup.Item>
       <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We exploit deep learning through variational autoencoder based QR code recover
          algorithm which outperforms state-of-the-art techniques.</ListGroup.Item>
        </ListGroup>

                    {/*----------------------------------------------2nd title-----------------------------------------------*/}
                    <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Automatic Validation of the Screenless Crusher technology for Oil Sand Mining:</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Alberta oil sands are a vital energy
                        source for Canada and the world.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Alberta’s energy resources are the backbone of the economy of the province and the
                        world.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Mining operation is the first step toward oil extraction from oil sand. Once the topsoil and vegetation is removed,
                        shovels are brought in to dig, scoop overburden first and then oil sand, which is filled into large haul trucks.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">These haul
                        trucks ferry oil sand to the remote crusher plant site in the traditional surface mining technology.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Ongoing research on this
                        technology envisages a mobile crusher where haul trucks will be eliminated from the system and the shovels can directly
                        dump oil sand into the hopper of the crusher that can move around.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">This will entail into significant savings on operation
                        and maintenance of haul trucks.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The aim of developing this technology is to use a new type of crushing system that will not
                        generate any rejects and is therefore expensive vibrating screen is no longer needed to sieve unexpected crushed but bigger
                        oil sand particles from rest of the smaller particles and to reject those bigger particles. Thus this technology will economize
                        the oil sand production cost.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">To automatically verify the design of the crusher in the prototype of this technology, the output of the crusher is
                        transported and is sieved through the screen.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The undersize particles are sent to Primary Separation Vessel (PSV) and the
                        oversize particles are rejected.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Images of those rejected oil sand particles are acquired by the video camera mounted over
                        conveyor belt located after the screen.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">These images are segmented by the automatic snake based segmentation technique
                        proposed in this research and the size of each oil sand particle is measured.</ListGroup.Item>
                        </ListGroup>

                        {/*----------------------------------------------3rd title-----------------------------------------------*/}
                    <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Automation of Active Contour or Snake Algorithm:</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Snake is revered as state-of-the-art interactive segmentation algorithm
for microscopic cell images.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The introductory paper on snake has secured more than nineteen thousand google scholar
citations till date (February 2018).</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">However, snake fails to delineate object boundaries in many real-life applications
which urge automation.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Literature demonstrates that snake automation needs two seuqential steps: initialization and
evolution.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">However we ameliorated snake automation by integrating a self-validation mechanism into snake segmentation
framework to revolutionize snake from interactive to automatic segmentation.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We fostered three novel algorithms towards
snake segmentation:</ListGroup.Item>
<Card.Body className="w-75">
  <ListGroup.Item className=" sub_text text-start fs-5 px-5  text-secondary border-0">(a) A quadtree or Fast Bounding Box (FBB) based fast object localization method to initialize snake;</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0">(b) Interleave Directional Gradient Vector Flow (IDGVF) where novelty lies in two fronts:</ListGroup.Item>
  <Card.Text className=" w-75 ms-5 sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">(i) instills Dirichlet Boundary Condition
(DBC) into existing snake evolution algorithm which transmutes the gradient field anisotropic and snake is manifested as more
initialization independent;</Card.Text>
<Card.Text className="w-75 ms-5 sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">(ii) computation of gradient or force field and snake evolution algorithm is performed concurrently in an interleave fashion which fortifies snake over noises;</Card.Text>
<Card.Text className="w-75 ms-5 sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">(iii) evolved snake is sieved through a claasifier such as Principal
Component Analysis (PCA) or Adaptive Regularized Boosting (AR-Boost) which determines whether delineated region is a
desired object and snake is revitalized as an automatic segmentation algoritgm for multiple blob-object segmentation</Card.Text>
</Card.Body>
<ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">These methods have been successfully deployed in a number of applications, namely brain tumor, edema and white matter
lesion detection from MRI, leukocyte and cell detection from histopathological images, and sundries.</ListGroup.Item>
</ListGroup>
{/*----------------------------------------------4th title-----------------------------------------------*/}
<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Hierarchical Level Set (HLS):</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Level set has been manifested as a successful image segmentation algorithm for many
applications.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The prelusive article of level set segmentation algorithm has bagged more than eleven thousand google scholar
citations till date (February 2018)</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">However, Level set typically creates two partitions and fails in many applications
which demands more partitions.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">I have developed a Hierarchical Level Set (HLS) algorithm that implements tiered iterative
level sets based on residual variation to capture multiple partitions.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">HLS can successfully capture White Matter Lesions
(WML) of various types from structural brain Magnetic Resonance Imaging (MRI).</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">WML are thought to reflect chronic
microvascular ischemic disease and often develop in persons with type 2 diabetes.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We conducted a comparative study
between the cerebrovascular disease (CBVD) with type 2 diabetes among European Americans (EA) and African Americans
(AA) as a part of the NIH R01 grants (DHS-MIND and AADHS-MIND).</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Quantitative analysis of WML in large clinical trials
can improve diagnosis and prognosis of the CBVD.</ListGroup.Item>
                        </ListGroup>

{/*----------------------------------------------5th title-----------------------------------------------*/}
<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Fast Topological Graph Cut (TGC):</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We exploit the topological concept of cohomology to develop a fast graph cut
based image segmentation algorithm which runs in linear time (O(N)).</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We demonstrate that for a graph, if the differential
map of the function on vertices is equal to the function on edges then the function on vertices can correctly classify the
vertices.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Proposed algorithm first generates an oriented simplicial complex representation of an image. Next, we develop
and implement a ranking algorithm which prioritizes the nodes of the weighted graph based on the similarity by solving a
set of linear equations of the function on vertices in linear time.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We propose a directional derivative approach to search for
the function on vertices that are close to the function on weights.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The differential map of the function on vertices yields
the matrix of the linear matrix ranking system a simple symmetric matrix that leads the computation of the inverse of the
matrix trivial and thus finds the solution of the generalized linear matrix system in linear time.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Finally, we implement a
standard clustering algorithm on the rank of the nodes given by the proposed ranking algorithm.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">TWe demonstrate that
this proposed ranking technique has several advantages over state of the art graph cut methods:</ListGroup.Item>
<Card.Body className="w-75 ms-5">
  <ListGroup.Item className=" sub_text text-start fs-5 px-5  text-secondary border-0">(i) the proposed method
is computationally attractive; it executes in linear time;</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0">(ii) the method discovers the topological properties of the first
cohomology class of the function on the weights of the graph edges that leads to an efficient graph based classifier;</ListGroup.Item>
<ListGroup.Item className=" sub_text text-start fs-5 px-5  text-secondary border-0">(iii)
the proposed method performs well on super pixels;</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0">(iv) it has the ability to provide a stable segmentation under noisy
conditions. Proposed algorithm obtains state-of-the-art performance.</ListGroup.Item>
</Card.Body>
</ListGroup>
{/*----------------------------------------------6th title-----------------------------------------------*/}
<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Variational Thresholding (VT):</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Thresholding is a well-known pre-processing step for image segmentation. It is widely
used in automatic target recognition, industrial applications of computer visions and medical/biomedical image analysis.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We introduced a locally adaptive image thresholding technique via minimax optimization of a novel energy functional that
consists of a non-linear convex combination of an edge sensitive data fidelity term and a regularization term.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">While the
proposed data fidelity term requires the threshold surface to intersect the image surface only at places with large image
gradient magnitude, the regularization term enforces smoothness in the threshold surface.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">To the best of our knowledge,
all the previously proposed energy functional-based adaptive image thresholding algorithms rely on manually set weighting
parameters to achieve a balance between the data fidelity and the regularization terms.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In contrast, we use minimax principle
to automatically find this weighting parameter value, as well as the threshold surface.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Our conscious choice of the energy
functional permits a variational formulation within the minimax principle leading to a globally optimum solution.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The
proposed variational minimax optimization is carried out by an iterative gradient descent with exact line search technique
that we experimentally demonstrate to be computationally far more attractive than the Fibonacci search applied to find the
minimax solution.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Our method shows promising results to preserve edge/texture structures in different benchmark images
over other competing methods.</ListGroup.Item>
                        </ListGroup>

            {/*----------------------------------------------7th title-----------------------------------------------*/}
<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Deep Convolutional Neural Network (D-CNN):</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In recent years, D-CNNs have achieved great success in many problems
of machine learning and computer vision due to plethora of computational power and data availability.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We have implemented
the idea of user interactive segmentation by random walk on a complete graph where feature vectors are learned through
convnet.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed and implemented a novel D-CNN based completely automated image segmentation alogirthm where
the novelty lies in two fronts: doing random walk on a complete graph and learning feature for similarity measurement by
convnet.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Proposed algorithm obtains state-of-the-art performance.</ListGroup.Item></ListGroup>

{/*----------------------------------------------8th title-----------------------------------------------*/}
<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Statistical Relational Learning (SRL):  </Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed a SRL based classifier for three class classification of Alzheimer
disease.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">SRL is a natural choice of model relations, it can find the relationship between the different regions of the
brain representing the classes Alzheimer Disease (AD), Cognitively Normal (CN), and Mild Cognitive Impairment (MCI).</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Our extensive experiments demonstrate that Statistical Relational Learning (SRL) outperforms propositional classifier such
as Support Vector Machine (SVM), Decision Tree (DT) for AD classification.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In future, SRL can be used for modeling,
analyzing and simulating complex brain networks helping diagnosis and treatment plan for a lot of diseases and thus Artificial
intelligence initiates a new horizon in personalized medicine.</ListGroup.Item></ListGroup>
{/*----------------------------------------------9th title-----------------------------------------------*/}
<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Fast Bounding Box (FBB) Method:</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Currently, many clinical centers maintain large archival databases of Magnetic Resonance (MR) images of brain tumors for various purposes, as this information may help physicians and radiologists to
diagnose and treat new patients - e. g., by determining the effectiveness of various treatments on previous patients with
similar tumor or edema volumes. </ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">As these archived MR image databases may contain a large number of studies, it is important
to index their contents effectively.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">If these tumors were segmented, the databases could be indexed based on various aspects
of the tumor, such as its size, location and type.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">However, accurate tumor boundary delineation is a very complex task to
be accomplished accurately.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We have developed an automatic, fast, and approximate segmentation technique that deals
with the problem associated with accurate tumor segmentation, by locating a “bounding box" - i.e., axis-parallel rectangles,
around the tumor or edema on a magnetic resonance slice exploiting the left-right symmetry of human brain.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We can
then use this bounding box to determine tumor position, type and size to retrieve historical cases relevant to the current
patient and help formulate treatment plans using deep learning.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The resulting method is very fast, robust and reliable for
indexing tumor or edema images for both archival and retrieval purposes and it can be used as a vehicle for further clinical
investigations. Our papers received more than one hundred and twenty google scholar citations till date (February 2018).</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">My future endeavor involves extending such techniques even to objects having low boundary contrast, so that automated
active contour algorithms would capcitate delineate object boundaries under poor lighting conditions (which is prevalent in
many typical industrial setups) and from low-contrast cellular/molecular imagery.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">One of my other future works include developing
generalized object detection and tracking framework by incorporating self-validation mechanism with spatiotemporal
features.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">One of its significant applications include cell detection and tracking.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We are also intending to address few more
important questions such as: can we have an unsupervised or semi-supervised classification paradigm for this self-validation
mechanism for automatic segmentation? Undoubtedly, the unsupervised/semi-supervised learning can curtail the difficulties
of frequent supervised learning in applications where object characteristics change considerably and frequently.</ListGroup.Item>
                        </ListGroup>

{/*----------------------------------------------10th title-----------------------------------------------*/}
<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Optimal Sequence Selection for Deformable Registration:</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Significant cardiac and respiratory motion of the living subject,
occasional spells of defocus, drifts in the field of view, and long image sequences make the registration of in-vivo microscopy
image sequences an onerous task.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed and implemented a novel two-stage Minimum Spanning Tree (MST)-based
clustering method for deformable registration of microscopy image sequences.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We first construct a MST for the input
image sequence. MST mitigates the registration error propagation of time sequenced images by re-ordering the images in
such a way where poor quality images appear at the end of the sequence.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Then, MST is clustered into several groups based
on the similarity of the images.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">After that, an optimal anchor image is selected automatically for each group through an
iterative assessment of entropy and MSE based coarse registration error and the local deformable registration is performed
within each group separately.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Subsequently, coarse registration is conducted to find the global anchor image selected among
the whole time sequenced images and then a deformable registration is conducted on the whole sequence.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Two-stage MSTbased
deformable registration algorithm can incorporate larger drifts and distortions more accurately than conventional one
shot registration algorithm by fine-tuning the larger amount of deformation incrementally in a couple of stages.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Our method
outperforms other methods on both 2D and 3D microscopy image sequences of mouse arteries used in atherosclerosis study.</ListGroup.Item>
                        </ListGroup>

{/*----------------------------------------------11th title-----------------------------------------------*/}
<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Inclusion Filter (IF):</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed inclusion filter which is used to remove noises and fill the holes from the images
before applying the segmentation algorithm.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The design of inclusion filters is motivated by self-duality. Self-duality
(gray-level inversion invariance) is a desired criterion for many real-life applications, such as oil sand mining where objects
appear as both darker and brighter than the background.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The inclusion filter is a special class of connected filters which
removes minor interior regions and clutter based on the connected component relationships defined by the adjacency forest.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Connected filters offer important edge-preserving qualities which is very critical for segmentation.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We demonstraed that the
use of the inclusion filter significantly improves the edge fidelity and the insensitivity to initialization of active contour or
snake algorithm for the oil sand and lung cavity segmentation from magnetic resonance imagery.</ListGroup.Item>
                       
</ListGroup>
{/*----------------------------------------------12th title-----------------------------------------------*/}
<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Robust Convergence Index Filter (RCI):</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">COnvergence INdex (COIN) filter, a successful tool for cell localization, evaluates
the degree of convergence of the gradient vectors within the neighborhood (region of support) toward a pixel of interest.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">All previous efforts were to increase the adaptability of the region of support to make the COIN filter robust and accurate.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">However, improving the quality of the image gradient map was ignored, which results in poor performance of the members
of the COIN family in noisy settings.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed a new Robust Convergence Index (RCI) filter that tailors the COIN
filter in a noisy environment by</ListGroup.Item>
<Card.Body className="w-75 ms-5">
  <ListGroup.Item className=" sub_text text-start fs-5 px-5  text-secondary border-0">(a) spreading the gradient vectors within non-homogeneous object regions by convolving an
Aggregated Edge Probability Map (AEPM) with an edge preserving gradient vector kernel, and</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0">(b) increasing the convergence
of the gradient vectors through the integration of the sine and cosine distribution as well as the magnitude of the gradient
vectors</ListGroup.Item>

</Card.Body>
<ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">AEPM is computed through the consensus of the responses of a number of edge detectors over a wide range
of scales, which lessens the effects of clutter by enforcing higher weights to the actual edges, and a non-parametric Kernel
Density Estimation (KDE) is used to compute the edge probability map.</ListGroup.Item>
<ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">RCI obtains state-of-the-art performance on
histopathological breast cancer cell imagery.</ListGroup.Item>
</ListGroup>
{/*----------------------------------------------13th title-----------------------------------------------*/}
<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Pattern Image (PI):</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">I developed a novel image feature that has been named as “Pattern Image" that could detect
objects successfully under noisy settings.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">“Pattern Image" unfolds the annular band across the object boundaries to form
a rectangular pattern for computational convenience that can discriminate successfully objects (leukocyte cells from invivo
microscopic images used for inflammation study and oil sand particles useful for oil sand mining applications) from
clutter.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">This proposed pattern image carries texture information as well as intensity transition (dark to bight transition
and vice versa) across regions of object boundaries and it outperforms other edge based features such as Gradient Inverse Coefficient Of Variation (GICOV), Average gradient strength and sundries.</ListGroup.Item>
                        </ListGroup>

{/*----------------------------------------------14th title-----------------------------------------------*/}
<Card.Text className="mt-5 mb-5 pt-2 sub_text text-start text-info text-decoration-underline fs-4 px-5 text-uppercase">Biologically Relevant Features (BRF):</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We devised novel biologically relevant features useful for predicting breast cancer
disease survival and recurrence from histopathological images.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Towards achieving this goal, we developed three mathematical
features such as</ListGroup.Item>
                        
<Card.Body className="w-75">
  <ListGroup.Item className=" sub_text text-start fs-5 px-5  text-secondary border-0">(a) Deviation from ellipticity,</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0">(b) Cell co-location pattern, and</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0">(c) Mitotic count that translates three distinct
biologically relevant features</ListGroup.Item>
  <Card.Text className=" w-75 ms-5 sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">(i) cellular pleomorphism,</Card.Text>
<Card.Text className="w-75 ms-5 sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">(ii) tubule formation (randomness and abnormal aberrations of the
epithelial cell structure), and</Card.Text>
<Card.Text className="w-75 ms-5 sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">(iii) mitosis that indicates the presence of cancer respectively. Pathologists determine the grade
of the cancer of the patients based on these biologically relevant features.</Card.Text>
</Card.Body>
<ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Our mathematical features could replicate the
grading offered by pathologists that could avoid the inter- and intra-observer variability and predict the breast cancer disease
survival and recurrence from histopathological images.</ListGroup.Item>
</ListGroup>
</Card>
</Tab.Pane>


{/*------------------------------------------------------NATURAL LANGUAGE PROCESSING---------------------------------------------------------*/}
           
<Tab.Pane eventKey="three" id="nlp">
<Card className="mt-5 pt-5 text-center border-0 ">
<Card.Title className="fs-1 text-decoration-underline mb-5 text-uppercase">NATURAL LANGUAGE PROCESSING</Card.Title>
</Card>
<Tabs
      defaultActiveKey="one-one"
      id="justify-tab-example"
      className="mb-5 pt-5 mt-5 mx-5   "
      justify
    >
      <Tab eventKey="one-one" title="ANAPHORE RESOLUTION"  >
       
      </Tab>
      <Tab eventKey="one-two" title="TEXT SUMMARIZATION">
     
      </Tab>
      <Tab eventKey="one-three" title="SENTIMENT ANALYSIS">
        
      </Tab>
      <Tab eventKey="one-four" title="MULTIMODAL HATE SPEECH DETECTION" >
        
      </Tab>
    </Tabs>
             
</Tab.Pane>

{/*------------------------------------------------------INDUSTRY 4.0---------------------------------------------------------*/}
<Tab.Pane eventKey="four" className="mb-5" id="indust"> 
<Card className="mt-5 pt-5 text-center border-0 ">
                <Card.Title className="fs-1 text-decoration-underline mb-5">INDUSTRY 4.0</Card.Title>
                <Card.Title className="fs-3 text-center mb-2 text-uppercase">Developemnt of Machine Learning (Data Driven) based Controller</Card.Title>
                <Card.Body className="py-5 text-start fs-5 sub_text px-3">Many industrial tasks performed by robots require position-force control. In practice, engineers have to tune the force control
gains on a case by case basis, in order to adapt to the different stiffness, damping or clearance of work pieces (environment).
In contrast to the non-trivial gain tuning of conventional controller, since data-driven learning allows to reduce the amount
of engineering knowledge, we advocate a different approach and speed up learning by extracting more information from
data. In particular, we learn a probabilistic, non-parametric Gaussian process transition model of the system. By explicitly
incorporating model uncertainty into long-term planning and controller learning our approach reduces the effect of model
errors, a key problem in model-based learning. It turned out that proposed technique leads to a significant improvement
over knowledge-based solutions. The reason is that the machine learning is not limited by the imagination of an expert, but
is directly evaluating the process behavior instead. In addition, data driven controller outperforms in unforeseen situations.</Card.Body>
<Card.Title className="fs-3 text-center mb-2 text-uppercase">Combining Sensors to Improve the Accuracy of the Controller</Card.Title>
                <Card.Body className="py-5 text-start fs-5 sub_text px-3">Designing Arduino based controller for controlling the level of the water in the tank using ultrasonic sesnor is a well-known
problem. I with my students have incorporated multiple sensors: ultrasonic, visual sensor (camera) and temperature sensor
to control the level and temperature of the water in the tank which in turn increase the accuracy of the controller. Similarly,
following line automatically by robot is a popular research problem which has several applications such as,
<Card.Body className="w-75 my-4">
  <ListGroup.Item className=" sub_text text-start fs-5 px-5  text-secondary border-0">(i) industrial:
automated equipment carriers replacing traditional conveyor belts;</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0">(ii) automobile: automatic cars running on roads with embedded magnets;</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0">(iii) domestic: floor cleaning; and</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0">(iv) guidance: public places like shopping malls, museums etc to
provide path guidance.</ListGroup.Item>
  
</Card.Body>
<ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The strength of our algorithm is that we developed a Raspberry based controller using multiple
sensors: infrared, camera and ultrasonic that can deviate from the line in the presence of obstacles and again return and
follow the line.</ListGroup.Item>
<ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We implemented camera calibration algorithm and utilized kalman filter to combine multiple sensors.</ListGroup.Item>

</Card.Body>                  
                    
                  {/*---------------------------Automation of Industrial Robots for Manufacturing Operations-----------------------------------------*/}                   
                    
                  <Card.Title className="fs-3 text-center mb-2 text-uppercase">Automation of Industrial Robots for Manufacturing Operations</Card.Title>
                    <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Automatizing Peg-Hole Insertion Task by Industrial Robot:</Card.Text>
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Parts mating, peg in hole insertion or assembly operation is
the most common operation in industry production, but autonomous execution by robots can significantly increase overall
productivity.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Peg in hole insertion task is a topic largely addressed and long standing problem in robotic research, the
popularity of which is not only due to its importance in many industrial assembly tasks, but also for its complexity as
a control problem that requires both position and force regulation.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed both computer vision and without
computer vision based algorithms to automate the peg in hole insertion task.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We implemented a fast template matching
algorithm and followed by non-linear camera calibration method to automatically finding the peg and hole in the complex
working environment.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">However, occlusion and imprecise sensor make the automation task difficult in several occasions.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Hence, we portrayed the problem of peg in hole insertion search as a travelling salesman based grid search problem and we
automatically look for the work pieces through force-torque sensor built in robot end-effector.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Then, we developed both
impedance and machine learning based controller for regulating force control.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We also offered fast and accurate convergence
of robot inverse kinematic solutions by incorporating domain knowledge into novel multi-objective genetic and differential
evolution algorithms</ListGroup.Item>
<ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We executed the real experiment on Motoman MH-6, gantry or cartesian, and Crustcrawler AX-18
industrial robot.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We also facilitated the use of Motoman SDA-20 dual-arm robot equipped with two three fingered gripper
and a force/torque sensing capability for human like operations such as the peg-in-hole tasks by learning contact states using
ANN Fuzzy ARTMAP architecture.</ListGroup.Item>
                    </ListGroup>

                {/*--------------------------------4th ---------------------------------------------*/}
                    <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Design a Novel Adaptive and Reconfigurable Robot Gripper using FEM:</Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In another effort, with one of my master students,
we developed and implemented a novel Finite Element Method (FEM) based modelling for single degree-of-freedom adaptive
and reconfigurable four -fingered robot gripper for automating industrial applications.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">FEM based deformation and stress
analysis facilitates:</ListGroup.Item>
<Card.Body className="w-75 my-4">
  <ListGroup.Item className=" sub_text text-start fs-5 px-5  text-secondary border-0">(a) minimizing the cost of the gripper by selecting cost-effective material that can grab a wide range of
objects, and</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0">(b) estimating the remaining useful life of the critical components through fatigue analysis.</ListGroup.Item>
  
  
</Card.Body>

</ListGroup>
                        {/*---------------------------5th title--------------------------------------*/}
                        <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Probabilistic Visual Slam: </Card.Text>   
                    <ListGroup variant="flush ">
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed a modified Extended Kalman filter and particle filter algorithm as well as we
exploited weighted Harris Corner and Sift based point features for visual Simultaneous Localization And Mapping (SLAM)
algorithm.</ListGroup.Item>
                        <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We evaluated the performance of our SLAM implementation from two perspectives. First, we compared the
robot’s estimated trajectory with respect to the ground truth.</ListGroup.Item>
                       
                       <ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Second, we evaluated the quality of the generated map by
comparing distances between landmarks suggested by the generated map with the corresponding physical distances.</ListGroup.Item>
<ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Our
results illustrate that the estimated distances between landmarks are reasonably close to the groundtruth.</ListGroup.Item>
<ListGroup.Item className="lh-lg sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Also, the relative
distance estimated between selected landmarks in the map converges to a stable value which is close the ground truth.
</ListGroup.Item></ListGroup>

{/*-----------------------------------------------Automation and Optimization of Welding Process----------------------------*/}



<Card.Title className="fs-3 text-center mb-2 text-uppercase mt-5">Automation and Optimization of Welding Process</Card.Title>
                    <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Welding Sequence Optimization:</Card.Text>
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Welding is the most common fabrication process which is extensively used in a wide
range of industries such as automotive, shipbuilding, aerospace, pipelines, heavy and earth-moving equipment.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Welding
deformation and effective (residual) stress derive several negative impact to the manufacturing process and add additional
cost in various ways, such as constraints in the design phase, extra operations, cost of quality and overall capital expenditure.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">With one of my PhD students, we developed novel modified Lowest Cost Graph Search (LCGS) [19], multi-objective Genetic
Algorithm (GA) [14] as well as Reinforcement Learning (RL) [15] based Welding Sequence Optimization (WSO) techniques
for reducing welding deformation and residual stress.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We first demonstrated in literature the effectiveness of WSO using the
the combination of conventional and Low Temperature Transformation (LTT) welding wires in the same weldment.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">LTT
increases the fatigue life by introducing compressive residual stresses.</ListGroup.Item>
                        
                    </ListGroup>


{/*-----------------------------------Vision based Automated Welding Quality Inspection:--------------------------*/}

                    <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Vision based Automated Welding Quality Inspection:</Card.Text>
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The computer visual tracking of free-flight metal transfer is an
important part in the hgh-quality industrial welding.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">However, the main difficulty in using visual inspection to evaluate the
weld quality is the time taken and labor wasted.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In order to solve these problems, an automated vision-based system is
presented for non-destructive and online post-welding quality inspection.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The trouble with respect to vision-based system
is the robustness of image processing algorithms.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed an active contour followed by Kalman filter algorithm for
computer visual tracking from high speed videos of free-flight metal transfer.</ListGroup.Item>
                        
                    </ListGroup>




{/*-----------------------------------Mathematical Modelling of Weld Bead in WAAM:--------------------------*/}

<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Mathematical Modelling of Weld Bead in WAAM:</Card.Text>
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed a novel nonlinear regression followed by Taguchi method
for modelling of welding bead geometry in Wire and Arc Additive Manufacturing (WAAM).</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">WAAM has been evolved as
an alternative to traditional manufacturing specially for fabricating large aerospace metal components that feature high
buy-to-fly ratios.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Bead modelling determines the optimum weld settings corresponding to the desired bead geometry.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The
strength, density and homogeneity of the deposited material depends on the bead geometry.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Controlling the bead geometry
of the workpiece is much easier and is used to predict its mechanical properties.</ListGroup.Item>
                        
                    </ListGroup>



{/*-----------------------------------Virtual Training forWelder through Augmented and Virtual Reality:--------------------------*/}

<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Virtual Training forWelder through Augmented and Virtual Reality:</Card.Text>
                    <ListGroup variant="flush ">
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Virtual training is a vital way of educating technicians
to make them prepared for real maintenance work.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed a Virtual Maintenance Trainer (VMT) for welders, which
can provide a detailed simulation of the welding process during operation.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The welders are able to complete courses and lessons with specific procedures such as calculation of welding nozzle angle, optimal sequence of welding bead, and weld
speed.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">This study explores virtual and augmented reality as an education tools.</ListGroup.Item>
                        <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The advantages and disadvantages of
current implementations are examined to provide an optimal system which could work to give welders a realistic practical
training simulation experience.</ListGroup.Item>
                        
                    </ListGroup>

{/*--------------------------------Combining and Classifying Multiple Sensor Data---------------------------------------------*/}
      

      {/*--------------------------------A Prognostic Model for Critical Components of a Hydraulic System:---------------------------------------------*/}


<Card.Title className="fs-3 text-center mb-2 text-uppercase mt-5">Combining and Classifying Multiple Sensor Data</Card.Title>
  <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">A Prognostic Model for Critical Components of a Hydraulic System:</Card.Text>
    <ListGroup variant="flush ">
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The growing need to increase the competitiveness
of industrial systems requires a reduction of maintenance costs, without compromising safe plant operation.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Therefore,
forecasting the future behavior of a system or component allows more optimal maintenance planning and cost savings,
because unexpected repairs and downtime can be avoided.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">More generally, the prediction of future failures can provide
key information to the decision-making process.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Prognostics is an emerging science of predicting the health condition of a
system and/or its components, based upon current and previous system status.</ListGroup.Item>
                        
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Maintenance activities are then performed on the basis of necessity, as identified by a predictive maintenance system.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In this
study we divide the health status of an equipment into three stages: normal, transition, and failure.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">We developed a novel
support vector machine based online control chart to identify as soon as the health status of an equipment changes from
normal to transition state so that the longevity of the equipment can be extended through performing predictive maintenance.</ListGroup.Item>                      
                    </ListGroup>     

      {/*--------------------------------Remaining Useful Life (RUL) for Bearing:---------------------------------------------*/}



  <Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Remaining Useful Life (RUL) for Bearing:</Card.Text>
    <ListGroup variant="flush ">
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Failure prognostic activity aims at anticipating the failure date by predicting
the future health state of a given component, sub-system or system and its Remaining Useful Life (RUL).</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">This research
deals with a data-driven diagnostic and prognostic method based on a Mixture of Gaussians Hidden Markov Model.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The
prognostic process of the proposed method is made in two steps.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In the first step, which is performed offline, the monitoring
data provided by sensors are processed to extract features, which are then used to learn different models that capture the
time evolution of the degradation and therefore of the system’s health state.</ListGroup.Item>
                        
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In the second step, performed online, the
learned models are exploited to perform failure diagnostic and prognostic by estimating the asset’s current health state, its
remaining useful life and the associated confidence degree.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The efficiency of our method is tested on a benchmark data
related to several bearings.</ListGroup.Item></ListGroup>

{/*--------------------------------Vibration Analysis as well as Detection and Suppression of Drilling Chatter:---------------------------------------------*/}



<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Vibration Analysis as well as Detection and Suppression of Drilling Chatter:</Card.Text>
    <ListGroup variant="flush ">
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Chatter is a kind of self-induced vibration
common in the metal-cutting. In the precision machining process, the effective suppression of cutting chatter is of great
significance for processing accuracy, surface finish and tool life.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">During drilling operation, When the rotational frequency
becomes equal to the natural frequency, chattering occurs.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">To avoid cutting chatter effectively, we develop two different
methods for chatter identification before it has fully developed.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Vibration of the system is recorded through accelerometers.</ListGroup.Item>
                        
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">First we exploit wavelet transform, which can image the information in both the time and frequency domain is passed through
a Convolutional Neural Network (CNN) for the early detection of chatter.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In another method, we developed a novel kalman
filter based online control chart to monitor the vibration and detect the chatter from its inception. Kalman fiter is used to
combine multiple sensors.</ListGroup.Item>
                           
</ListGroup> 

{/*--------------------------------Monitoring and Controlling the Temperature of an Industrial Furnace:---------------------------------------------*/}



<Card.Text className="mt-5 pt-2 sub_text text-start text-info text-decoration-underline fs-5 px-5">Monitoring and Controlling the Temperature of an Industrial Furnace:</Card.Text>
    <ListGroup variant="flush ">
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In this study, we advocate a data driven adaptive
PID controller for the optimal temperature control of an industrial furnace.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">Our proposal involves a two step procedure for
the prediction of the temperature and the estimation of the optimal values of control variables.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In the prediction step, we
use a machine learning approach based on neural networks to predict the temperature change due to certain changes in
the amount of the control parameters.</ListGroup.Item>
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">In the optimization step, we use a meta heuristic algorithm based on Differential
Evolution to find the optimal values of the control parameters to reach the furnace temperature equal to the set point
temperature at each time point at different area of the furnace.</ListGroup.Item>
                        
      <ListGroup.Item className=" sub_text text-start fs-5 px-5 border-bottom-0 text-secondary">The effectiveness of our proposal is shown in data from an
experiment with an industrial furnace.</ListGroup.Item>
      
</ListGroup> 
</Card>  
</Tab.Pane>
{/*------------------------------------------Cognitive Science-----------------------------------------------------*/}
            
<Tab.Pane eventKey="five" id="cs">

<Card className="mt-5 pt-5 text-center border-0 ">
                <Card.Title className="fs-1 text-decoration-underline mb-5 text-uppercase">Cognitive Science</Card.Title>
                <Card.Title className="fs-3 text-center mb-2 text-uppercase text-info fw-bold">Computational Cognitive Science</Card.Title>
                <Card.Body className="py-5 text-start fs-5 sub_text px-3">As a statistician it was a matter of curiosity for me to measure mental and psychological processes. Statistical models
are being applied to various disciplines outside engineering. Another thematically distinctive area of research is Applied
Psychology. I felt motivated to develop statistical models, an also understand how socio-psychological processes in behavior
may be predicted. This kind of research also has relevance for artificial intelligence and computational systems of perception
and simulation. I participated in experiment design and analysis for three different studies:</Card.Body>

<Card.Body className="w-75 my-4 ms-5">
  <ListGroup.Item className=" sub_text text-start fs-5 px-5  text-secondary border-0 mb-3 lh-base">(i) color perception: we evaluate
cognitive perception of the different segments of the population on the color “Rosa Mexicano", which is widely used in
art, fashion, painting, architecture, and crafts;</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0 mb-3 lh-base">(ii) (ii) statistical measurement of perception in interactive game: we
designed an interactive media to check whether a short real time intervention could act as a mood changer for adolescents,
in a stressful learning scenarios such as classroom and respondents’ reaction were collected on a combined psychological
emotional-valence scale and;</ListGroup.Item>
  <ListGroup.Item className=" sub_text text-start fs-5 px-5 text-secondary border-0 mb-3 lh-base">(iii) Computer Generated Biological Imagery (CGBI) to stimulate horripilation: we studied
the specific effect of visual imagery of physical sensational horror which aims at evoking effects of chills, or goosebumps
involving nervous shudder and withdrawal from objects of contemplation.</ListGroup.Item> 
</Card.Body>
<ListGroup variant="flush ">
<ListGroup.Item className=" sub_text text-start fs-5 border-bottom-0  mb-5">Statistical tools and techniques (factor analysis,
ANOVA), visualization (pie-bubble chart), and image processing algorithms have been implemented in these projects.</ListGroup.Item></ListGroup>
</Card>
</Tab.Pane>
{/*------------------------------------------Multimodal Signal Processing-----------------------------------------------------*/}

<Tab.Pane eventKey="six" id="msp">
<Card className="mt-5 pt-5 text-center border-0 ">
                <Card.Title className="fs-1 text-decoration-underline mb-5 text-uppercase">Multimodal Signal Processing</Card.Title>
                <Card.Title className="fs-3 text-center mb-2 text-uppercase text-info fw-bold">Imaging Genomics in Cancer Research</Card.Title>
                <Card.Body className="py-5 text-start fs-5 sub_text px-5  my-5">In recent years, a new direction in cancer research referred to as “radiogenomics or imaging genomics" has emerged to
address methodologies of associating imaging features (imaging phenotype or radiophenotype) with genomic data (molecular
phenotype or genotype). Recently, I received a basic science research grant for three years to find the potential association
between imaging phenotype and genotype for the treatment of breast cancer. Late stage patients clearly benefit from more
aggressive treatments such as chemotherapy, while for early stage patients the toxicity of the treatment may predominate
the benefit. Early-stage cancers are the target of the Oncotype DX (genomic) test to find distinct subgroups within the
early-stage group with different recurrence probabilities that urge for chemotherapy. However, the Oncotype DX test is very
expensive but histological imaging is less expensive. We study that both histopathological findings and molecular alterations
that reflect the biological properties of individual primary breast carcinomas and they demonstrate strong association among
them. Prognostic decisions with only histological imaging for early stage patients could reduce the treament cost significantly.
We advocate Deep CNN to delve the potential associations among imaging and genomic biomarkers.</Card.Body>


</Card>           
</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

    <Card.Footer className="text-center bg-white rounded-0 border-top p-2 text-secondary fw-normal others_card">Copyright &copy; 2022</Card.Footer>


    </>);
}

export default InterestSub;