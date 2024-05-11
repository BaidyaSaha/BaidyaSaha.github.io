
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import BlackNavBar from './BlackNavBar';


function PgCourses(){
    return(
        <>
        <BlackNavBar />
        
 
{/*----------------------------------------------Postgraduate Nav bar ends-------------------------------------------*/}
<Container fluid className='pb-5 py-5  border-bottom border-2 mt-5 '>
  <Card className='mt-5  border-0 mb-5 w-50 mx-auto c2_toptitle'>
    <Card.Text className='mx-auto text-center c2_title py-5 mb-5 '> Graduate Studies</Card.Text>
  </Card>
</Container>



{/*---------------------------------------------------Title card ends---------------------------------------------------------------*/}
<Container >
<Card className='border-0'>
  <Card.Text className='c2_content mt-5 text-center'>Teaching at Concordia University of Edmonton, Canada</Card.Text>
</Card>

</Container>


<Container fluid className=' '>

<section className='c2_cards' >
  <div class="container py-5 c2_cardwhole">
    <div class="main-timeline-2">
      <div class="timeline-2 left-2">
        <div class="card">
         <h1 className='c2_card1 '>2022</h1>
          <div class="card-body p-4 c2_cardcont1">
            <h5 class="fw-bold mb-4 fs-6 text-left">Winter - Fundamentals of Big Data: Tools and Algorithms (IT 596)</h5>
            
          </div>
        </div>
      </div>
      <div class="timeline-2 right-2">
        <div class="card">
        <h1 className='c2_card1 text-center'>2021</h1>
          <div class="card-body p-4 c2_cardcont1">
          <h5 class="fw-bold mb-4 fs-6 text-left">Spring - IT Project (IT 581)</h5>
          <h5 class="fw-bold mb-4 fs-6 text-left">Fall - Machine Learning Tools and Techniques (IT 593)</h5>
          <h5 class="fw-bold mb-4 fs-6 text-left">Fall - IT Internship (IT 550)</h5>
          </div>
        </div>
      </div>
      <div class="timeline-2 left-2">
        <div class="card">
        <h1 className='c2_card1 text-center'>2020</h1>
          <div class="card-body p-4 c2_cardcont1">
          <h5 class="fw-bold mb-4 fs-6 text-left">Fall - Modern Database Systems and Applications (IT 502)</h5>
          <h5 class="fw-bold mb-4 fs-6 text-left">Fall - Emerging Information Technologies (IT 572)</h5>
          <h5 class="fw-bold mb-4 fs-6 text-left">Winter - IT Project Management (IT 505)</h5>
          </div>
        </div>
      </div>
      
     
    </div>
  </div>

</section ></Container>
<section className='c2_footor_pg text-center'><div class="c2_footor_pg">
<p class="text-center  copy_para1">Copyright &copy; 2022 </p>

</div></section>










        </>
    );
}




export default PgCourses;