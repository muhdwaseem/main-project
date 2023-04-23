import axios from 'axios'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBInput } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

function Createorder() {
const [firstname, setfirstname] = useState()
const [lastname, setlastname] = useState()
const [orderid, setorderid] = useState()
const [product, setproduct] = useState()
const [noofproduct, setnoofproduct] = useState(1)
const [dob, setdob] = useState()
const [street, setstreet] = useState()
const [additionalinfo, setadditionalinfo] = useState()
const [zipcode, setzipcode] = useState()
const [place, setplace] = useState()
const [country, setcountry] = useState()
const [phonenumber, setphonenumber] = useState()
const [email, setemail] = useState()


const handlesubmit=()=>{
    try {
        const userdetails = {firstname,lastname,orderid,product,noofproduct,dob,street,additionalinfo,zipcode,place,country,phonenumber,email}
        const respoce   =axios.post('http://localhost:7000/addorders',userdetails).then(res=>res.data).then(data=>console.log(data))

    } catch (error) {
        
    }
}


  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}> 
        <MDBCard style={{width:'35%',textAlign:'center'}}>
        <MDBCardTitle style={{fontSize:'40px'}}>Order details </MDBCardTitle>
    <MDBCardBody >
      


      <MDBCardTitle style={{margin:'10px'}}>First Name</MDBCardTitle>
      <MDBInput style={{margin:'20px',width:'35%'}} name='firstname'  id='form1' type='text'  onChange={(e)=>setfirstname(e.target.value)}/>
     
       <MDBCardTitle style={{margin:'10px'}}>Last Name</MDBCardTitle>
      <MDBInput   id='form1' type='text' name='lastname' onChange={(e)=>setlastname(e.target.value)}/>
      
      <MDBCardTitle style={{margin:'10px'}}>Order Id</MDBCardTitle>
      <MDBInput   id='form1' type='text'name='orderid' onChange={(e)=>setorderid(e.target.value)}/>

      <MDBCardTitle style={{margin:'10px'}}>Product</MDBCardTitle>
      <MDBInput   id='form1' type='text'name='product' onChange={(e)=>setproduct(e.target.value)}/>

      <MDBCardTitle style={{margin:'10px'}}>No of products

        </MDBCardTitle> 
       <div >
       <button  style={{borderRadius:'10px',padding:'10px',width:'50px',margin:'10px'}} onClick={()=>setnoofproduct(noofproduct+1)} onChange={(e)=>setproduct(e.target.value)}>+</button>
      <button style={{borderRadius:'10px',padding:'10px',width:'50px'}} onClick={()=>setnoofproduct(noofproduct-1)} onChange={(e)=>setproduct(e.target.value)}>-</button>
      <p>{noofproduct}</p>
       </div>
      <div style={{margin:'10px'}}>
        
      <MDBCardTitle style={{margin:'10px'}}>Date of Birth

</MDBCardTitle> 
      <MDBInput  name='dob'  type='date'  id='form1' onChange={(e)=>setdob(e.target.value)} />
      </div>
      
      
    </MDBCardBody>
    
  </MDBCard >


  <MDBCard  style={{width:'35%',textAlign:'center',backgroundColor:'darkblue',color:'white'}}>
    <MDBCardBody >
      <MDBCardTitle style={{fontSize:'40px',margin:'20px'}}>Contact Details</MDBCardTitle>
      
      <MDBCardTitle style={{margin:'10px'}}>Street +Ntr</MDBCardTitle>
      <MDBInput style={{margin:'10px',width:'35%'}} name='street' id='form1' type='text' onChange={(e)=>setstreet(e.target.value)} />

  <MDBCardTitle style={{margin:'10px'}}>Additional Information</MDBCardTitle>
      <MDBInput style={{margin:'10px',width:'35%'}} name='additionalinfo' id='form1' type='text' onChange={(e)=>setadditionalinfo(e.target.value)} />

      <MDBCardTitle style={{margin:'10px'}}>Zip code</MDBCardTitle>
      <MDBInput style={{margin:'10px',width:'35%'}} name='zipcode' size='sm' id='form1' type='text' onChange={(e)=>setzipcode(e.target.value)}/>
      <MDBCardTitle style={{margin:'10px'}}>Place</MDBCardTitle>
      <MDBInput style={{margin:'10px',width:'35%'}} size='sm' name='place' id='form1' type='text' onChange={(e)=>setplace(e.target.value)}/>
      <MDBCardTitle style={{margin:'10px'}}>Country</MDBCardTitle>
      <MDBInput style={{margin:'10px',width:'35%'}} size='lg' name='country' id='form1' type='text' onChange={(e)=>setcountry(e.target.value)}/>
      <MDBCardTitle style={{margin:'10px'}}>Phone Number</MDBCardTitle>
      <MDBInput style={{margin:'10px',width:'25%'}} size='lg' name='phonenumber' id='form1' type='text' onChange={(e)=>setphonenumber(e.target.value)}/>
      <MDBCardTitle style={{margin:'10px'}}>Email</MDBCardTitle>
      <MDBInput style={{margin:'10px'}} size='lg' name='email' id='form1' type='email' onChange={(e)=>setemail(e.target.value)} />
      <MDBCardTitle style={{margin:'30px'}}>I do accept the terms and conditions of your site</MDBCardTitle>
     <input type='checkbox' style={{width:'60%',height:'3%'}}></input>
       
    </MDBCardBody>
    <MDBBtn onClick={handlesubmit} style={{margin:'40px',fontWeight:'bold',fontSize:'15px'}}>Submit</MDBBtn>  
    
  </MDBCard>
  </div>
  )
}

export default Createorder