import React from "react";
import Card from "react-bootstrap/Card";
import BlackNavBar from "./BlackNavBar";

function Grants() {
  return (
    <>
      <BlackNavBar />

      {/*----------------------------------------Awards Header ends--------------------------------------------*/}

      <div>
        <h1 className="awards_title text-center">GRANTS</h1>
        <div class="container py-5 ">
          <div class="main-timeline-4 text-white awards_cont">
            <div class="timeline-4 left-4">
              <div class="card gradient-custom">
                <div class="card-body p-4">
                  <h4>2025-2026</h4>
                  <p>
                    Mathematics of Information Technology and Complex Systems
                    (MITACS) Business Strategy Internship (BSI)
                  </p>
                  New User Enrollment System
                </div>
              </div>
            </div>
            <div class="timeline-4 right-4">
              <div class="card gradient-custom-4">
                <div class="card-body p-4">
                  <h4>2020-2027</h4>
                  <p>NSERC Discovery and a Launch Supplement Grant</p>A unifying
                  framework for integrating domain knowledge into machine
                  learning algorithms for multidisciplinary industrial
                  applications
                </div>
              </div>
            </div>
            {/* <div class="timeline-4 right-4">
              <div class="card gradient-custom-4">
                <div class="card-body p-4">
                  <h4>2025</h4>

                  <p>Mitacs Business Strategy Internship (BSI) Grant</p>
                </div>
              </div>
            </div> */}
            <br />
            <br />
            <br />
            <div class="timeline-4 left-4">
              <div class="card gradient-custom">
                <div class="card-body p-4">
                  <h4>2022</h4>
                  <p>Concordia University of Edmonton Internal Seed Grant</p>
                  Secure privacy-preserving distributed machine learning
                  algorithms for big data applications
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 right-4">
              <div class="card gradient-custom-4">
                <div class="card-body p-4">
                  <h4>2021</h4>
                  <p>Concordia University of Edmonton Internal Seed Grant</p>
                  Developing a novel Artificial Intelligence powered
                  socially-aware recommender system for massive Online social
                  network to filter the firehose of falsehood and propagation of
                  misinformation
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 left-4">
              <div class="card gradient-custom">
                <div class="card-body p-4">
                  <h4>2020</h4>
                  <p>
                    Concordia University of Edmonton Special Call for Research
                    Projects COVID-19 (SCRP COVID-19)
                  </p>
                  Machine Learning based Rapid Self-Assessment and Understanding
                  of COVID-19 Disease Progression to Support Public Policy
                  Decisions
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 right-4">
              <div class="card gradient-custom-4">
                <div class="card-body p-4">
                  <h4>2019</h4>
                  <p>
                    NVIDIA Corporation Accelerated Data Science Call for
                    Proposals
                  </p>
                  Graphics Pro- cessing Unit (GPU) based acceleration for real
                  time big data stream processing, two (2) Titan V GPU.
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 left-4">
              <div class="card gradient-custom">
                <div class="card-body p-4">
                  <h4>2019</h4>
                  <p>Concordia University of Edmonton Internal Seed Grant</p>
                  Developing Efficient GPU based Differentiable End-to-End Deep
                  Learning Architecture for Big Data Applications
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 right-4">
              <div class="card gradient-custom-4">
                <div class="card-body p-4">
                  <h4>2016-2019</h4>
                  <p>Basic Science research fund, Conacyt, Mexico</p>
                  Potential Association between image based phenotypes and
                  genomic biomarkers for making therapeutic and prognostic deci-
                  sions of cancer
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 left-4">
              <div class="card gradient-custom">
                <div class="card-body p-4">
                  <h4>2010</h4>
                  <p>
                    MITACS ACCELERATE internship with industrial partner AQL
                    Management Consultants, Edmonton, Alberta, Canada
                  </p>
                  Automatic passenger counting for Edmonton Light Rail Transit
                  (LRT), Phase 1
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 right-4">
              <div class="card gradient-custom-4">
                <div class="card-body p-4">
                  <h4>2010</h4>
                  <p>
                    MITACS ACCELERATE internship with industrial partner AQL
                    Management Consultants, Edmonton, Alberta, Canada
                  </p>
                  Automatic passenger counting for Edmonton Light Rail Transit
                  (LRT), Phase 2
                </div>
              </div>
            </div>
            <div class="timeline-4 left-4">
              <div class="card gradient-custom">
                <div class="card-body p-4">
                  <h4>2009</h4>
                  <p>
                    MITACS ACCELERATE internship with industrial partner AQL
                    Management Consultants, Edmonton, Alberta, Canada
                  </p>
                  Thermal image analysis for automatic non-invasive dis- ease
                  detection from Alberta Veterinary Surveillance Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*-----------------------------------------Awards Footer------------------------------------------------------*/}
      <Card.Footer className="text-center bg-dark rounded-0 border-top p-2 text-white fw-normal others_card">
        Copyright &copy; 2025
      </Card.Footer>
    </>
  );
}

export default Grants;
