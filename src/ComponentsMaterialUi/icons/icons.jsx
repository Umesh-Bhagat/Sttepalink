import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import SchoolIcon from '@material-ui/icons/School';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ApartmentIcon from '@material-ui/icons/Apartment';
import ClassIcon from '@material-ui/icons/Class';
import WcIcon from '@material-ui/icons/Wc';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CallIcon from '@material-ui/icons/Call';
import District from '@material-ui/icons/Add';
import FiberPinIcon from '@material-ui/icons/FiberPin';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

const InputsIcons = ({...props}) =>{
    const {
      IconType,
      ...rest
    } = props;

    let Icons = "";
    switch(IconType){

      case "LockOpenIcon":
        return(
          Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
                     <LockOpenIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                  </div> 
        )

        case "LockIcon":
          return(
            Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
                       <LockIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                    </div> 
          )
  

        case "AddLocationIcon":
          return(
            Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
                       <AddLocationIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                    </div> 
          )

        case "FiberPinIcon":
          return(
            Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
                       <FiberPinIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                    </div> 
          )
  
      case "District":
        return(
          Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
                     <District style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                  </div> 
        )

      case "CallIcon":
        return(
          Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
                     <CallIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                  </div> 
        )
      
      case "SchoolIcon":
        return(
          Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
                     <SchoolIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                  </div> 
        )

        case "DateRangeIcon":
          return(
            Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
                       <DateRangeIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                    </div> 
          )

        case "WcIcon":
          return(
            Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
                       <WcIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                    </div> 
          ) 
        case "ClassIcon":
          return(
            Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
                       <ClassIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                    </div> 
          )
        case "PersonIcon":
          return(
            Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
                       <PersonIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
                    </div> 
          )

        case "VisibilityIcon":
        return(
          Icons = <div style={{width:"40px",paddingTop:"5%",paddingLeft:"5px"}}>
            <VisibilityIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
          </div> 
        )

        case "VisibilityOffIcon":
        return(
          Icons = <div style={{width:"40px",paddingTop:"5px",paddingLeft:"5px"}}>
            <VisibilityOffIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
          </div> 
        )

        case "MailOutlineIcon":
        return(
          Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
            <MailOutlineIcon style={{width:"80%",height:"auto",color:"rgb(179, 179, 179)"}}/>
          </div> 
        )

        case "ApartmentIcon":
        return(
          Icons = <div style={{width:"40px",paddingTop:"10px",paddingLeft:"5px"}}>
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