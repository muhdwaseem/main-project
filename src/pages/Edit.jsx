import React, { useEffect, useState } from 'react'
import axios, {} from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Edit({book}) {
  const {id} = useParams()
const [users, setusers] = useState([])
  
  const [userinputs, setuserinputs] = useState({bookname:users.bookname,author:users.author,publication:users.publication,year:users.year,availablity:users.availablity})
  // const location = useLocation()
  
  // const updurl  = 'http://localhost:7000/updatebook/'
  // const geturl =  'http://localhost:7000/getbookbyid/'
// const [editall, seteditall] = useState({bookname:" ",author:" ",publication:" ",year:" ",availablity:" " })
// const [getall, setgetall] = useState([])
const nav = useNavigate();
// console.log(location );
useEffect(() => {
  axios.get(`http://localhost:7000/getbookbyid/${id}`).then(res=>setusers(res.data))
}, [id,users])

// console.log(users);

const valuechange=(e)=>{
  setuserinputs({...userinputs,[e.target.name]:e.target.value})
}
// useEffect(() => {
//   axios.get(`http://localhost:7000/getbookbyid/${id}`).then((res)=>setgetall(res.data))

// }, [id,getall])

 const updateeventhandler=(e)=>{
  e.preventDefault();
  
axios.put(`http://localhost:7000/updatebook/${id}`,userinputs).then(res=>setuserinputs(res.data))
nav('/book')
 }
// seteditall(getall && getall.map((val)=>{
//   if(val.id===id){
//     return{...val,editall}
//   }
//   return val
// }))
 
//   const userdetails={editall}
//  axios.put(`http://localhost:7000/updatebook/${id}`,userdetails).then((res)=>setgetall(res.data)).then(data=>console.log(data))
// // setgetall(...getall,every)

// nav('/book')
//  }


// const handleinput=()=>{
//   getall.map((val)=>{
//     return 
//   })

// }


 
  return (
  
  <div  >
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>bookname</Form.Label>
        <Form.Control type="text" name="bookname"  defaultValue={users.bookname} placeholder={users.bookname} onChange={valuechange}  />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" name="author" placeholder={users.author}   defaultValue={users.author} onChange={valuechange} />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>publication</Form.Label>
        <Form.Control type="text" name="publication" placeholder={users.publication} defaultValue={users.publication} onChange={valuechange}  />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>year</Form.Label>
        <Form.Control type="text" name="year" placeholder={users.year} defaultValue={users.year} onChange={valuechange}  />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>availablity</Form.Label>
        <Form.Control type="text" name="availablity" placeholder={users.availablity} defaultValue={users.availablity} onChange={valuechange}  />
      
      </Form.Group>
     
    
      <Button onClick={updateeventhandler} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        




























        {/* <form action="" style={{border:"2px solid black",borderRadius:'30px',padding:"10px",width:"20%",marginLeft:"39rem",marginTop:"5rem"}} >
        <label style={{color:"black",textAlign:"center"}}>bookname</label>
        <input type="text" name='bookname'  id="" onChange={(e)=>valuechange(e)} value={users.bookname}/>
        <label style={{color:"black",textAlign:"center"}}>author</label>
        <input type="text" name='author' id=""    onChange={(e)=>valuechange(e)} value={users.author}/>
        <label style={{color:"black",textAlign:"center"}}>publication</label>
        <input type="text" name='publication' id=""  onChange={(e)=>valuechange(e)}  value={users.publication}/>
        <label style={{color:"black",textAlign:"center"}}>year</label>
        <input type="text" name='year' id="" onChange={(e)=>valuechange(e)}  value={users.year}/>
        <label style={{color:"black",textAlign:"center"}}>availablity</label>
        <input type="text" name='availablity' id=""   onChange={(e)=>valuechange(e)}  value={users.availablity}/>
        
    <button >update</button>
        
        </form> */}
      
  
  
    
  </div>
    
  )
}

export default Edit
