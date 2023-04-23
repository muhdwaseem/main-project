import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './add.css'
import axios, {} from 'axios'
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import Edit from './Edit';
import View from './View';
import Pagination from './Pagination';

import { MDBTable, MDBTableHead, MDBTableBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import Modal from './Modal';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Book() {
  const nav  =useNavigate()

const [open, setopen] = useState(false)



  const url = 'http://localhost:7000/getbooks'
  const addurl  = 'http://localhost:7000/addbook'
  const delteurl = 'http://localhost:7000/delbook/'
  const updurl  = 'http://localhost:7000/updatebook/'
  const getbyidurl = 'http://localhost:7000/'


 const [bookname, setbookname] = useState('')
 const [author, setauthor] = useState("")
 const [publication, setpublication] = useState("")
 const [year, setyear] = useState("")
 const [availablity, setavailablity] = useState("")

 const [books, setbooks] = useState()
 const [query, setquery] = useState('')

 const [currentpage, setcurrentpage] = useState(1)
 const [postperpage, setpostperpage] = useState(4)
  

 const lastpostindex = currentpage * postperpage;
 const firstpostindex = lastpostindex - postperpage

 const currentpost =  (books&& books.slice(firstpostindex,lastpostindex));


// console.log();


 useEffect(() => {
  const response = axios.get(`http://localhost:7000/getbooks`).then(res=>setbooks(res.data))
}, [query])

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


 }



const handledelte=(id)=>{


try {
 
  setbooks(books.filter(val => val._id !==id))
  const delitems= axios.delete(delteurl+id).then(res=>res.data).then(data=>console.log(data))
  
  
} catch (error) {  
}
}









  return (
    <div className=''>
     <br /><br />
     <div style={{width:'30%',marginLeft:'33rem'}}>
      <h4 style={{textAlign:'center',fontSize:'35px',fontWeight:'bold'}}>Search :</h4>
     <MDBInput style={{margin:'20px'}} id='form1' type='text' onChange={(e)=>setquery(e.target.value)}/>
     </div>
    
       
 { open && <Modal  currentpost={currentpost}   setopen={setopen}/> }
 



<MDBTable>
      <MDBTableHead >
        <tr  className='table-primary'>
        <th>#</th>
          <th>bookname</th>
          <th>author</th>
          <th>publication</th>   
          <th>year</th>
          <th>availablity</th>
          <th>Actions</th>
          <th> </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {currentpost && currentpost.filter((val)=>val.bookname.toLowerCase().includes(query)).map((val,index)=>{
          const {_id,bookname,author,publication,year,availablity} =val
          return(
           
            <tr>
            <th scope='row'>{postperpage*(currentpage-1)+index+1}</th>
            <td>{bookname}</td>
            <td>{author}</td>
            <td>{publication}</td>
            <td>{year}</td>
            <td>{availablity}</td>
            <td>
           <Link onClick={()=>setopen(true)} style={{color:"red",padding:'10px'}}> <MDBIcon far icon="trash-alt" /></Link>
          
           <Link style={{color:'blue',padding:'10px'}} to={`/edit/${_id}`}><MDBIcon far icon="edit" /></Link>
           <Link style={{color:'blue',padding:'10px'}} to={`/view/${_id}`}><MDBIcon far icon="eye" /></Link>
            </td>
           
          </tr>
          )
        })}
      
       
      </MDBTableBody>
    </MDBTable>

    <Pagination  setcurrentpage={setcurrentpage} postperpage={postperpage} totalpost={books&&books.length} currentpage={currentpage}/>

 
    <Link style={{color:"black",display:'flex',justifyContent:'center',margin:'40px',fontSize:'30px' }} to={'/add'}><MDBIcon fas icon="plus-circle" /></Link>



 



    </div>
  )
}




export default Book
