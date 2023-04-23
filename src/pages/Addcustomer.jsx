import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form, useNavigate } from 'react-router-dom'
import countryList from 'react-select-country-list'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardLink,
  MDBTextArea
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useMemo } from 'react';
function Addcustomer() {

const options = useMemo(()=>countryList().getData(),[])


const [name, setname] = useState()
const [email, setemail] = useState()
const [addres1, setaddres1] = useState()
const [address2, setaddress2] = useState()
const [city, setcity] = useState()
const [state, setstate] = useState()
const [pincode, setpincode] = useState()
const [country, setcountry] = useState()
const [sucess, setsucess] = useState(false)
const [selectedcountry, setselectedcountry] = useState()

const nav = useNavigate()

// console.log(inputchange);
useEffect(() => {
axios.get('https://testapi.devtoolsdaily.com/countries').then(res=>setcountry(res.data))
}, [country])
// console.log(country);


useEffect(() => {
 axios.get('').then(res=>console.log(res.data))
}, [])
const handlesubmit=()=>{
  try {
    const userdetails = {name,email,addres1,address2,city,state,pincode,country}
      axios.post('http://localhost:7000/addcustomer',userdetails).then(res=>res.data).then(data=>console.log(data))
  } catch (error) {
    
  }
  setsucess(true)
}



  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        

        {
            sucess ? (nav('/customer')) : (
              <MDBCard style={{margin:'60px',width:'30%',}}>
              <MDBCardImage height='15%' position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
              <MDBCardBody>
              <MDBCardText style={{textAlign:'center',fontWeight:'bold'}}>
                  Name
                </MDBCardText>
                <MDBCardTitle>
                <MDBInput style={{marginBottom:'20px'}}  value={name} id='form1' type='text' size='lg' onChange={(e)=>setname(e.target.value)}  />
                </MDBCardTitle>
                
                <MDBCardText style={{textAlign:'center',fontWeight:'bold'}}>
                  Email
                </MDBCardText>
                
                <MDBCardTitle>
                <MDBInput style={{marginBottom:'20px'}} value={email} id='form1' type='email' size='lg' onChange={(e)=>setemail(e.target.value)}/>
                </MDBCardTitle>       
        
                <MDBCardText style={{textAlign:'center',fontWeight:'bold'}}>
                Address1
                </MDBCardText>
                
                <MDBCardTitle>
                {/* <MDBInput style={{marginBottom:'20px'}} id='form1' type='text' size='lg' />
                 */}
               
                  <MDBTextArea value={addres1} id='textAreaExample' rows={4} onChange={(e)=>setaddres1(e.target.value)}/>
                </MDBCardTitle> 
        
        
                <MDBCardText style={{textAlign:'center',fontWeight:'bold'}}>
                  Address 2
                </MDBCardText>
                
                <MDBCardTitle>
                {/* <MDBInput style={{marginBottom:'20px'}} id='form1' type='text' size='lg' /> */}
                <MDBTextArea value={address2}  id='textAreaExample' rows={4} onChange={(e)=>setaddress2(e.target.value)}/>
                </MDBCardTitle> 
        
                <MDBCardText style={{textAlign:'center',fontWeight:'bold'}}>
                  City
                </MDBCardText>
                
                <MDBCardTitle>
                <MDBInput style={{marginBottom:'20px'}} value={city} id='form1' type='text' size='lg' onChange={(e)=>setcity(e.target.value)}/>
                


                </MDBCardTitle> 
        
        
                <MDBCardText style={{textAlign:'center',fontWeight:'bold'}}>
                  State
                </MDBCardText>
                
                <MDBCardTitle>
                <MDBInput style={{marginBottom:'20px'}} value={state}  id='form1' type='text' size='lg' onChange={(e)=>setstate(e.target.value)}/>
                </MDBCardTitle> 
        
        
                <MDBCardText style={{textAlign:'center',fontWeight:'bold'}}>
                  Pincode
                </MDBCardText>
                
                <MDBCardTitle>
                <MDBInput style={{marginBottom:'20px'}} value={pincode}  id='form1' type='text' size='lg' onChange={(e)=>setpincode(e.target.value)}/>
                </MDBCardTitle> 
        
        
                <MDBCardText style={{textAlign:'center',fontWeight:'bold'}}>
                  Country
                </MDBCardText>
                
                <MDBCardTitle style={{textAlign:'center'}}>
                <select style={{width:'200px'}} name="" id="" value={selectedcountry} onChange={(e)=>setselectedcountry(e.target.value)}>
                  <option value="select country"> select countries</option>
                {
                  country&&country.map((val)=>{
                    return(
                      <option  value={val.name}>{val.name}</option>
                    )
                  })
                }
                  

                </select>
               

                  
               
                {/* <MDBInput style={{marginBottom:'20px'}} id='form1 ' value={country} type='text' size='lg' onChange={(e)=>setcountry(e.target.value)}/> */}
                </MDBCardTitle> 
                  <MDBCardText style={{textAlign:'center'}}>
                  <MDBBtn onClick={handlesubmit}>Add</MDBBtn>
                  </MDBCardText>
              
        
              </MDBCardBody>
              
             
               
              
              
            </MDBCard>
            )
        }
       
    </div>
  )
}

export default Addcustomer
