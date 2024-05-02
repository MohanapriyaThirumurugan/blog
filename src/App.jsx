import React from 'react'
import ReactDOM from "react-dom";
import CommonRouter from '../components/Router/CommonRouter'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
export let api="https://660e701d6ddfa2943b36c955.mockapi.io/blog"

function App() {
  const router=createBrowserRouter(CommonRouter)
  return (
    <RouterProvider router={router}/>
  )
}

export default App
