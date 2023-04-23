import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBInput,
    MDBTextArea
  } from 'mdb-react-ui-kit';
import axios from 'axios';
import {  useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, Card ,Form} from 'react-bootstrap';

function Customeredit() {
  const nav = useNavigate();
 const url ='http://localhost:7000/getcustmerid/'
const [getelementbyid, setgetelementbyid] = useState([])
const [editdata, seteditdata] = useState({name:getelementbyid.name,email:getelementbyid.email,address1:getelementbyid.address1,address2:getelementbyid.address2,city:getelementbyid.city,state:getelementbyid.state,pincode:getelementbyid.pincode,country:getelementbyid.country})
 const id =  useParams().id
useEffect(() => {
axios.get(`http://localhost:7000/getcustmerid/${id}`).then(res=>setgetelementbyid(res.data))
},[])

const handlechange=(e)=>{
seteditdata({...editdata,[e.target.name]:e.target.value})
}


const handleupdate=()=>{
  try {
    axios.put(`http://localhost:7000/updcust/${id}`,editdata).then(res=>seteditdata(res.data)).then(data=>console.log(data))
    if(editdata){
      alert('update data')
      nav('/customer')
      return;
    }
    
  } catch (error) {
    
  }
}



  return (
    <div style={{display:"flex",justifyContent:'center'}}>
       {
          getelementbyid&&getelementbyid.map((val)=>{
            return(
              <MDBCard style={{width:'30%',marginTop:'90px'}}>
              <MDBCardImage  src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
              <MDBCardBody style={{textAlign:'center'}}>
               
                  
              <MDBCardText >
                 Name
                 </MDBCardText>
              <MDBInput  id='form1' type='text' name='name' defaultValue={val.name} onChange={handlechange} />
              <MDBCardText style={{margin:'10px'}}>
                 Email
                 </MDBCardText>
              <MDBInput  id='form1' type='text' name='email' defaultValue={val.email} onChange={handlechange}/>
              <MDBCardText style={{margin:'10px'}}>
                 Address 1
                 </MDBCardText>
                 <MDBTextArea  id='textAreaExample' name='address1' rows={4} defaultValue={val.address1} onChange={handlechange}/>      
                 <MDBCardText style={{margin:'10px'}}>
                 Address 2
                 </MDBCardText>
                 <MDBTextArea  id='textAreaExample' name='address2' rows={4} defaultValue={val.address2} onChange={handlechange}/>  
                 <MDBCardText >
                 City
                 </MDBCardText>
              <MDBInput  id='form1' type='text' name='city' defaultValue={val.city} onChange={handlechange}/>
              <MDBCardText >
                 State
                 </MDBCardText>
              <MDBInput  id='form1' type='text' name='state' defaultValue={val.state}  onChange={handlechange}/>
              <MDBCardText >
                 Pincode
                 </MDBCardText>
              <MDBInput  id='form1' type='text' name='pincode' defaultValue={val.pincode} onChange={handlechange}/>     
              <MDBCardText >
                 Country
                 </MDBCardText>
              <MDBInput  id='form1' type='text'  name='country' defaultValue={val.country} onChange={handlechange}/>     
              </MDBCardBody>
              
              <MDBBtn href='#' onClick={handleupdate}>Update</MDBBtn>
            </MDBCard>
            
              )
            })
          }
   
       
    </div>
  )
}

export default Customeredit





       
       