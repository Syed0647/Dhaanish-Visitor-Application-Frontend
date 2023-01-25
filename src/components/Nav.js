import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Nav.css"

function Nav(props){

    

    return(<div className="top-nav">
    <div className="left-mark"><Link to={props.linkl} ><span style={props.toggleLeft?{color:"transparent"}:{color:"white"}}  class="material-symbols-outlined">arrow_circle_left</span></Link></div>
    <div className="heading">{props.title}</div>
    <div  className="right-mark"><Link to={props.linkr}><span style={props.toggle?{color:"white"}:{color:"transparent"}} class="material-symbols-outlined">arrow_circle_right</span></Link></div>
</div>)
}
export default Nav;