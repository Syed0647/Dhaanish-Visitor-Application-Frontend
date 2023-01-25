import '../components/Landing.css'
import AutoTyping , {BlinkCursor} from "react-auto-typing";
import { Link } from 'react-router-dom';

function Landing(){
    return(<div className="landing">
        <div className='title-img' >
        <img  src='https://dhaanish.in/wp-content/uploads/2022/11/dace-logo.png'/>
        </div>
        <Link className='link' to="/option">
        <div className='welcome'  >
            
            
        <span>{" "}
        <AutoTyping
          active // <boolean>
          textRef="Welcome to Dhaanish Ahmed"
          i="true" // <string>
          writespeed={100} // <number>
          deletespeed={100} // <number>
          delayToWrite={1000} // <number>
          delayToDelete={900} // <number>
        />
        <BlinkCursor
          active // <boolean>
          blinkSpeed={10000} // <number>
        />
        </span>
            <div className='click-here'><span className="material-symbols-outlined touch">touch_app</span> Click here To continue</div>
           
        </div>
        </Link>
    </div>);
}

export default Landing;