import axios from 'axios'
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function Addteam() {
const [name, setname] = useState()
const [email, setemail] = useState()
const [dob, setdob] = useState()
const [gender, setgender] = useState()
const [description, setdescription] = useState()
const [role, setrole] = useState()
const [phonenumber, setphonenumber] = useState()
const [image, setimage] = useState()

const handlesubmit=()=>{
  try {
    if(!name||!email||!dob||!gender||!description||!role||!phonenumber||!image){
      alert('details required')
      return;
    }

    const userdetails = {name,email,dob,gender,description,role,phonenumber,image}
    axios.post('http://localhost:7000/addteam',userdetails).then(res=>res.data).then(data=>console.log(data))
  } catch (error) {
    
  }
}

  return (
    <div  style={{display:'flex',justifyContent:'center',margin:'70px'}}>
      <Card style={{ width: '25rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body style={{textAlign:'center'}}>
        <Card.Title >Name</Card.Title>
        <MDBInput   id='form1' type='text' size='lg' onChange={(e)=>setname(e.target.value)}/>

        <Card.Title style={{margin:'15px'}}>Email</Card.Title>
        <MDBInput  id='form1' type='text' size='lg' onChange={(e)=>setemail(e.target.value)}/>
        <Card.Title style={{margin:'15px'}}>Date of Birth</Card.Title>
        <MDBInput  id='form1' type='date' size='lg' onChange={(e)=>setdob(e.target.value)}/>
        <Card.Title style={{margin:'15px'}}>Gender</Card.Title>
        <Card.Text >
        <input type="radio" name="" id="" value='male' onChange={(e)=>setgender(e.target.value)}/> Male
        <br></br>
        <input type="radio" name="" id=""  value='female' onChange={(e)=>setgender(e.target.value)}/>  Female
        </Card.Text>
        
        <Card.Title style={{margin:'15px'}}>Description</Card.Title>
        <MDBTextArea  id='textAreaExample' rows={4} onChange={(e)=>setdescription(e.target.value)}/>
        <Card.Title style={{margin:'15px'}}>Role</Card.Title>
        <select onChange={(e)=>setrole(e.target.value)} style={{borderRadius:'15px'}}>
            <option value='Admin'>Admin</option>
            <option value='Super admin'>Super admin</option>
            <option value='other'>other</option>
            </select>
        <Card.Title style={{margin:'15px'}} >Phone Number</Card.Title>
        <MDBInput  id='form1' type='text' size='lg' onChange={(e)=>setphonenumber(e.target.value)}/>
        <Card.Title style={{margin:'15px'}}>Upload picture</Card.Title>
        <MDBInput  id='form1' type='file'  size='lg' onChange={(e)=>setimage(e.target.value)}/>
        <Button onClick={handlesubmit} variant="primary">Add</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Addteam
