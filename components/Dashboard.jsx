import React from 'react'
import Topbar from './Topbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { api } from '../src/App'
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import{useNavigate }from 'react-router-dom'
function Dashboard() {
  let navigate=useNavigate()
  // to set the value
  let [blog ,setblog]=useState("")
  console.log(blog);
  const getdata =async()=>{
   try {
    let data= await axios.get(api)
    console.log(data);
    if(data.status===200){
      toast.success("blog sucessefully")
      setblog(data.data)
    }
    
   } catch (error) {
    toast.error( )
   }
  }
  // to delete the value
  const handletodelete=async(id)=>{
    // console.log(id);
    let datadelete=await axios.delete(`${api}/${id}`)
    // console.log(datadelete);
    if(datadelete.status===200){
      toast.success("deleted")
      getdata()
    }
  }

  useEffect(()=>{
     getdata()
  },[])
  return <>
  <Topbar/>
  <Table>
      <thead>
        <tr>
          <th>sno</th>
          <th>title</th>
          <th>images</th>
          <th>description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
         Array.isArray(blog)&&blog.map((e,i)=>{
          return <tr key={i}>
          <td>{i+1}</td>
          <td>{e.title}</td>
          <td><img src={e.image} className='dasimg' /></td>
          <td>{e.desc}</td>
          <td><label class="switch">
         <input type="checkbox" checked={e.status}/>
         <span class="slider round"></span>
         </label></td>
          <td>
          <Button variant="outline-primary" onClick={()=>navigate(`/Edit/${e.id}`)}>Edit</Button>
          &nbsp
          <Button variant="outline-primary" onClick={()=>handletodelete(e.id)}>delete</Button>
          
          </td>

        </tr>

        })
       }
       
     
      </tbody>
    </Table>
  <div>

  </div>
  
  </>
}

export default Dashboard