import Nav from "./Nav"
import "../components/VisitorOut.css"
import { useState } from "react"
import VisitorsService from "../service/VisitorsService";

const VisitorOut = ()=>{



    const [checkOut , setCheckOut] = useState({
        visitorId : 0
    });
    const [hide,setHide]=useState({
        show:true,
        display:"",
        msg:""
    })

    const  checkOutTime= ()=>{
        VisitorsService.updateCheckOutTime(checkOut).then((result)=>{

            
            
            if(result.data==="Error"){
               console.log("checnschlswhlcsallhsl"+result.data);
               setHide({
                show:false,
                display:"danger",
                msg:"Incorrect visitor id, please check your Visitor ID"
            })
            }
            else{
                setHide({
                    show:false,
                    display:"success",
                    msg: result.data
                })
            }

            

            console.log(hide.show+"  "+hide.display+" "+hide.msg);
        });

        
    }

    const handleChange = (e)=>{
        const value = e.target.value;
        setCheckOut({[e.target.name]:value});
        console.log(value);
      }

    return(
    <>
    <Nav linkl="/option" linkr="/" toggle={true} title="Thank You For Visiting"></Nav>
    
    <div className="visitor-out-container">
        
        <div className="visitor-out-box" >
            
            <form className="v-o-form">
            <label  className="form-label">Enter Your Visiting Pass ID</label>
            

            <div class="row g-3 align-items-center v-o-input">
              <div class="col-auto">
              <label for="inputPassword6" class="id-title">DACE-</label>
              </div>
              <div class="col-auto">
              <input required name="visitorId" onChange={(e)=>handleChange(e)} type="number" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
              </div>
              <div class="col-auto">
              <span id="passwordHelpInline" class="form-text">
              Please enter only numeric ID.
              </span>
              </div>
            </div>

            <button onClick={checkOutTime} type="button" class="btn btn-outline-success">Submit</button>

            </form>
            
        </div>
        <div hidden={hide.show} class={`alert alert-${hide.display}`} role="alert">{hide.msg}</div>

    </div>

    

    </>
    )
    
}

export default VisitorOut;