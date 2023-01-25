import Nav from "./Nav";
import "../components/User.css"
import { useState } from "react";

function User(props){

  const [toggle,setToggle]=useState(false);

    const handleChange = (e)=>{
        const value = e.target.value;
        props.setData({...props.data,[e.target.name]:value});
        setToggle(true)
        // console.log(value);
      }

    return(<>
        <Nav toggle={toggle} title="How may I help you" linkr="/info" linkl="/option"></Nav>
    <div className="user-main">
      <div className="user-container">

        <div className="info-box">
            <div className="box-align">
            <span className="info-t">I am</span>
            <select onChange={(e)=>handleChange(e)} value={props.data.getVisitorType} name="getVisitorType" className="info-s">
                <option className="s-data"></option>
                <option className="s-data">Student</option>
                <option className="s-data">Facility</option>
                <option className="s-data">Parent</option>
                <option className="s-data">Candidate</option>
                <option className="s-data">Others</option>
            </select>
            </div>
        </div>

         <div className="terms-condition">
        <h3>Terms & Condition</h3>
        


        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Outside Visitor want to take visiting pass?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Dhaanish College Students want to take pass?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Parents want to take visiting pass?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
                </div>
         </div>

      </div>
    </div>  
      
        </>
    )
}
export default User;