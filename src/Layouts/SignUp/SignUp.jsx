import React,{ useReducer} from 'react';
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import {Redirect} from 'react-router-dom';
import {
  VALIDATION_REQUIRED,
  VALIDATION_MINLENGTH,
  VALIDATION_EMAIL
} from "../../utilityFolder/validator";
import Header from "../UserFirstViewPage/SttepalinkViewPageHeader";
import CustomInput from '../../ComponentsMaterialUi/CustomInput/CustomInput.jsx';
import CustomButton from "../../ComponentsMaterialUi/CustomButtons/Button.jsx";
import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../ComponentsMaterialUi/Grid/GridItem.jsx';
import SttepalinkLogo from "../../assets/images/studentsOnComputer.jpg";
import * as actions from "../../Store/actions/index";

const history = createBrowserHistory({forceRefresh: true});

const SignUpPageReducer = (state,action) =>{
  console.log("hello");
}

const SignUpComponent = (props)=>{

  const {isAuthenticated} = props

  const [initialSignUpState , dispatch] = useReducer(
    SignUpPageReducer , {userDetails:{
      name:{
       value:"",
       isValid:false
      },
      emailId:{
       value:"",
       isValid:false
      },
      Standart:{
       options:[
         { 
            value:"Class 12 Sci. (Without Biology)",
            displayValue:"Class 12 Sci. (Without Biology)"
         },
         { 
           value:"Class 12 Sci.(Without Maths)",
           displayValue:"Class 12 Sci.(Without Maths)"
         },
         {
           value:"Class 12 Commerce",
           displayValue:"Class 12 Commerce"
         },
         {
           value:"Class 12 Arts",
           displayValue:"Class 12 Arts"
         },
         { 
           value:"Class 11 Sci.(Without Biology)",
           displayValue:"Class 11 Sci.(Without Biology)"
         },
         { 
           value:"Class 11 Sci.(Without Maths)",
           displayValue:"Class 11 Sci.(Without Maths)"
         },
         { 
           value:"Class 11 Commerce", 
           displayValue:"Class 11 Commerce" 
         },
         { 
           value:"Class 11 Arts", 
           displayValue:"Class 11 Arts" 
         },
         { 
           value:"Class 10", 
           displayValue:"Class 10" 
         },
         { 
           value:"Class 9", 
           displayValue:"Class 9" 
         },
         { 
           value:"Class 8", 
           displayValue:"Class 8" 
         },
       ],
       value:"Class 10" ,
       isvalid:false
      },
      SchoolName:{
       value:"",
       isvalid:false
      },
      mobileNo:{
       value:'',
       isvalid:false,
      },
      dateOfBirth:{
       value:'',
       isValid:false
      },
      sex:{
       options:[
         { value:"Male", displayValue:"Male" },
         { value:"Female", displayValue:"Female" },
         {value:"Other",displayValue:"Others"}
        ],
        value:'Male',
        isValid:false      
      },
      district:{
       value:'',
       isValid:false
      },
      pincode:{
       value:'',
       isValid:false
      },
      states:{
       value:'',
       isValid:false
      },
      Password:{
       value:"",
       isValid:false
      },
      ConfirmPassword:{
       value:"",
       isValid:false
      }
    },
    isValid:false,
    toggleform:false,
    CurrentUsingPlan:'',
    VarifiedPasswords : ''
  });


  const  PasswordValidation = (Password1 , Password2) =>{
   if((Password1 === Password2)){
     return Password1;
   }else{
     return false;
   }
  }

  

  const SubmitData = (MatchedPassword) => {
    const userDetails = {
      PlanName: localStorage.getItem("Package"),
      name:initialSignUpState.name.value,
      emailId:initialSignUpState.emailId.value,
      class:initialSignUpState.Standart.value,
      SchoolName: initialSignUpState.SchoolName.value,
      mobileNo: initialSignUpState.mobileNo.value,
      dateOfBirth: initialSignUpState.dateOfBirth.value,
      sex: initialSignUpState.sex.value,
      district: initialSignUpState.district.value,
      pincode: initialSignUpState.pincode.value,
      states: initialSignUpState.states.value
    }
    props.signUpAuth(userDetails.emailId,MatchedPassword,true,userDetails);   
  }

  const SubmitUserDetails = (e ) => {
     e.preventDefault();
     let MatchedPassword = " ";
     const password1 = initialSignUpState.Password.value ;
     const password2 =  initialSignUpState.ConfirmPassword.value;
   
     MatchedPassword = PasswordValidation(password1,password2);
       
     if(MatchedPassword && initialSignUpState.isValid){
       console.log(MatchedPassword)
       SubmitData(MatchedPassword);
      }else{
       console.log("some Inputs are empty");
      }
  
    };
   
   const   InputChangeHandler = (event, inputIdentifier ) =>{
     console.log(inputIdentifier);
     const CopyOfUserDetails = {
       ...initialSignUpState
     };
 
     const UpdatedUserDetails = {
       ...CopyOfUserDetails[inputIdentifier]
     };
   
   //  UpdatedUserDetails.value = event.target.value;
     CopyOfUserDetails[inputIdentifier] = UpdatedUserDetails;
    //  setState({userDetails:CopyOfUserDetails});
    }

    const Package = localStorage.getItem("Package");

    
      
      let form =(
       <GridContainer style={{background:"white",margin:"0"}}>
        <GridItem xs={12} sm={7} md={7}>
           <GridContainer>
             <GridItem xs={12} sm={12} md={12}>
               <div style={{
                 width:"95%",
                 padding:"14% 0 0 0%"
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
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <p 
                style={{
                 fontSize:"35px",
                 fontWeight:"700",
                 padding:"1% 0",
                 margin:"7% 0 0 0",
                 color:"rgb(133, 133, 224,.9)"
               }}
              >
                𝐒𝐢𝐠𝐧 𝐔𝐩 𝐇𝐞𝐫𝐞...
             </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <p 
                style={{
                  fontSize:"16px",
                  fontWeight:"650",
                  padding:"2%",
                  margin:"2% 2% 0 0 ",
                  color:"white",
                  background:"rgb(204, 153, 255)",
                }}
              >
              Selected Plan : {Package}
              </p>
            </GridItem>
         </GridContainer>
         <GridContainer style={{paddingBottom:"2%",padding:"6% 2% 0 0",}}>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
               elementType="inputWithIcon"
               placeholder="Name"
               type="text"
               id="name"
               OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
               IconName="PersonIcon"
               InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
              // InputDataChangeHandler={inputChangeHandler}
              // valid={initialLoginState.loginData.emailId.isValid}
              // finalValue={initialLoginState.subitted}
               validator={[VALIDATION_REQUIRED()]}
               />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
             <CustomInput
              elementType="inputWithIcon"
              placeholder="Email id"
              type="email"
              id="emailId"
              IconName="MailOutlineIcon"
              OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
              InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
             // InputDataChangeHandler={inputChangeHandler}
             // valid={initialLoginState.loginData.emailId.isValid}
             // finalValue={initialLoginState.subitted}
              validator={[VALIDATION_REQUIRED(),VALIDATION_EMAIL()]}
              /> 
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
             <CustomInput              
              id="SchoolName"
              elementType="inputWithIcon"
              type="text"
              placeholder="School name"
              IconName="SchoolIcon"
              OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
              InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
            //  InputDataChangeHandler={inputChangeHandler}
             // valid={initialLoginState.loginData.emailId.isValid}
             // finalValue={initialLoginState.subitted}
              validator={[VALIDATION_REQUIRED(),VALIDATION_EMAIL()]}
              /> 
            </GridItem>
            <GridItem xs={6} sm={4} md={4}>
             <CustomInput
              id="Standart"
              elementType="inputWithIcon"
              placeholder="Class"
              IconName="ClassIcon"
              OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
              InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
             // InputDataChangeHandler={inputChangeHandler}
             // valid={initialLoginState.loginData.emailId.isValid}
             // finalValue={initialLoginState.subitted}
              validator={[VALIDATION_REQUIRED()]}
              /> 
            </GridItem> 
            <GridItem xs={12} sm={6} md={4} style={{textAlign:"center"}}>
             <CustomInput
               elementType="inputWithIcon"
               placeholder="Gender"
               type="text"
               id="gender"
               OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
               IconName="WcIcon"
               InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
               //  InputDataChangeHandler={inputChangeHandler}
               // valid={initialLoginState.loginData.emailId.isValid}
               // finalValue={initialLoginState.subitted}
               validator={[VALIDATION_REQUIRED()]}
              /> 
           </GridItem>
           <GridItem xs={6} sm={6} md={4}>
             <CustomInput
               id="dateOfBirth"
               elementType="inputWithIcon"
               placeholder="Date of birth"
               type="text"
               IconName="DateRangeIcon"
               OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
               InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
               //  InputDataChangeHandler={inputChangeHandler}
               // valid={initialLoginState.loginData.emailId.isValid}
               // finalValue={initialLoginState.subitted}
               validator={[VALIDATION_REQUIRED(),VALIDATION_EMAIL()]}
             /> 
           </GridItem> 
           
            <GridItem xs={6} sm={6} md={6}>
             <CustomInput
             id="mobileNo"
             elementType="inputWithIcon"
             placeholder="Mobile number"
             type="number"
             IconName="CallIcon"
             OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
             InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
            // InputDataChangeHandler={inputChangeHandler}
            // valid={initialLoginState.loginData.emailId.isValid}
            // finalValue={initialLoginState.subitted}
             validator={[VALIDATION_REQUIRED()]}
              /> 
            </GridItem>
         
         <GridItem xs={6} sm={6} md={6}>
          <CustomInput
          id="district"
          elementType="inputWithIcon"
          placeholder="District"
          type="text"
          IconName="District"
          OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
          InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
        //  InputDataChangeHandler={inputChangeHandler}
         // valid={initialLoginState.loginData.emailId.isValid}
         // finalValue={initialLoginState.subitted}
          validator={[VALIDATION_REQUIRED()]}
           /> 
         </GridItem>
         <GridItem xs={6} sm={7} md={7}>
          <CustomInput
           id="state"
           elementType="inputWithIcon"
           placeholder="State"
           type="text"
           IconName="AddLocationIcon"
           OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
           InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
         //  InputDataChangeHandler={inputChangeHandler}
          // valid={initialLoginState.loginData.emailId.isValid}
          // finalValue={initialLoginState.subitted}
           validator={[VALIDATION_REQUIRED(),VALIDATION_EMAIL()]}
           /> 
         </GridItem>
         <GridItem xs={6} sm={5} md={5}>
          <CustomInput
           id="pinCode"
           elementType="inputWithIcon"
           type="number"
           placeholder="Pin code"
           IconName="FiberPinIcon"
           OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
           InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
         //  InputDataChangeHandler={inputChangeHandler}
          // valid={initialLoginState.loginData.emailId.isValid}
          // finalValue={initialLoginState.subitted}
           validator={[VALIDATION_REQUIRED()]}
           /> 
         </GridItem> 
         <GridItem xs={12} sm={12} md={6}>
           <CustomInput
               id="Password"
               elementType="inputWithIcon"
               placeholder="Enter password"
               id="password"
               IconName="LockOpenIcon"
               OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
               InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
             //  InputDataChangeHandler={inputChangeHandler}
              // valid={initialLoginState.loginData.emailId.isValid}
              // finalValue={initialLoginState.subitted}
               validator={[VALIDATION_REQUIRED(),VALIDATION_MINLENGTH(6)]}
            /> 
         </GridItem>
           <GridItem  xs={12} sm={12} md={6}>
             <CustomInput
              id="ConfirmPassword"
              elementType="inputWithIcon"
              placeholder="Confirm password"
              type="password"
              IconName="LockIcon"
              OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
              InputDataChangeHandler={(event) =>InputChangeHandler(event , "fatherName")}
              // InputDataChangeHandler={inputChangeHandler}
              // valid={initialLoginState.loginData.emailId.isValid}
              // finalValue={initialLoginState.subitted}
              validator={[VALIDATION_REQUIRED(),VALIDATION_MINLENGTH(6)]}
              /> 
           </GridItem>
         </GridContainer>
         <GridContainer>
         <GridItem 
             xs={12} sm={6} md={6}
             style={{marginTop:"4%"}}
           >
             <CustomButton 
             onClick = {(e)=>SubmitUserDetails(e)}
             style={{
               color:"white",
               fontWeight:"650",
               background:""
             }} 
             >
              Submit
             </CustomButton>
           </GridItem>
         </GridContainer>
       </GridItem>
       </GridContainer>
    )

  //background-coloe : #b366ffs
  let redirectToHomePage = null;
  if(isAuthenticated){
     redirectToHomePage = <Redirect to="/home" />
  }
  return (
    <div>
      <Header/>
      {form}
      {redirectToHomePage}
    </div>
  );
  }

  const mapDispatchToState = state => {
    return{
      userId :state.Auth.userId,
      isAuthenticated:state.Auth.token != null
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      signUpAuth: (emailId,MatchedPassword,isSignUp,userDetails ) => dispatch(actions.Auth(emailId,MatchedPassword,isSignUp,userDetails))
    }
 }


export default connect(mapDispatchToState,mapDispatchToProps)(SignUpComponent);