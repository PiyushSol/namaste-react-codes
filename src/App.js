import React from "react";
import { createRoot } from "react-dom/client"
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { IMG_CDN_URL } from "./config.js";

const AppLayout=()=>{
   return (
   <>  
   <Header/>
    <Body/>
    <Footer/>
   </>
   );
};

 
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);