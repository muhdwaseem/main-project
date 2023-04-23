import axios from 'axios'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBInput } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function Editorder() {
const [users, setusers] = useState([])
const [editdata, seteditdata] = useState({name:users.name,age:users.age,address:users.address,tags:users.tags,action:users.action})
   const nav = useNavigate();
const id = useParams().id;

useEffect(() => {
 axios.get(`http://localhost:7000/getorderbyid/${id}`).then(res=>setusers(res.data))
}, [])
// console.log(users.name);


const handlechange=(e)=>{
seteditdata({...editdata,[e.target.name]:e.target.value})
}
const handleupdate=()=>{
  try {
    axios.put(`http://localhost:7000/updateorder/${id}`,editdata).then(res=>seteditdata(res.data))
    if(editdata){
      alert('update data')
      nav('/order')
      return;
    }
  } catch (error) {
    
  }
}


  return (

    
    <div style={{display:"flex",justifyContent:'center'}}>
      <Card style={{ width: '18rem',marginTop:'70px',textAlign:'center' }}>
     
      <Card.Body>
                        <Card.Title>
            Name
            </Card.Title> 
            <input type="text" name='name' style={{width:'100%',borderRadius:'10px'}} defaultValue={users.name} onChange={handlechange}/>
            <Card.Title style={{margin:'10px'}}>
            Age
            </Card.Title> 
           <input type="text" name='age' style={{width:'100%',borderRadius:'10px'}} defaultValue={users.age} onChange={handlechange}/>
            <Card.Title style={{margin:'10px'}}>
            Address
            </Card.Title> 
           <input type="text" name='address' style={{width:'100%',borderRadius:'10px'}} defaultValue={users.address} onChange={handlechange}/>
            <Card.Title style={{margin:'10px'}}>
            Tags
            </Card.Title> 
           <input type="text" name='tags' style={{width:'100%',borderRadius:'10px'}} defaultValue={users.tags} onChange={handlechange}/>
            
            <Card.Title style={{margin:'10px'}}>
            Action
            </Card.Title> 
           <input type="text" name='action' style={{width:'100%',borderRadius:'10px'}} defaultValue={users.action} onChange={handlechange}/>
            
            <Button onClick={handleupdate} variant="primary">edit</Button>
         
             </Card.Body>
    </Card>


    </div>
  )
}

export default Editorder