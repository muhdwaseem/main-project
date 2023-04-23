import axios from 'axios'
import { MDBRadio } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function Editclient() {

    const nav= useNavigate();
    const [sucess, setsucess] = useState(false)
    const [input, setinput] = useState()
    const [getclient, setgetclient] = useState([])
    const [edititems, setedititems] = useState({name:getclient.name,username:getclient.username,email:getclient.email,status:getclient.status,role:getclient.role,phonenumber:getclient.phonenumber})
const {id} = useParams();
// console.log(id);
 useEffect(() => {
   axios.get(`http://localhost:7000/getclientid/${id}`).then(res=>setgetclient(res.data))
 }, [])

 const handlechange=(e)=>{
    setedititems({...edititems,[e.target.name]:e.target.value})
 }

const handlesubmit=()=>{
try {
  const responce  = axios.put(`http://localhost:7000/updateclient/${id}`,edititems).then(res=>setedititems(res))
} catch (error) {
  
}
setsucess(true)
}



  return (
    <div>


{
sucess ? (nav('/client')): ( <Form onSubmit={handlesubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name='name' defaultValue={getclient.name} onChange={handlechange}/>
      
    </Form.Group>

    <Form.Group className="mb-3 " controlId="formBasicPassword" >
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" name='username' defaultValue={getclient.username} onChange={handlechange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name='email' defaultValue={getclient.email} onChange={handlechange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Status</Form.Label>
      {/* <Form.Control type="text" name='status' defaultValue={getclient.status} onChange={handlechange}/> */}
        <br />
           <input  type="radio" name="status" id="" defaultChecked={getclient.status}  value='signed in'  onChange={handlechange}  />signed in
           <br />
           <input type="radio" name="status" id="" defaultChecked={getclient.status}  value='signed out' onChange={handlechange}/>signed out
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
   
    <Form.Label>Role</Form.Label>
  
    <select name='role' defaultValue={getclient.role}  onChange={handlechange}>
      <option value="select category">select category</option>
              <option defaultValue='admin' >Admin</option>
              <option defaultValue='superadmin' >super admin</option>
              <option defaultValue='other' >other</option>
            </select>
            
      {/* <Form.Control type="text" name='role' defaultValue={getclient.role} onChange={handlechange}/> */}
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Phonenumber</Form.Label>
      <Form.Control type="text" name='phonenumber' defaultValue={getclient.phonenumber} onChange={handlechange}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      update
    </Button>
  </Form>)
}

      
    </div>
  )
}

export default Editclient

