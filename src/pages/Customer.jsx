import axios from 'axios'
import { MDBBadge, MDBBtn, MDBIcon, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Customer() {
const [customerdat, setcustomerdat] = useState('')

const id = useParams()
        useEffect(() => {
        axios.get('http://localhost:7000/getallcustomer').then(res=>setcustomerdat(res.data))
        }, [])
       
const handledelte=(id)=>{
  try {
    setcustomerdat(customerdat.filter(val=>val._id!==id))
    axios.delete(`http://localhost:7000/delcust/${id}`).then(res=>res.data).then(data=>console.log(data))
  } catch (error) {
    
  }
 
}

  return (
    <div style={{margin:"100px"}}>
            {/* const{name,email,address1,address2,city,state,pincode,country} = req.body */}
       <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Address 1</th>
          <th scope='col'>Address 2</th>
          <th scope='col'>City</th>
          <th scope='col'>State</th>
          <th scope='col'>Pincode</th>
          <th scope='col'>country</th>
          <th scope='col'>action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
            customerdat && customerdat.map((val)=>{
                const{_id,name,email,address1,address2,city,state,pincode,country} = val
                return(
                    <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                          alt=''
                          style={{ width: '45px', height: '45px' }}
                          className='rounded-circle'
                        />
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>{name}</p>
                         
                        </div>
                      </div>
                    </td>
                    <td>
                    <MDBBadge   pill>
                        {email}
                      </MDBBadge>
                    
                    </td>
                    <td>
                    <p className='fw-bold mb-1'>{address1}</p>
                    </td>
                    <td> <p className='fw-bold mb-1'>{address2}</p></td>
                    <td>
                     {city}
                    </td>
                    <td>
                        {state}
          
                    </td>
                    <td>
                        {pincode}
                    </td>
                    <td>
                        {country}
                    </td>
                    <td>
                    <Link style={{color:'red'}} onClick={()=>handledelte(_id)}><MDBIcon style={{padding:'10px',fontSize:'20px'}} fas icon="trash" /></Link>
                    <Link style={{color:'blue'}} to={`/editcustomer/${_id}`}><MDBIcon far icon="edit" /></Link>
                    </td>
                  </tr>
                )
              
            })
        }
       
      
      </MDBTableBody>
    </MDBTable>
<div>
<Link style={{color:'black'}} to='/addcustomer'><MDBIcon style={{fontSize:'40px',display:"flex",justifyContent:'center'}} fas icon="plus-square" /></Link>
    
</div>
    
    </div>
    
  )
}

export default Customer
