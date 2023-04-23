import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios, { } from 'axios'
import { useLocation, useParams } from 'react-router-dom';
function View() {
  const [getidbooks, setgetidbooks] = useState([])
// const geturl =  'http://localhost:7000/getbookbyid/'
const {id}  = useParams();
useEffect(() => {
  const resonce = axios.get(`http://localhost:7000/getbookbyid/${id}`).then(res=>setgetidbooks(res.data))

}, [])

console.log(getidbooks);

  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
               {/* width: 190px;
  height: 254px;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff; */}
            
                <Card  style={{ width: '250px',height:"254px",textAlign:'center',borderRadius:'30px',background:'#e0e0e0',boxShadow:"15px 15px 30px #bebebe,-15px -15px 30px #ffffff" }}>
              
                <Card.Body>
                  <Card.Title style={{fontSize:'30px',fontWeight:'bolder'}}>{getidbooks.bookname} </Card.Title>
                  <Card.Text>

                  {getidbooks.author}
                  </Card.Text>
                  <Card.Text style={{fontFamily:'-moz-initial'}}>
                  {getidbooks.publication}
                  </Card.Text>
                  <Card.Text>
                  {getidbooks.year}
                  </Card.Text>
                  <Card.Text>
                  {getidbooks.availablity}
                  </Card.Text>
                </Card.Body>
              </Card>
           
           
           
               
            
            
          
        
       


    </div>
  )
}

export default View
