import React from 'react'
import Topbar from './Topbar'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { api } from '../src/App';
import { toast } from 'react-toastify';
import Blogcart from './Common/Blogcart';

function Home() {
    let [blog ,setblog]=useState("")
    console.log(blog);
    const getdata =async()=>{
     try {
      let data= await axios.get(api)
      console.log(data);
      if(data.status===200){
        toast.success("blog sucessefully")
        setblog(data.data.filter((e)=>(e.status)))
      }
      
     } catch (error) {
      toast.error( )
     }
    }
  
    useEffect(()=>{
       getdata()
    },[])
  return<>
  <Topbar/>
  <div>
    {
    Array.isArray(blog)&&    blog.map((e)=>{
          return   <Blogcart  title={e.title} desc={e.desc} image={e.image}/>
        })
    }
    
  </div>
  </>



  
}

export default Home