import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ApartmentIcon from '@material-ui/icons/Apartment';

const InputsIcons = ({...props}) =>{
    const {
      IconType,
      ...rest
    } = props;

    let Icons = "";
    switch(IconType){
        case "PersonIcon":
        return(
          Icons = <div style={{width:"30px",paddingTop:"10px",paddingLeft:"5px"}}>
                     <PersonIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                  </div> 
        )

        case "VisibilityIcon":
        return(
          Icons = <div style={{width:"30px",paddingTop:"5%",paddingLeft:"5px"}}>
            <VisibilityIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
          </div> 
        )

        case "VisibilityOffIcon":
        return(
          Icons = <div style={{width:"30px",paddingTop:"5px",paddingLeft:"5px"}}>
            <VisibilityOffIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
          </div> 
        )

        case "MailOutlineIcon":
        return(
          Icons = <div style={{width:"30px",paddingTop:"10px",paddingLeft:"5px"}}>
            <MailOutlineIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
          </div> 
        )

        case "ApartmentIcon":
        return(
          Icons = <div style={{width:"30px",paddingTop:"10px",paddingLeft:"5px"}}>
            <ApartmentIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
          </div> 
        )

        default :
        return(
            Icons= ""
        )
    }
}

export default InputsIcons;