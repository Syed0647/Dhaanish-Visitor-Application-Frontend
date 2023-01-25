import { useState } from "react";
import "../components/Information.css"
import Nav from "./Nav";


function Information(props){


  
  

  
  const handleChange = (e)=>{
    const value = e.target.value;
    props.setData({...props.data,[e.target.name]:value});
   
  }


    return(<>
        <Nav toggle={props.toggle} saveDate={props.saveDate} linkl="/tell" linkr="/thanks" title="Tell us about yourself"></Nav>
        <div  className="form-data ">
        <form className="row g-3 needs-validation  input-form" noValidate>
  <div className="col-md-6 ">
    <label htmlFor="validationCustom01" className="form-label">Name</label>
    <input required onChange={(e)=> handleChange(e)} name="visitorName" value={props.data.visitorName}  type="text" placeholder="Enter your name" className="form-control" id="validationCustom01"/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom02" className="form-label">Phone</label>
    <input  onChange={(e)=> handleChange(e)} name="phoneNumber" value={props.data.phoneNumber} type="number" placeholder="Enter Mobile Number" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
    
  </div>
  <div className="col-md-6">
  <label htmlFor="validationCustom03" className="form-label">Date</label>
  <input required value={new Date()}  className="form-control" id="inputEmail4"/>
  <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
  <label htmlFor="validationCustom04" className="form-label">To-Visit</label>
  <select  onChange={(e)=> handleChange(e)} value={props.data.getToVisitor} name="getToVisitor"  className="form-select " aria-label="Default select example" required>
  <option selected disabled>Open this select menu</option>
  <option></option>
  <option>Facility</option>
  <option>Principle</option>
  <option>Director</option>
  <option>Secrectary</option>
  <option>Chairman</option>
</select>
<div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Purpose</label>
    <input required onChange={(e)=> handleChange(e)} name="purpose" value={props.data.purpose} type="text" className="form-control" id="inputAddress2" placeholder="What is the purpose to meet?"/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>

  <div className="col-12 d-flex justify-content-center">
    <button type="submit" onClick={props.saveData} className="btn btn-outline-success btn-lg btn-block">Click here to submit</button>
  </div>
 
</form>

        </div>
    </>)
}

export default Information;