import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react'

function Pagination({totalpost,postperpage,setcurrentpage,currentpage}) {
  let page = []
for(let i=1;i<=Math.ceil(totalpost/postperpage); i++)
{
  page.push(i);
}

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      {
        page.map((val,index)=>{
          return(
            <MDBBtn onClick={()=>setcurrentpage(val)} style={{padding:'13px',margin:'10px'}}>{val}</MDBBtn>
            // <button  style={{margin:'0 10px',width:'40px',height:'50px',fontWeight:'600',textAlign:'center',borderRadius:'6px',background:'transparent',transition:'all 0.3s ease'}}  key={index} onClick={()=>setcurrentpage(val)}>{val}</button>
          )
        })
      }
    </div>
  )
}

export default Pagination

