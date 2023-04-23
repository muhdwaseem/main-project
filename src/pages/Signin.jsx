import React, { useEffect, useState } from 'react'
import './signin.css'
import axios, {} from 'axios'
import { useNavigate, useNavigation } from 'react-router-dom'
function Signin() {

  const getlocaaldata=()=>{
    const data = localStorage.getItem('signdata')
    if(data){
      return JSON.parse(data)
    }
    else{
      return[]
    }
  }
const [input, setinput] = useState()
const [firstname, setfirstname] = useState('')
const [lastname, setlastname] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [error, seterror] = useState()
const [sucess, setsucess] = useState(false)
const [userloggeed, setuserloggeed] = useState(getlocaaldata());
const nav = useNavigate();
const url = 'http://localhost:7000/signin'
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const handlesubmit=async(e)=>{


e.preventDefault()

const v1 = firstname
const v2 = lastname
const v3 = email
const v4 =(password)


if(!v1||!v2||!v3||!v4){
  alert('enter the details')
  return;
}

try {
  const config ={
    headers:{
      "Content-type":"application/json"
    },
  } 
const signindata = {firstname,lastname,email,password}
const response =await axios.post(url,signindata,config).then(res=>res.data).then(data=>console.log(data))
localStorage.setItem('signdata',JSON.stringify(signindata))
 



} catch (error) {
  seterror('failed to sign in')
}

if(password.length>8){
  alert('password should be less thsn 8 chaaracters')
  return;
}

setsucess(true)



}


  return (
 
      <div>
     
      {
      sucess&& userloggeed.length>0 ? (nav('/login')) :  (
          <div className='newdiv'>
          <section >
          <h1>Sign in</h1>
          <p style={{margin:'10px'}} className={error ? 'errmsg' :'offscreen'}>{error}</p>
          <form className='forms' onSubmit={handlesubmit}>
          <label > Firstname</label>
          <input type="text"  id="firstname" value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
          <label > Lastname</label>
          <input type="text"  id="lastname"value={lastname} onChange={(e)=>setlastname(e.target.value)} />
          <label > Email</label>
          <input type="email"  id="email" value={email} onChange={(e)=>setemail(e.target.value)} />
          <label > Password</label>
          <input type="password"  id="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
  
        <button>Sign up</button>
  
          </form>
        </section>
        </div>
        )
      }
      </div>
     


    
    

    
  )
}

export default Signin
