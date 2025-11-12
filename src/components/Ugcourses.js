// import first from "./image/2022.jpg";
// import second from "./image/2021.png";
// import third from "./image/2020.webp";
// import four from "./image/2019.png";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import ListGroup from "react-bootstrap/ListGroup";
// import BlackNavBar from "./BlackNavBar";

// function UGCourses() {
//   return (
//     <>
//       <BlackNavBar />

//       {/*----------------------------------------------Undergraduate Nav bar ends-------------------------------------------*/}

//       <div className="container-fluid cont_c2 mb-5">
//         <div className="c2title_cont">
//           <h1 className="text-center c3_title">UG Studies</h1>
//         </div>
//       </div>

//       <br />
//       <br />

//       <Container className="py-5 text-center">
//         <Card.Text className="fs-4">
//           Teaching at Concordia University of Edmonton, Canada
//         </Card.Text>
//       </Container>

//       {/*-------------------------------------------------Course cards-------------------------------------------------------*/}

//       <Container className="mb-5">
//         <Row>
//           <Col className="my-4" sm={6}>
//             <Card className="border-dark  border-2">
//               <Row>
//                 <Col className="col-md-4   mx-auto my-auto">
//                   <div>
//                     <h2>2022</h2>
//                   </div>
//                   {/* <Card.Img
//                     src={first}
//                     alt="2022"
//                     className="c3_img mt-4 ms-4  "
//                   ></Card.Img> */}
//                 </Col>
//                 <Col className="col-md-8 border-start border-dark border-1 ">
//                   <Card.Body>
//                     <ListGroup variant="flush" className="mt-2">
//                       <ListGroup.Item className="pb-3  fs-5 ">
//                         Winter - Machine Leaning Basics (IT 493)
//                       </ListGroup.Item>
//                       <ListGroup.Item className="fs-5 pt-3">
//                         Winter - Senior Capstone Project (IT 451 & IT 452)
//                       </ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>
//         {/*----------------------------------------Card 2022 ends--------------------------------------------*/}

//         <Row>
//           <Col className="my-4" md={{ span: 6, offset: 2 }}>
//             <Card className="border-dark  border-2">
//               <Row>
//                 <Col className="col-md-4 border-end border-dark border-1 mx-auto my-auto">
//                   <Card.Img
//                     src={second}
//                     alt="2021"
//                     className="c3_img "
//                   ></Card.Img>
//                 </Col>
//                 <Col className="col-md-8">
//                   <Card.Body>
//                     <ListGroup variant="flush" className="mt-4">
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Winter -Senior Capstone Project (IT 451 & IT 452)
//                       </ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>

//         {/*----------------------------------------Card 2021 ends--------------------------------------------*/}
//         <Row>
//           <Col className="my-4" md={{ span: 6, offset: 4 }}>
//             <Card className="border-dark  border-2">
//               <Row>
//                 <Col className="col-md-4 my-auto mx-auto">
//                   <Card.Img
//                     src={third}
//                     alt="2020"
//                     className="c3_img"
//                   ></Card.Img>
//                 </Col>
//                 <Col className="col-md-8 border-start border-dark border-1">
//                   <Card.Body>
//                     <ListGroup variant="flush">
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Fall, Winter - Senior Capstone Project (IT 451 & IT 452)
//                       </ListGroup.Item>
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Fall - Introduction to Computing Science (CMPT 111)
//                       </ListGroup.Item>
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Winter - Introduction to Software Development (CMPT 211)
//                       </ListGroup.Item>
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Winter - Introduction to Information Technology (IT 101)
//                       </ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>

//         {/*----------------------------------------Card 2020 ends--------------------------------------------*/}
//         <Row>
//           <Col className="my-4" md={{ span: 5, offset: 6 }}>
//             <Card className="border-dark  border-2">
//               <Row>
//                 <Col className="col-md-4 my-auto mx-auto ">
//                   <Card.Img src={four} alt="2019" className="c3_img"></Card.Img>
//                 </Col>
//                 <Col className="col-md-8 border-start border-dark border-1 ">
//                   <Card.Body>
//                     <ListGroup variant="flush">
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Fall - Introduction to Information Technology (IT 101)
//                       </ListGroup.Item>
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Fall - Introduction to Computing Science (CMPT 111)
//                       </ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>

