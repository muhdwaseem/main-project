import React, { useState } from 'react'
import axios, {} from 'axios'
import { useNavigate } from 'react-router-dom'
function Add() {
  const addurl  = 'http://localhost:7000/addbook'
  const [books, setbooks] = useState()
 const [bookname, setbookname] = useState('')
 const [author, setauthor] = useState("")
 const [publication, setpublication] = useState("")
 const [year, setyear] = useState("")
 const [availablity, setavailablity] = useState("")
 const [ssucess, setssucess] = useState(false)
 const nav = useNavigate();

  const handlesubmit=async(e)=>{
    e.preventDefault();
      try {  const config ={
        headers:{
          "Content-type":"application/json"
        },
      } 
        const userdetails =  {bookname,author,publication,year,availablity}
        const additems = axios.post(addurl,userdetails,config).then(res=>res.data).then(data=>console.log(data))
        setbooks(...books,additems)
       
      } catch (error) {
        
      }
    
      setssucess(true)
     }

     
  return (
    <div>
        {
          ssucess ? (nav('/book')) : (
            <div className='addform'>

            <form action=""  onSubmit={ handlesubmit}>
            <label style={{color:"black",textAlign:"center"}}>bookname</label>
              <input  type="text" value={bookname} onChange={(e)=>setbookname(e.target.value)}/>
              <label style={{color:"black",textAlign:"center"}}>author</label>
              <input type="text" value={author} onChange={(e)=>setauthor(e.target.value)} />
              <label style={{color:"black",textAlign:"center"}}>publication</label>
              <input type="text" value={publication} onChange={(e)=>setpublication(e.target.value)} />
              <label style={{color:"black",textAlign:"center"}}>year</label>
              <input type="text" value={year}  onChange={(e)=>setyear(e.target.value)}/>
              <label style={{color:"black",textAlign:"center"}}>availablity</label>
              <input type="text" value={availablity} onChange={(e)=>setavailablity(e.target.value)}/>
              <button >add</button>
            </form>
            
            </div>
          )
        }
      
        
        
 

        </div>
  )
}

export default Add
