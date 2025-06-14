import React from "react";
import { createRoot } from "react-dom/client"
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestrauntMenu from "./components/RestrauntMenu.js";
import { IMG_CDN_URL } from "./config.js";
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router";



const AppLayout=()=>{
   return (
   <>  
    <Header/>
    <Outlet />
    <Footer/>
   </>
   );
};

const appRouter = createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
          {
      path:'/',
      element:<Body/>
   },
 {
      path:'/about',
      element:<About/>
   },
   {
      path:'/contact',
      element:<Contact/>
   },
   {
      path:"/restraunt/:id",
      element:<RestrauntMenu />
   },

      ]
   },
  
])

 
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);