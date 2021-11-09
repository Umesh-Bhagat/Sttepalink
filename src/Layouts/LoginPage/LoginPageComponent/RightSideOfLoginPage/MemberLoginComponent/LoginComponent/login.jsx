import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { createBrowserHistory } from "history";
import CustomInput from '../../../../../../ComponentsMaterialUi/CustomInput/CustomInput.jsx';
import GridContainer from '../../../../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import Button from '../../../../../../ComponentsMaterialUi/CustomButtons/Button.jsx';
import GridItem from '../../../../../../ComponentsMaterialUi/Grid/GridItem.jsx';
import LoginForm from '../../../../../../ComponentsMaterialUi/SignUpOrLoginForm/SignUpOrLoginForm.jsx';
import Card from "../../../../../../ComponentsMaterialUi/Card/Card.jsx";
import CardHeader from "../../../../../../ComponentsMaterialUi/Card/CardHeader.jsx";
import CardBody from '../../../../../../ComponentsMaterialUi/Card/CardBody.jsx';
import CardFooter from "../../../../../../ComponentsMaterialUi/Card/CardFooter.jsx";
import withErrorHandler from "../../../../../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../../../../../hoc/Axious/Axious";
import './login.css';
import SttepalinkLogo from "../../../../../../assets/images/studentsOnComputer.jpg";


const history = createBrowserHistory({forceRefresh: true});

const useStyles={
    "routeButton":{
      width: "100%",
      textDecoration: "none",
      padding: "0% 0% 0% 0%",
      color:"rgb(90, 32, 122)",
    } 
};

const Loginclass = ({...props}) =>{
 const {SubmitUserDetails,nameInputhandler,emailIdInputhandler,passwordInputhandler,nameSuccess,nameError,namePlaceholder,nameElementType,nameValue,
    nameType,emailSuccess,emailError,emailIdPlaceholder,emailIdElementType,emailIdValue,emailIdType,
    passwordSuccess,passwordError,passwordPlaceholder,passwordElementType,passwordValue,
    passwordType } = props;

 const SignUp = ( ) =>{
    history.push("/PricingPackage");
 }
 return(
   <>
    <GridContainer style={{background:"white",margin:"0"}}>
        <GridItem xs={12} sm={7} md={7}>
           <GridContainer>
             <GridItem xs={12} sm={12} md={12}>
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
     //  valid={initialRegisterState.inputData.name.isValid}
      // finalValue={initialRegisterState.subitted}
     //  InputDataChangeHandler={inputChangeHandler}
     //  validator={[VALIDATION_REQUIRED()]}
      />
     </GridItem>
     <GridItem xs={12} sm={12} md={12}>
       <CustomInput
         elementType="inputWithIcon"
         placeholder="Email Id"
         id="emailId"
         IconName="MailOutlineIcon"
       //  InputDataChangeHandler={InputDataChangeHandler}
         valid={true}
         finalValue={true}
        // validator={[VALIDATION_REQUIRED(),VALIDATION_EMAIL()]}
       /> 
        </GridItem>
     <GridItem xs={12} sm={12} md={12}>
       <CustomInput
          elementType="password"
          placeholder="Password"
          id="password"
          VisibleIconName="VisibilityIcon"
          NotVisibleIconName="VisibilityOffIcon"
        //  valid={initialLoginDataState.inputData.password.isValid}
         // finalValue={initialLoginDataState.submitted}
        //  InputDataChangeHandler={InputDataChangeHandler}
      //    validator={[VALIDATION_REQUIRED(),VALIDATION_MINLENGTH(6)]}
       /> 
       </GridItem>
           {/* <CustomInput
             success={nameSuccess}
             error={nameError}
             labelText={namePlaceholder}
             formControlProps={{
               fullWidth: true,
             }}
             id="name"
             elementType={nameElementType}
             value={nameValue}
             handleChange={(event)=>nameInputhandler(event)}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:nameType,
              }}
            />  
              

           <CustomInput
             success={emailSuccess}
             error={emailError}
             labelText={emailIdPlaceholder}
             formControlProps={{
               fullWidth: true,
             }}
             id="emailId"
             elementType={emailIdElementType}
             value={emailIdValue}
             handleChange={(event)=>emailIdInputhandler(event)}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:emailIdType,
             }}
           />  
            
           <CustomInput
             success={passwordSuccess}
             error={passwordError}
             labelText={passwordPlaceholder}
             formControlProps={{
               fullWidth: true,
             }}
             id="Password"
             elementType={passwordElementType}
             value={passwordValue}
             handleChange={(event)=>passwordInputhandler(event)}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:passwordType,
             }}
           />  */}
         
         {/* <CardFooter>
            <Button className="btn btn-md" onClick={SignUp}> Join Us</Button>
            <Button onClick={(event)=>SubmitUserDetails(event)}>Login</Button>
           </CardFooter> */}
           </GridContainer>
        </GridItem>
        </GridContainer>
     
   </>
  );   
}

export default  withStyles(useStyles)(withErrorHandler(Loginclass,axios));