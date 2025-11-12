import React from "react";
import Card from "react-bootstrap/Card";
import BlackNavBar from "./BlackNavBar";

function Awards() {
  return (
    <>
      <BlackNavBar />

      {/*----------------------------------------Awards Header ends--------------------------------------------*/}

      <div>
        <h1 className="awards_title text-center">AWARDS</h1>
        <div class="container py-5 ">
          <div class="main-timeline-4 text-white awards_cont">
            <div class="timeline-4 left-4">
              <div class="card gradient-custom">
                <div class="card-body p-4">
                  <h4>2020-2025</h4>

                  <p>
                    Prestigious NSERC discovery and a launch supplement grant as
                    an early career researcher
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 right-4">
              <div class="card gradient-custom-4">
                <div class="card-body p-4">
                  <h4>2020-2025</h4>

                  <p>
                    Reduction in teaching award to support research by Concordia
                    University of Edmonton
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 left-4">
              <div class="card gradient-custom">
                <div class="card-body p-4">
                  <h4>2015-2017</h4>

                  <p>
                    Member of the National System of Researchers (SNI), Mexico,
                    level 1
                  </p>
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

                  <p>
                    Received a basic science research grant as a Young
                    Investigator from CONACYT, Mexico.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 left-4">
              <div class="card gradient-custom">
                <div class="card-body p-4">
                  <h4>2011-2014</h4>

                  <p>
                    Postdoctoral Fellowship Offers from the University of
                    Calgary, University of Pittsburgh, Wake Forest School of
                    Medicine, and Mayo Clinic
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 right-4">
              <div class="card gradient-custom-4">
                <div class="card-body p-4">
                  <h4>2009-2010</h4>

                  <p>MITACS industrial internship awards for three times</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 left-4">
              <div class="card gradient-custom">
                <div class="card-body p-4">
                  <h4>2002-2011</h4>

                  <p>
                    Recipient of multiple summer internship awards at leading
                    software and manufacturing companies in India and Canada
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 right-4">
              <div class="card gradient-custom-4">
                <div class="card-body p-4">
                  <h4>2002-2011</h4>

                  <p>
                    Teaching and Research Fellowship, Indian Statistical
                    Institute & University of Alberta
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="timeline-4 left-4">
              <div class="card gradient-custom">
                <div class="card-body p-4">
                  <h4>2007</h4>

                  <p>
                    Mary Louise Imrie & J Gordin Kaplan Graduate Student Travel
                    award, University of Alberta
                  </p>
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

export default Awards;