//         {/*----------------------------------------Card 2019 ends--------------------------------------------*/}

//         <Row>
//           <Col className="my-4" md={{ span: 6, offset: 7 }}>
//             <Card className="border-dark  border-2">
//               <Row>
//                 <Col className="col-md-4 my-auto mx-auto ">
//                   <h2>2011</h2>
//                   {/* <Card.Img src={four} alt="2007" className="c3_img"></Card.Img> */}
//                 </Col>
//                 <Col className="col-md-8 border-start border-dark border-1 ">
//                   <Card.Body>
//                     <ListGroup variant="flush">
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Winter - 3D Graphics and Animation with 3DS Max
//                       </ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>

//         {/*----------------------------------------Card 2011 ends--------------------------------------------*/}

//         <Row>
//           <Col className="my-4" md={{ span: 5, offset: 6 }}>
//             <Card className="border-dark  border-2">
//               <Row>
//                 <Col className="col-md-4 my-auto mx-auto ">
//                   <h2>2010</h2>
//                   {/* <Card.Img src={four} alt="2007" className="c3_img"></Card.Img> */}
//                 </Col>
//                 <Col className="col-md-8 border-start border-dark border-1 ">
//                   <Card.Body>
//                     <ListGroup variant="flush">
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Fall - Optimizations in image analysis
//                       </ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>

//         {/*----------------------------------------Card 2010 ends--------------------------------------------*/}

//         <Row>
//           <Col className="my-4" md={{ span: 5, offset: 6 }}>
//             <Card className="border-dark  border-2">
//               <Row>
//                 <Col className="col-md-4 my-auto mx-auto ">
//                   <h2>2009</h2>
//                   {/* <Card.Img src={four} alt="2007" className="c3_img"></Card.Img> */}
//                 </Col>
//                 <Col className="col-md-8 border-start border-dark border-1 ">
//                   <Card.Body>
//                     <ListGroup variant="flush">
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Fall - Numerical methods
//                       </ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>

//         {/*----------------------------------------Card 2009 ends--------------------------------------------*/}

//         <Row>
//           <Col className="my-4" md={{ span: 5, offset: 6 }}>
//             <Card className="border-dark  border-2">
//               <Row>
//                 <Col className="col-md-4 my-auto mx-auto ">
//                   <h2>2008</h2>
//                   {/* <Card.Img src={four} alt="2007" className="c3_img"></Card.Img> */}
//                 </Col>
//                 <Col className="col-md-8 border-start border-dark border-1 ">
//                   <Card.Body>
//                     <ListGroup variant="flush">
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Fall - Numerical methods
//                       </ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>

//         {/*----------------------------------------Card 2008 ends--------------------------------------------*/}

//         <Row>
//           <Col className="my-4" md={{ span: 5, offset: 6 }}>
//             <Card className="border-dark  border-2">
//               <Row>
//                 <Col className="col-md-4 my-auto mx-auto ">
//                   <h2>2007</h2>
//                   {/* <Card.Img src={four} alt="2007" className="c3_img"></Card.Img> */}
//                 </Col>
//                 <Col className="col-md-8 border-start border-dark border-1 ">
//                   <Card.Body>
//                     <ListGroup variant="flush">
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Winter - Numerical methods
//                       </ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>

//         {/*----------------------------------------Card 2007 ends--------------------------------------------*/}

//         <Row>
//           <Col className="my-4" md={{ span: 5, offset: 6 }}>
//             <Card className="border-dark  border-2">
//               <Row>
//                 <Col className="col-md-4 my-auto mx-auto ">
//                   <h2>2006</h2>
//                   {/* <Card.Img src={four} alt="2006" className="c3_img"></Card.Img> */}
//                 </Col>
//                 <Col className="col-md-8 border-start border-dark border-1 ">
//                   <Card.Body>
//                     <ListGroup variant="flush">
//                       <ListGroup.Item className="p-3  fs-5 ">
//                         Fall - Introduction to Computing
//                       </ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/*----------------------------------------Card 2006 ends--------------------------------------------*/}

//       {/*------------------------------------------Footer ----------------------------------------------*/}

