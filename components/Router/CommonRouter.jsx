import Dashboard from "../Dashboard";
import Edit from "../Edit";
import Home from "../Home";
import Create from "../Create";
import Topbar from "../Topbar";
 
const CommonRouter=[
    {
        path:"/"  ,
        extact:true,
        element:<Home />
    },
    {
        path:"/dashboard"  ,
        extact:true,
        element:<Dashboard />
    },
    {
        path:"/edit/:id"  ,
        extact:true,
        element:<Edit />
    },
    {
        path:"/create"  ,
        extact:true,
        element:<Create />
    },
  
  

 ]
 export default CommonRouter