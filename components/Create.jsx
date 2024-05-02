import React from 'react'
import Topbar from './Topbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Blogcart from './Common/Blogcart';
import { useState } from 'react';
import { api } from '../src/App';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function Create() {
  let [title,settitle]=useState("")
  let [image,setimage]=useState("")
  let [desc,setdesc]=useState("")
  let navigate=useNavigate( )

  const handlecreate =async()=>{
    // e.preventDefault();
    try {
      let data={title,image,desc,status:false}
      console.log(data)
      let res= await axios.post(api,data)
       console.log(res);
      if(res.status===201)
      {
        toast.success("blog created succefully"),
        navigate('/dashboard')
      }
  
    } catch (error) {
      toast.error("blog error succefully")
    }
  }
  return <>
  <Topbar/>
  <div className='create'>
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={(e)=>settitle(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your title with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control type="texterae" placeholder="description" onChange={(e)=>setdesc(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>imageurl</Form.Label>
        <Form.Control type="texterae" placeholder="imageurl" onChange={(e)=>setimage(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handlecreate()}>
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

export default Create