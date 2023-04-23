import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

function Modal({setopen,currentpost}) {

  const delteurl = 'http://localhost:7000/delbook/'
  const id = useParams()
  const handledelte=(id)=>{
    currentpost.filter(val=>val._id!==id)
    axios.delete(`http://localhost:7000/delbook/${id}`).then(res=>res.data).then(data=>console.log(data))
  }
  return (
    <div className='modalbackkgroung'>
        <div className="modalcontainer">
            
            <h1>are u sure u wand to delete</h1>
            <button  onClick={()=>setopen(false)}>cancel</button>
            
                <button onClick={()=>handledelte()} >countinue</button>
              
                
        
           



        </div>
    </div>
  )
}

export default Modal