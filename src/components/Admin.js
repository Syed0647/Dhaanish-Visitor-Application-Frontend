import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { useEffect, useState } from 'react';
import VisitorsService from '../service/VisitorsService';
import Nav from './Nav';
function Admin(){

    const [allVisitors,setAllVisitors]=useState([]);

    useEffect(()=>{

        VisitorsService.getAllVisitors().then((result)=>{
            setAllVisitors(result.data);
        })

    },[])
    

  const data = () => {

    

    return {
      columns: [
        {
          label: 'Visitor ID',
          field: 'visitorId',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'visitorId',
          },
        },
        {
          label: 'Visitor Name',
          field: 'visitorName',
          width: 270,
        },
        {
          label: 'Phone',
          field: 'phoneNumber',
          width: 200,
        },
        {
          label: 'Purpose',
          field: 'purpose',
          width: 300,
        },
        
        {
            label: 'Check-In',
            field: 'localDateTime',
            width: 150,
        },
        {
            label: 'Check-Out',
            field: 'checkOut',
            width: 150,
          },
        {
          label: 'To Visit',
          field: 'getToVisitor',
          width: 100,
        },
      ],
      rows: allVisitors
    };
  };

    return(<>
<Nav  linkl="/option"  title="VISITOR DATABASE"></Nav>

<CDBContainer>
      <CDBCard>
        <CDBCardBody>
          <CDBDataTable
            striped
            bordered
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={data()}
            materialSearch={true}
          />
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>

    
    
    </>)
}

export default Admin;