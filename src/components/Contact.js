import React from "react";
import Card from 'react-bootstrap/Card';
import WhiteNavBar from "./WhiteNavBar";

function Contact(){
  

    return (<>
      <WhiteNavBar/>


{/*----------------------------------------Contact Header ends--------------------------------------------*/}    

<div class="contact_bg container-fluid ">
<div class="login-box container-sm  mx-auto">
        <h2>Contact Us</h2>
        <form className="container-sm" action="mailto:ssengole@student.concordia.ab.ca" method="post" enctype="text/plain">
          <div class="user-box">
            <input type="text" name="name" required="" />
            <label>Full Name</label>
          </div>
          <div class="user-box">
            <input type="email" name="mail" required="" />
            <label>Email id</label>
          </div>
          <div class="user-box">
            <input type="textbox" name="comment" required="" size="250"/>
            <label>Message</label>
          </div>
          <a href = "mailto: ssengole@student.concordia.ab.ca">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
            
</div>
</div>
<Card.Footer className="text-center bg-white rounded-0 border-top pt-3 pb-2 fs-5 text-secondary fw-normal others_card">Copyright &copy; 2022</Card.Footer> 

      </>);
}

export default Contact;