import React, { useEffect } from 'react'
import Topbar from './Topbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Blogcart from './Common/Blogcart';
import { useState} from 'react';
import {useParams ,useNavigate} from 'react-router-dom'
import { api } from '../src/App';
import axios from 'axios'



function Edit() {
  let {id}=useParams()
  let navigate=useNavigate()
  let [title,settitle]=useState("")
  let [image,setimage]=useState("")
  let [desc,setdesc]=useState("")
  // handle to create
  const handleedit =async()=>{

  try {
    let data={title,image,desc,status:false}
    let res= await axios.put(`${api}/${id}`,data)
    // console.log(res);
    if(res.status===200)
    {
      toast.success("blog edited succefully"),
      navigate('/dashboard')
    }

  } catch (error) {
    toast.error("blog error succefully")
  }
}
 const getdatabyid=async()=>{
  try {
    let dataid=await axios.get(`${api}/${id}`)
    if(res.status===200){
      settitle(dataid.data.title)
      setimage(dataid.data.image)
      setdesc(dataid.data.desc)
    }
  } catch (error) {

    toast.error("edited sucessfully")
  }
 }

// to get the id to edit
   useEffect(()=>{
          getdatabyid()
  },[])
  return <>
  <Topbar/>
  <div className='create'>
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=>settitle(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your title with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control type="texterae" placeholder="description"  value={desc} onChange={(e)=>setdesc(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>imageurl</Form.Label>
        <Form.Control type="texterae" placeholder="imageurl" value={image} onChange={(e)=>setimage(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={()=>handleedit()}>
        Submit
      </Button>
    </Form>
    <div>
    <Blogcart 
    title={title}
    image={image}
    desc={desc}
    />
    

    </div>
    

  </div>

  </>
}

export default Edit