//       <Card.Footer className="text-center fs-5 bg-dark rounded-0 border-top p-3 text-white fw-normal others_card">
//         Copyright &copy; 2022
//       </Card.Footer>
//     </>
//   );
// }

// export default UGCourses;

import { Card, Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import BlackNavBar from "./BlackNavBar";

// CSS styles for circular year badges
const yearCircleStyle = (isOdd) => ({
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: isOdd ? "black" : "white",
  color: isOdd ? "white" : "black",
  border: isOdd ? "none" : "2px solid black",
  margin: "auto",
});

const yearTextStyle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "bold",
};

function UGCourses() {
  const coursesData = [
    {
      year: 2024,
      courses: [
        "Winter - Machine Leaning Basics (IT 493)",
        "Winter - Senior Capstone Project (IT 451 & IT 452)",
      ],
      offset: 0,
      span: 6,
    },
    {
      year: 2023,
      courses: [
        "Winter - Machine Leaning Basics (IT 493)",
        "Winter - Senior Capstone Project (IT 451 & IT 452)",
      ],
      offset: 0,
      span: 6,
    },
    {
      year: 2022,
      courses: [
        "Winter - Machine Learning Basics (IT 493)",
        "Winter - Senior Capstone Project (IT 451 & IT 452)",
      ],
      offset: 0,
      span: 6,
    },
    {
      year: 2021,
      courses: ["Winter - Senior Capstone Project (IT 451 & IT 452)"],
      offset: 2,
      span: 6,
    },
    {
      year: 2020,
      courses: [
        "Fall, Winter - Senior Capstone Project (IT 451 & IT 452)",
        "Fall - Introduction to Computing Science (CMPT 111)",
        "Winter - Introduction to Software Development (CMPT 211)",
        "Winter - Introduction to Information Technology (IT 101)",
      ],
      offset: 2,
      span: 6,
    },
    {
      year: 2019,
      courses: [
        "Fall - Introduction to Information Technology (IT 101)",
        "Fall - Introduction to Computing Science (CMPT 111)",
      ],
      offset: 2,
      span: 6,
    },
    {
      year: 2011,
      courses: ["Winter - 3D Graphics and Animation with 3DS Max"],
      offset: 4,
      span: 6,
    },
    {
      year: 2010,
      courses: ["Fall - Optimizations in image analysis"],
      offset: 4,
      span: 6,
    },
    {
      year: 2009,
      courses: ["Fall - Numerical methods"],
      offset: 4,
      span: 6,
    },
    {
      year: 2008,
      courses: ["Fall - Numerical methods"],
      offset: 6,
      span: 6,
    },
    {
      year: 2007,
      courses: ["Winter - Numerical methods"],
      offset: 6,
      span: 6,
    },
    {
      year: 2006,
      courses: ["Fall - Introduction to Computing"],
      offset: 6,
      span: 6,
    },
  ];

  return (
    <>
      <BlackNavBar />
      <div className="container-fluid cont_c2 mb-5">
        <div className="c2title_cont">
          <h1 className="text-center c3_title">UG Studies</h1>
        </div>
      </div>

      <br />
      <br />

      <Container className="py-5 text-center">
        <Card.Text className="fs-4">
          Teaching at Concordia University of Edmonton, Canada
        </Card.Text>
      </Container>

      <Container className="mb-5">
        {coursesData.map((data, index) => (
          <Row key={data.year}>
            <Col className="my-4" md={{ span: data.span, offset: data.offset }}>
              <Card className="border-dark border-2">
                <Row>
                  <Col className="col-md-4 my-auto mx-auto">
                    <div style={yearCircleStyle(index % 2 === 0)}>
                      <h2 style={yearTextStyle}>{data.year}</h2>
                    </div>
                  </Col>
                  <Col className="col-md-8 border-start border-dark border-1">
                    <Card.Body>
                      <ListGroup variant="flush">
                        {data.courses.map((course, courseIndex) => (
                          <ListGroup.Item
                            key={courseIndex}
                            className="p-3 fs-5"
                          >
                            {course}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>

      <Card.Footer className="text-center fs-5 bg-dark rounded-0 border-top p-3 text-white fw-normal others_card">
        Copyright &copy; 2025
      </Card.Footer>
    </>
  );
}

export default UGCourses;
