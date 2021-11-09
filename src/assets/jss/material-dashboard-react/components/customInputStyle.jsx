import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from "../../material-dashboard-react.jsx";

const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important",
     
    }
  },
  InputStyle: {
    width:"100%",
    background: 'rgb(191, 187, 216,.4)',
    color:"black",
    height:"45px",
    border: 0,
    fontSize:'17px',
    fontWeight:"500",
    borderBottom:"1px solid black",
    textDecoration:"none",
    boxShadow: '0 3px 5px 2px rgba(237, 237, 237, .3)',
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important",
      textDecoration:"none"
    },
    "&:after": {
      borderColor: "#a2a2a6",
      backgroundColor:"white",
      
    }
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor
    }
  },
  labelRoot: {
    ...defaultFont,
    color: "#464647 !important",
    fontWeight: "200",
    fontSize: "17px",
    padding:"0% 0 0 2%",
    lineHeight: "1.42857",
    textDecoration:"none"
  },
  labelRootError: {
    color: dangerColor,
    borderBottom:"1px solid red"
  },
  labelRootSuccess: {
    color: successColor
  },
  feedback: {
    position: "absolute",
    top: "18px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none",
    textDecoration:"none"
  },
  marginTop: {
    marginTop: "16px",
  },
  formControl: {
    paddingBottom: "10px",
    margin: "27px 0 0 0",
    position: "relative",
    "&:after": {
      backgroundColor:"white"
    },
    textDecoration:"none"

  },
  InputElementSelect:{
    width: "95%",
    height: "100%",
    outline: "none",
    padding: "3% 0% 3% 2%",
    margin: "0% 0% 3.5% 0%",
    border: "none",
    boxShadow: "0px 1px 1px rgb(169, 168, 168)",
    backgroundColor:" rgb(231, 230, 230)",
    textDecoration:"none"
  },
  inputStyle:{
    width:"90%",
    height:"45px",
    paddingLeft:"2%",
    border:"none",
    outline:"none",
    "&:hover,&:focus": {
       outline: "none",
     }
  },
  inputBorder:{
     width:"100%",
     display:"flex",
     marginBottom:"1.3%",
     padding:'.1%',
     border:"2px solid rgb(217,217,217)",
     borderRadius:".5em"
  },
  notValid:{
   width:"100%",
   display:"flex",
   marginBottom:"1.3%",
   padding:'.1%',
   borderRadius:".5em",
   border:"2px solid red",
   background:"rgb(255, 51, 51)"
  },
  errMegStyl:{
   margin:"0",
   color:"red",
   fontSize:"16px",
   paddingLeft:".5%",
   fontWeight:"600"
  }
 
};

export default customInputStyle;
