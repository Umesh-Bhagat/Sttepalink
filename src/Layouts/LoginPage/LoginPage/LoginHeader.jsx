import React from "react";
import LogoImage from "../../../Components/infodeskImage/InfodeskImage";
const LoginHeader = ({...props}) =>{

 return(
   <>
     <nav className="navbar navbar-light px-2 py-0 border-bottom shadow-sm p-3 mb-5" style={{zIndex:"500", background:"rgb(102, 163, 255,.6)"}}>
        <div className="d-flex">
           <div style={{width:"50px"}}>
           <div className="p-1">
               <LogoImage/>
           </div>
           </div>
           <a className="navbar-brand" style={{color:"white"}} href="#">
              <h3 className="m-0 mx-2 px-3" style={{fontWeight:"650",borderLeft:"1px solid white"}}>𝐒𝐭𝐭𝐞𝐩𝐚𝐥𝐢𝐧𝐤</h3> 
              </a>
        </div>  
        <div className="d-grid d-flex gap-3 justify-content-end py-2" style={{width:"20%",fontFamily:"Cambria"}}>
          <a 
            className="btn py-1 text-center"
            style={{
              width:"100%",
              padding:"0",
              background:"#80b3ff",
              color:"white",
              fontSize:"18px",
              fontWeight:"650"
            }}
            type="button"
            href="/login"
          >
           Login
          </a>
          <a
          className="btn py-1 text-center"
          style={{
            width:"100%",
            padding:"0",
            background:"#80b3ff",
            color:"white",
            fontSize:"18px",
            fontWeight:"650"
          }}
          type="button" 
          href="/pricing"
          >
           Pricing
         </a>
       </div>
    </nav>
   </>
 )
};

export default LoginHeader;