import React, { useEffect, useState } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Book from './Book';
function Team() {
const [team, setteam] = useState()

const id = useParams()
 useEffect(() => {
  
axios.get('http://localhost:7000/getallteam').then(res=>setteam(res.data))
}, [])


const handledelte = (id)=>{

 setteam(team.filter(val=>val._id!==id))
 
const responce = axios.delete(`http://localhost:7000/delteam/${id}`).then(res=>res.data).then(data=>console.log(data))
if(team){
  alert('delete data ')
  return;
 }
}
  return (
    <div>
       <div  style={{ backgroundColor: '#9de2ff' }}>

      <MDBContainer >
      {team && team.map((val)=>{
                     const{_id,name,email,dob,gender,description,role,phonenumber,image} = val
                    return(
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>

              <MDBCardBody className="p-4">
               
                        <div className="d-flex text-black">
                        <div className="flex-shrink-0">
                          <MDBCardImage
                            style={{ width: '180px', borderRadius: '10px' }}
                            src={image}
                            alt='Generic placeholder image'
                            fluid />
                          <MDBCardTitle style={{margin:'10px'}}>{name}</MDBCardTitle>
                             
                             <MDBCardText style={{margin:'10px'}}>{role}</MDBCardText>
                             <MDBCardTitle  style={{margin:'10px'}}>{dob}</MDBCardTitle>
                          <MDBCardText  style={{margin:'10px'}}>{gender}</MDBCardText>
                             {/* <MDBCardTitle >email</MDBCardTitle> */}
                        </div>
                        
                        <div className="flex-grow-1 ms-3">
                       
                          
      
                          <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                            style={{ backgroundColor: '#efefef' }}>
                            <div>
                              <p className="small text-muted mb-1">Description</p>
                              <p className="mb-0">{description}</p>
                            </div>
                            
                          </div>
                         
                          
                          
                          <MDBCardTitle>{email}</MDBCardTitle>
                          <MDBCardText>{phonenumber}</MDBCardText>
                          <div className="d-flex pt-1">
                            <Link to={`/teamedit/${_id}`}>
                            <MDBBtn outline className="me-1 flex-grow-2">Edit</MDBBtn>
                            </Link>
                            
                            <MDBBtn className="flex-grow-1" onClick={()=>handledelte(_id)}>Delete</MDBBtn>
                          </div>
                        </div>
                      </div>
                
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
            )
        })}
      </MDBContainer>
      <div style={{textAlign:'center',}}>
      <Link to='/addteam' style={{color:'black'}}>< MDBIcon style={{fontSize:'40px',margin:'10px'}} fas icon="plus-square" /></Link>
      </div>
    </div>
    
    </div>
  )
}

export default Team;
