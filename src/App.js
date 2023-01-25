
import { useState } from 'react';
import './App.css';
import Information from './components/Information';
import Landing from './components/Landing';
import User from './components/User';
import {Link, Route,Routes} from "react-router-dom";
import VisitorsService from './service/VisitorsService';
import Thanks from './components/Thanks';
import Option from './components/Option';
import VisitorOut from './components/VisitorOut';
import Admin from './components/Admin';

function App() {
  
  const [toggle,setToggle]=useState(false);

  const [userInfo,setUserInfo]=useState({
    show:false,
    display:"",
    message:""
  })

  const [visitor,setVisitor] = useState({
    visitorId: 0,
    getVisitorType:"",
    visitorName:"",
    phoneNumber:"",
    purpose:"",
    getToVisitor:""
});

  const saveVisitors = (e)=>{
    e.preventDefault();
    VisitorsService.saveVisitors(visitor).then((value)=>{

      setVisitor({visitorId: value.data.visitorId,
        getVisitorType: value.data.getVisitorType,
        visitorName: value.data.visitorName,
        phoneNumber: value.data.phoneNumber,
        purpose: value.data.purpose,
        getToVisitor: value.data.getToVisitor});
        
        
    });
    setToggle(true);
    // console.log(...visitor+"data saved...............");
  }

  

  return (<Routes>
    <Route path='/' element={<Landing   data={visitor}/>}></Route>
    <Route path='/option' element={<Option></Option>}></Route>
    <Route path='/tell' element={<User setData={setVisitor}  data={visitor}/>}></Route>
    <Route path='/info' element={<Information toggle={toggle} saveData={saveVisitors} setData={setVisitor} data={visitor}/>}></Route>
    <Route path='/thanks' element={<Thanks data={visitor}></Thanks>}></Route>
    <Route path='/check-out' element={<VisitorOut></VisitorOut>}></Route>
    <Route path='/admin' element={<Admin></Admin>}></Route>
  </Routes>
   
  );
}

export default App;
