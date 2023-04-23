import axios from 'axios'
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function Editteam() {
  const nav = useNavigate();
    const [getbyidteam, setgetbyidteam] = useState([])
    const [editinputs, seteditinputs] = useState({name:getbyidteam.name,email:getbyidteam.email,dob:getbyidteam.dob,description:getbyidteam.description,role:getbyidteam.role,phonenumber:getbyidteam.phonenumber,image:getbyidteam.image})
const id = useParams().id

useEffect(() => {
 const fetchhamdler=async()=>{
  axios.get(`http://localhost:7000/getteamid/${id}`).then(res=>setgetbyidteam(res.data))
 }
 fetchhamdler();
}, [])

const handlechange=(e)=>{
seteditinputs({...editinputs,[e.target.name]:e.target.value})
}
 const handleupdate=()=>{
      try {
        const responce =  axios.put(`http://localhost:7000/updateteam/${id}`,editinputs).then(res=>seteditinputs(res.data)).then(data=>console.log(data))
        if(editinputs){
          alert('update data')
          nav('/team')
          return ;
         
        }
        
      } catch (error) {
      
      }
     
    
    }
  return (
    <div>
      {getbyidteam&&getbyidteam.map((val)=>{
        return(
          <div  style={{display:'flex',justifyContent:'center',margin:'70px'}}>
          <Card  style={{ width: '25rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body style={{textAlign:'center'}}>
            <Card.Title >Name</Card.Title>
            <MDBInput name='name' defaultValue={val.name}  id='form1' type='text' size='lg' onChange={handlechange}/>
    
            <Card.Title style={{margin:'15px'}}>Email</Card.Title>
            <MDBInput name='email' id='form1' defaultValue={val.email} type='text' size='lg' onChange={handlechange}/>
            <Card.Title style={{margin:'15px'}}>Date of Birth</Card.Title>
            <MDBInput name='dob' defaultChecked={val.dob}  id='form1' defaultValue={val.dob}  type='date' size='lg' onChange={handlechange}/>
            <Card.Title style={{margin:'15px'}}>Gender</Card.Title>
            <Card.Text >
            <input type="radio" name="gender" id="" defaultChecked={val.gender==='male'} defaultValue='male' onChange={handlechange}/> Male
            <br></br>
            <input type="radio" name="gender" id="" defaultChecked={val.gender==='female'} defaultValue='female' onChange={handlechange}/>  Female
            </Card.Text>
            
            <Card.Title style={{margin:'15px'}}>Description</Card.Title>
            <MDBTextArea defaultValue={val.description} name='description' id='textAreaExample' rows={4} onChange={handlechange}/>
            <Card.Title style={{margin:'15px'}}>Role</Card.Title>
            <select defaultValue={val.role} name='role' onChange={handlechange} style={{borderRadius:'15px'}}>
            <option  value="select category">select category</option>
                <option  defaultValue='admin' >Admin</option>
                <option  defaultValue='super admin'>Super admin</option>
                <option  defaultValue='other' >other</option>
            </select>
            <Card.Title style={{margin:'15px'}} >Phone Number</Card.Title>
            <MDBInput name='phonenumber' id='form1' defaultValue={val.phonenumber} type='text' size='lg' onChange={handlechange}/>
            <Card.Title style={{margin:'15px'}}>Upload picture</Card.Title>
            <MDBInput  name='image' id='form1' type='file' size='lg' onChange={handlechange}/>
            <Button onClick={handleupdate}  variant="primary">Update</Button>
          </Card.Body>
        </Card>
        </div>
        )
      })}
      
    </div>
  )
}

export default Editteam
