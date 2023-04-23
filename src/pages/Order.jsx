import axios from 'axios'
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Order() {
    const [order, setorder] = useState()
   
    useEffect(() => {
       axios.get('http://localhost:7000/getallorder').then(res=>setorder(res.data))
    }, [])
    const handledelte=(id)=>{
        setorder(order.filter(val=>val._id!==id))
        axios.delete(`http://localhost:7000/deleteorder/${id}`).then(res=>res.data)
        if(order){
            alert('delete data')
            return
        }
    }
   
  return (
    <div>

<MDBTable>
      <MDBTableHead>
        <tr className='table-primary'>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Address</th>
          <th scope='col'>Tags</th>
          <th scope='col'>Action</th>
          <th> </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
    {order&&order.map((val)=>{
        return(
<tr>
          <th scope='row'>{val.name}</th>
          <td>{val.age}</td>
          <td>{val.address}</td>
          <td>{val.tags}</td>
          <td>{val.action}
         
          </td>
          <td> <MDBBtn  onClick={()=>handledelte(val._id)}>delete</MDBBtn>
          <Link style={{margin:'10px'}}  to={`/editorder/${val._id}`}><MDBBtn >Edit</MDBBtn></Link>
          </td>
           
        </tr>
        )
    })}
        
       
      </MDBTableBody>
    </MDBTable>


    </div>
  )
}

export default Order

