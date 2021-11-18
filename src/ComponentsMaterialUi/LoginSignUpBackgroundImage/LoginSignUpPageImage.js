import React from "react";
import SttepalinkLogo from "../../assets/images/studentsOnComputer.jpg";

const LoginSignUpPageImage = ( ) =>{
    return(
        <div style={{
            width:"100%",
            padding:"15% 0 0 0%"
          }}>
            <div 
              style={{
                width:"100%",
                height:"auto",
              }}
            >
              <img style={{width:"100%"}} src={SttepalinkLogo} alt="infoImage"/>
            </div>
          </div> 
    );
}

export default LoginSignUpPageImage;