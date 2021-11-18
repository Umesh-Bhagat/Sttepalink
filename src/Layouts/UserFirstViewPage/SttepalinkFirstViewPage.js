import React from "react";
import LoginPageHeader from "./SttepalinkViewPageHeader.jsx";
import BackgroundImage from "../../assets/images/studentLearning.jpg"  

const LoginFrame = ({props}) =>{
 return(
   <>
     <LoginPageHeader/>
     <div 
       style={{ 
         position:"fixed",
         zIndex:"200",
         height: "100vh",
         top:"0",
         bottom:"0",
         left:"0",
         right:"0",
         backgroundPosition: "center",
         backgroundSize: "cover",
         background:'white'
       }}
      >
       <img 
         style={{ 
           width:"60%",
           padding:"5% 0% 0% 0%",
           height:"100%", 
         }} 
         src={BackgroundImage}
         alt="BackgroundImage"
        /> 
     </div> 
     <div 
         style={{
           position:"fixed",//........4d79ff
           color:'rgb(102, 163, 255,.6)',
           textShadow:"2px 0px #A0A0A0",
           top:"22%", 
           left:"51%",
           right:"1%",
           bottom:"0%",
           zIndex:"320"
          }}
        >
          <div 
           style={{
             fontSize:"52px",
             fontWeight:"850",
             textAlign:"center",
             paddingTop:"10%",
            }}
         >
           𝐒𝐓𝐓𝐄𝐏𝐀𝐋𝐈𝐍𝐊 𝐋𝐄𝐀𝐑𝐍𝐈𝐍𝐆
         </div> 
         <p 
           style={{
             fontSize:"30px", 
             fontWeight:"550",
             padding:"8% 5% 0% 5%",
             textAlign:"center",
             margin:"2% 0 0 0",
            }} 
          >
             𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫𝐞 𝐰𝐢𝐭𝐡 𝐒𝐭𝐭𝐞𝐩𝐚𝐥𝐢𝐧𝐤 𝐚𝐧𝐝 𝐠𝐞𝐭 𝐝𝐢𝐬𝐜𝐨𝐮𝐧𝐭 𝐮𝐩𝐭𝐨 𝟒𝟓% - 𝟓𝟎% 
          </p>
         <div className=" w-100 text-center">
           <a 
             style={{fontSize:"20px",marginTop:"11%",width:"40%",background:"#66a3ff",textShadow:"none",}}
             className="btn btn-lg px-5 fw-650 shadow-lg p-2 mb-2 rounded text-light" 
             href="/pricing"
            >
             ʀᴇɢɪꜱᴛᴇʀ ʜᴇʀᴇ
           </a>
           <p className="mt-3 mb-1 fw-bold" style={{ textShadow:"none"}}>(Terms & Conditions Applied)</p>
         </div>
      </div>
    </>
 )
}

export default LoginFrame;
