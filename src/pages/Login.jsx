import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './login.scss'
// import './login.css'
function Login() {
  const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [sucess, setsucess] = useState(false)
const url = 'http://localhost:7000/jwtverify'

const handlesubmit=async()=>{
if(!email||!password){
  alert('enter the detaills')
  return ""
}
try {
  const userdetails  ={email,password}
  const login =await axios.get(url,userdetails).then(res=>res.data).then(data=>console.log(data))

} catch (error) {
  
}
}


  return (

   <div className='flex'>
    
      <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"   placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </div>
       
//  <div className='login'>
//   <div className="card">
//     <div className="left">
//         <h1>Book Management</h1>

//          <span>Do you want to sign in?</span>
//            <Link to='/signin'>
//       <button>Signin</button>
//            </Link>
//       </div>
//     <div className="right">
//       <h1>Login</h1>
//       <form action="">
//       <input type="email" name="" id="" placeholder='email'/>
//       <input type="password" name="" id="" placeholder='password'/>
//       <button >Login</button>
//       </form>
     
//     </div>
   
//   </div>
//  </div>
    
   
  )
}

export default Login
