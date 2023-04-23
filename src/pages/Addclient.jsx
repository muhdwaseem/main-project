import axios from 'axios';
import { MDBBtn, MDBCheckbox, MDBCol, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBInput, MDBRadio, MDBRow } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Addclient() {
    const addclienturl = 'http://localhost:7000/addclient'  
const [name, setname] = useState()
const [username, setusername] = useState()
const [email, setemail] = useState()
const [status, setstatus] = useState()
const [role, setrole] = useState()
const [phonenumber, setphonenumber] = useState()
const [sucess, setsucess] = useState(false)
const [dropdown, setdropdown] = useState()
const nav = useNavigate();
const handlesubmit=(e)=>{
e.preventDefault();
try {
    const clientdata = {name,username,email,status,role,phonenumber}
    const addclient = axios.post(addclienturl,clientdata).then(res=>res.data).then(data=>console.log(data))

} catch (error) {
    
}

setsucess(true)
}

  return (
    <div style={{border:'1px solid black',}}>
  {
    sucess ? (nav('/client')) : (
        <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="enter name" onChange={(e)=>setname(e.target.value)}/>
          
        </Form.Group>
  
        <Form.Group className="mb-3 " controlId="formBasicPassword" >
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="username" onChange={(e)=>setusername(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Status</Form.Label>
          {/* <Form.Control type="text" placeholder="status" onChange={(e)=>setstatus(e.target.value)}/>
           */}
           <br />
           <input  type="radio" name="status" id=""  value='signed in' onChange={(e)=>setstatus(e.target.value)}  />signed in
           <br />
           <input type="radio" name="status" id="" value='signed out' onChange={(e)=>setstatus(e.target.value)}/>signed out
                  </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          Role
            <select onChange={(e)=>setrole(e.target.value)}>
              <option value='admin' >Admin</option>
              <option value='superadmin' >super admin</option>
              <option value='other' >other</option>
            </select>
            

          
         
         
          {/* <Form.Control type="text" placeholder="role" /> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phonenumber</Form.Label>
          <Form.Control type="text" placeholder="phonenumber" onChange={(e)=>setphonenumber(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    )
  }
 
    </div>
  )
}

export default Addclient
