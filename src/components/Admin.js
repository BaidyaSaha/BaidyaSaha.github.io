import React from "react";
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import WhiteNavBar from "./WhiteNavBar";

function Admin(){
    return(<>
    <WhiteNavBar/>
 
 
{/*----------------------------------------------Home Nav bar ends-------------------------------------------*/}
<Container fluid className="px-0 h-100">
<div className="bg_height">
          
<section class="gradient-custom-5 admin_bg h-75">
<h1 className="admin_title text-center shadow-5">ADMINISTRATION DETAILS</h1>
        
  <div class="container py-5">
    <div class="main-timeline-5">
      <div class="timeline-5 right-5">
        <div class="card ">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Chair, Mathematical and Physical Sciences and MSc-IT Program Director</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Graduate Studies Faculty Council Representative</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">One of the representatives from Science in General Faculties Council (GFC)</h5>
        
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Member of AI course curriculum development committee for Artificial Intelligence
pathway Program (AIPP) in collaboration with Norquest College</h5>
          </div>
        </div>
      </div>
      

      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Member of Faculty Hiring Committee (Math and Information Technology)</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Coordinator of Information Technology program</h5>
            
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Member of Science Faculty Council</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Co-Director (Academic) of Interdisciplinary Research Cluster on Machine
Learning & Artificial Intelligence (IRCMLAI)</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">One of the Concordia representatives for launching IT dual credit courses
(IT 101 and IT 110) to Edmonton Catholic School District (ECSD)</h5>
          </div>
        </div>
      </div>
      <div class="timeline-5 right-5">
        <div class="card">
          <div class="card-body p-4 text-center">
            <h5 className="fw-normal admin_para">Expert reviewer of CUE’s Program to Assist Grant Endeavours (PAGE)</h5>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
</div>
</Container>

{/*-----------------------------------------Admin timeline ends------------------------------------------------*/}
<Card.Footer className="text-center bg-white rounded-0 border-top pt-3 pb-2 fs-5 text-secondary fw-normal others_card">Copyright &copy; 2022</Card.Footer> 
          
          
          </>);
}

export default Admin;