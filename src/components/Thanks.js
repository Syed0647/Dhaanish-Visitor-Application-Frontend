import Nav from "./Nav";
import "../components/Thanks.css"
import logo from"../images/dace-logo.png"

function Thanks(props){

    // console.log(props.data)

    const print = ()=>{
        
        let printContent = document.getElementById('receipt-dace').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML=originalContents;
        window.location.reload(true);
    }

return(
 <>  
    <Nav toggle={true} linkl="/info" linkr="/" title="Thanks for visiting"></Nav>
    <div  className="receipt">
     <div id="receipt-dace" >
        <section  class="sheet">

<div class="logo"><img src="https://dhaanish.in/wp-content/uploads/2022/11/dace-logo.png" alt="" /></div>
<div class="visitor_id">
    <div class="title">VISITOR PASS</div>
    <div class="v-id">DACE-{props.data.visitorId}</div>
    <div class="d-title">Pass Details</div>
</div>
<div class="pass-details">
    
    <div class="info">
        <div class="data">Date  : {new Date().toLocaleString()}</div>
        <div class="data">Name  : {props.data.visitorName}</div>
        <div class="data">Visitor : {props.data.getVisitorType}</div>
        <div class="data">Phone : {props.data.phoneNumber}</div>
        <div class="data">To visit : {props.data.getToVisitor}</div>
        <div class="data">Purpose : {props.data.purpose}</div>
    </div>
</div>

        </section>
      </div>
      
        <div onClick={print} className="button">
          <div  className="btn btn-outline-primary btn-lg">Print Your Receipt</div>
        </div>
     
   </div>

</>);
}

export default Thanks;