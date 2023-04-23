import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { } from 'axios'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap'
function Client() {
 const getallURL = 'http://localhost:7000/getallclient'   
 const deltecliURL = 'http://localhost:7000/deletecli/'
const [getallclient, setgetallclient] = useState('')
const [dropdown, setdropdown] = useState(false)
useEffect(() => {
axios.get(getallURL).then(res=>setgetallclient(res.data))
}, [])

const handleddelte=(id)=>{
    try {
        setgetallclient(getallclient.filter(val => val._id !== id))
        const responce = axios.delete(deltecliURL+id).then(res=>res.data).then(data=>console.log(data))
    } catch (error) {
        
    }

}


  return (
    <div>


      <table className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Status</th>
      <th>Role</th>
      <th>Phonenumber</th>
      <th>actions</th>
    </tr>
  </thead>
  <tbody>
    {
        getallclient&&getallclient.map((val)=>{
            const {_id,name,username,email,status,role,phonenumber} = val
            return(
                <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{width: "45px", height: "45px"}}
                        className="rounded-circle"
                        />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{name}</p>
                      
                      
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{username}</p>
                  
                </td>
                <td>
                  <span className="badge badge-success rounded-pill d-inline">{email}</span>
                </td>
                <td>
                    {status}
       </td>
                <td>
             {role}
                
                </td>
                <td>
                {phonenumber}
                </td>
                <td >
                <i style={{padding:"10px",cursor:"pointer"}} onClick={()=>handleddelte(_id)} className="fas fa-trash"></i>  
                            
                    <Link to={`/editclient/${_id}`} style={{color:"blue"}}> <i class="fas fa-pen" ></i></Link>

                </td>
              </tr>

            )
        })
    }
   
    
  </tbody>
  
</table>
<div style={{display:'flex',justifyContent:'center',fontSize:'1.75em',paddingTop:'10px',cursor:'pointer',}}>
            <Link style={{color:'black'}} to='/addclient'><i  class="fas fa-square-plus"></i></Link>
</div>

    </div>
  )
}

export default Client

