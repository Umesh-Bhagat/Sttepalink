import React, { useReducer ,useCallback } from 'react';
import { connect } from "react-redux";
import LogonBackgroundImage from "../../ComponentsMaterialUi/LoginSignUpBackgroundImage/LoginSignUpPageImage";
import {Redirect} from 'react-router-dom';
import { createBrowserHistory } from "history";
import {
 VALIDATION_REQUIRED,
 VALIDATION_MINLENGTH,
 VALIDATION_EMAIL
} from "../../utilityFolder/validator"
import CustomInput from '../../ComponentsMaterialUi/CustomInput/CustomInput.jsx';
import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../ComponentsMaterialUi/Grid/GridItem.jsx';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../hoc/Axious/Axious";

import * as actions from "../../Store/actions/index";


const history = createBrowserHistory({forceRefresh: true});

const loginReducer = (state , action)=>{
  switch(action.type){
    case "INPUT-VALIDATION" :
      let forIsValid = true;
      for(let inputId in state.loginData){
        if(inputId === action.inputId){
          forIsValid = forIsValid && action.isValid;
        }else{
          forIsValid = forIsValid && state.loginData[inputId].isValid;
        }
      }
      return {
         ...state,
          loginData:{
            ...state.loginData,
            [action.inputId]:{
              value:action.value,
              isValid:action.isValid
            }
          },
          isValid:forIsValid
      }
      case "REGISTER_USER":
        return{
          ...state,
          subitted:action.subitted
        }
      default :
      return state;  
  }
}

const Loginclass = ({onAuth,IsAuthenticated}) =>{

  const [initialLoginState ,dispatch] = useReducer(
   loginReducer,{
     loginData:{
       name:{
         value:'',
         isValid:false
        },
       emailId:{
         value:'',
         isValid:false
        }, 
       password:{
         value:'',
         isValid:false
       },
     },
    isValid:false,
    subitted:false
  });


  // componentDidMount() {
  //   const CopyOfLoginDetails = {
  //     ...this.state.LoginDetails
  //   };
     
  //   CopyOfLoginDetails.name.value="";
  //   CopyOfLoginDetails.emailId.value="";
  //   CopyOfLoginDetails.Password.value="";
  //   this.setState({LoginDetails:CopyOfLoginDetails});
  //  }
 

  const inputChangeHandler = useCallback((id,value,isValid) =>{
    dispatch({
      type:"INPUT-VALIDATION",
      value:value,
      inputId:id,
      isValid:isValid
    });
  },[]);


 const SubmitUserDetails = ( event) => {
  dispatch({
    type:"REGISTER_USER",
    subitted:true
  });
    event.preventDefault();     
    const {emailId,name,password} = initialLoginState.loginData   
    console.log(emailId.value,name.value,password.value);        
   
    let validateLoginInputs = initialLoginState.isValid

    if(validateLoginInputs){
      console.log("readyToSent")
     onAuth(emailId.value,password.value,false);
    }
  }   
 
  const SignUp = ( ) =>{
    history.push("/PricingPackage");
 }
 let  redirectToHomePage = null;
 if(IsAuthenticated){
   console.log("its working")
   redirectToHomePage = <Redirect to="/Info-page" />
 }
 return(
   <>
  {redirectToHomePage}
    <GridContainer style={{background:"white",margin:"0"}}>
        <GridItem xs={12} sm={7} md={7}>
           <GridContainer>
             <GridItem xs={12} sm={12} md={12}>
               <LogonBackgroundImage/>
             </GridItem>
           </GridContainer>
         </GridItem>
         <GridItem  xs={12} sm={5} md={5}>
          <GridContainer style={{paddingBottom:"2%",padding:"25% 0 0 0",}}>
          <GridItem xs={12} sm={12} md={12}>
      <CustomInput
       elementType="inputWithIcon"
       placeholder="Your Name"
       id="name"
       IconName="PersonIcon"
       valid={initialLoginState.loginData.name.isValid}
       finalValue={initialLoginState.subitted}
       InputDataChangeHandler={inputChangeHandler}
       validator={[VALIDATION_REQUIRED()]}
      />
     </GridItem>
     <GridItem xs={12} sm={12} md={12}>
       <CustomInput
         elementType="inputWithIcon"
         placeholder="Email Id"
         id="emailId"
         IconName="MailOutlineIcon"
         InputDataChangeHandler={inputChangeHandler}
         valid={initialLoginState.loginData.emailId.isValid}
         finalValue={initialLoginState.subitted}
         validator={[VALIDATION_REQUIRED(),VALIDATION_EMAIL()]}
       /> 
        </GridItem>
     <GridItem xs={12} sm={12} md={12}>
       <CustomInput
         elementType="password"
         placeholder="password"
         id="password"
         IconName="MailOutlineIcon"
         VisibleIconName="VisibilityIcon"
         NotVisibleIconName="VisibilityOffIcon"
         InputDataChangeHandler={inputChangeHandler}
         valid={initialLoginState.loginData.password.isValid}
         finalValue={initialLoginState.subitted}
         validator={[VALIDATION_REQUIRED(),VALIDATION_MINLENGTH(6)]}
       /> 
     </GridItem>
     <GridContainer>
       <GridItem sm={6} >
         <button className="btn btn-md" onClick={SignUp}> Join Us</button>
       </GridItem>
       <GridItem sm={6} >
         <button onClick={(event)=>SubmitUserDetails(event)}>Submit</button>
       </GridItem>
     </GridContainer> 
   </GridContainer>
        </GridItem>
        </GridContainer>
     
   </>
  );   
}

const mapStateToProps = state => {
  return{
    IsAuthenticated : state.Auth.token !== null
  } 
 }
  const mapDispatchToProps = dispatch => {
     return{
        onAuth: (emailId, password,isSignUp ) => dispatch(actions.Auth(emailId, password,isSignUp))
     }
  }
 

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Loginclass,axios));