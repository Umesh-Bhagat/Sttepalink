import React,{ useReducer , useCallback} from 'react';
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
 switch(action.type){
    case "INPUT-VALIDATION" :
    let forIsValid = true;
    for(let inputId in state.userDetails){
      if(inputId === action.id){
        forIsValid = forIsValid && action.isValid;
      }else{
        forIsValid = forIsValid && state.userDetails[inputId].isValid;
      }
    }  

    return{
      ...state,
      userDetails:{
        ...state.userDetails,
        [action.id] :{
          value:action.value,
          isValid:action.isValid
        } 
      },
      isValid:forIsValid  
    }

    case "DATA-SUBMITTED":
      return{
        ...state,
        submitted:action.submitted
      }
 }
}

const SignUpComponent = (props)=>{

  const {isAuthenticated} = props

  const [initialSignUpState , dispatch] = useReducer(
    SignUpPageReducer , {
      userDetails:{
      name:{
       value:"",
       isValid:false
      },
      email:{
       value:"",
       isValid:false
      },
      standart:{
       value:"Class 10" ,
       isvalid:false
      },
      school:{
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
      gender:{
        value:'Male',
        isValid:false      
      },
      district:{
       value:'',
       isValid:false
      },
      state:{
       value:'',
       isValid:false
      },
      password:{
       value:"",
       isValid:false
      },
      confirmPassword:{
       value:"",
       isValid:false
      }
    },
    standardOptions:{
      options:[
        { 
          value:"",
          displayValue:"select"
       },
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
    },
    genderOption:{
      options:[
        { value:"",displayValue:"select" },
        { value:"Male", displayValue:"Male" },
        { value:"Female", displayValue:"Female" },
        {value:"Other",displayValue:"Others"}
       ],
    },
    isValid:false,
    toggleform:false,
    currentUsingPlan:'',
    submitted:false,
    varifiedPasswords : ''
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
      name:initialSignUpState.userDetails.name.value,
      emailId:initialSignUpState.userDetails.email.value,
      class:initialSignUpState.userDetails.standart.value,
      SchoolName: initialSignUpState.userDetails.school.value,
      mobileNo: initialSignUpState.userDetails.mobileNo.value,
      dateOfBirth: initialSignUpState.userDetails.dateOfBirth.value,
      sex: initialSignUpState.userDetails.gender.value,
      district: initialSignUpState.userDetails.district.value,
      states: initialSignUpState.userDetails.state.value
    }
    props.signUpAuth(userDetails.emailId,MatchedPassword,true,userDetails);   
  }

  const SubmitUserDetails = (e ) => {
   e.preventDefault();

   dispatch({
     type:"DATA-SUBMITTED",
     submitted:true
    });

   let MatchedPassword = " ";
   const password1 = initialSignUpState.userDetails.password.value ;
   const password2 =  initialSignUpState.userDetails.confirmPassword.value;
   
   MatchedPassword = PasswordValidation(password1,password2);
       
   if(MatchedPassword && initialSignUpState.isValid){
     console.log(MatchedPassword)
     SubmitData(MatchedPassword);
    }else{
     console.log("some Inputs are empty");
    }
  };
   
  const InputChangeHandler = useCallback((id,value,isValid) =>{
     dispatch({
       type: "INPUT-VALIDATION",
       id:id,
       value:value,
       isValid:isValid
      });
    },[]);

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
                 color:"rgb(102, 140, 255)"
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
                  background:"rgb(102, 140, 255)",
                }}
              >
              Selected Plan : {Package}
              </p>
            </GridItem>
         </GridContainer>
         <GridContainer style={{paddingBottom:"2%",padding:"4% 2% 0 0",}}>
            <GridItem xs={12} sm={6} md={6}>
             <CustomInput
              elementType="inputWithIcon"
              placeholder="EMAIL"
              type="email"
              id="email"
              IconName="MailOutlineIcon"
              OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
              InputDataChangeHandler={InputChangeHandler}
              valid={initialSignUpState.userDetails.email.isValid}
              finalValue={initialSignUpState.submitted}
              validator={[VALIDATION_REQUIRED(),VALIDATION_EMAIL()]}
              /> 
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
               elementType="inputWithIcon"
               placeholder="NAME"
               type="text"
               id="name"
               OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
               IconName="PersonIcon"
               InputDataChangeHandler={InputChangeHandler}
               valid={initialSignUpState.userDetails.name.isValid}
               finalValue={initialSignUpState.submitted}
               validator={[VALIDATION_REQUIRED()]}
               />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
             <CustomInput              
              id="school"
              elementType="inputWithIcon"
              type="text"
              placeholder="SCHOOL NAME"
              IconName="SchoolIcon"
              OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
              InputDataChangeHandler={InputChangeHandler}
              valid={initialSignUpState.userDetails.school.isValid}
              finalValue={initialSignUpState.submitted}
              validator={[VALIDATION_REQUIRED()]}
              /> 
            </GridItem>
            <GridItem xs={6} sm={4} md={7}>
             <CustomInput
              id="standart"
              elementType="inputWithIcon"
              type="select"
              menuOptions={initialSignUpState.standardOptions.options}
              placeholder="CLASS"
              IconName="ClassIcon"
              assigedValue={initialSignUpState.userDetails.standart.value}
              OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
              InputDataChangeHandler={InputChangeHandler}
              valid={initialSignUpState.userDetails.standart.isValid}
              finalValue={initialSignUpState.submitted}
              validator={[VALIDATION_REQUIRED()]}
              /> 
            </GridItem>
            <GridItem xs={6} sm={6} md={5}>
             <CustomInput
             id="mobileNo"
             elementType="inputWithIcon"
             placeholder="MOBILE NUMBER"
             type="number"
             IconName="CallIcon"
             OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
             InputDataChangeHandler={InputChangeHandler}
             valid={initialSignUpState.userDetails.mobileNo.isValid}
             finalValue={initialSignUpState.submitted}
             validator={[VALIDATION_REQUIRED()]}
              /> 
            </GridItem>
            <GridItem xs={12} sm={6} md={6} style={{textAlign:"center"}}>
             <CustomInput
               elementType="inputWithIcon"
               placeholder="GENDER"
               type="select"
               id="gender"
               menuOptions={initialSignUpState.genderOption.options}
               assigedValue={initialSignUpState.userDetails.gender.value}
               OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
               IconName="WcIcon"
               InputDataChangeHandler={InputChangeHandler}
               valid={initialSignUpState.userDetails.gender.isValid}
               finalValue={initialSignUpState.submitted}
               validator={[VALIDATION_REQUIRED()]}
              /> 
           </GridItem>
           <GridItem xs={6} sm={6} md={6}>
             <CustomInput
               id="dateOfBirth"
               elementType="inputWithIcon"
               placeholder="DOB"
               type="date"
               IconName="DateRangeIcon"
               OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
               InputDataChangeHandler={InputChangeHandler}
               valid={initialSignUpState.userDetails.dateOfBirth.isValid}
               finalValue={initialSignUpState.submitted}
               validator={[VALIDATION_REQUIRED()]}
             /> 
           </GridItem> 
           
           
         
         <GridItem xs={6} sm={6} md={6}>
          <CustomInput
          id="district"
          elementType="inputWithIcon"
          placeholder="DISTRICT"
          type="text"
          IconName="District"
          OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
          InputDataChangeHandler={InputChangeHandler}
          valid={initialSignUpState.userDetails.district.isValid}
          finalValue={initialSignUpState.submitted}
          validator={[VALIDATION_REQUIRED()]}
           /> 
         </GridItem>
         <GridItem xs={6} sm={7} md={6}>
          <CustomInput
           id="state"
           elementType="inputWithIcon"
           placeholder="STATE"
           type="text"
           IconName="AddLocationIcon"
           OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
           InputDataChangeHandler={InputChangeHandler}
           valid={initialSignUpState.userDetails.state.isValid}
           finalValue={initialSignUpState.submitted}
           validator={[VALIDATION_REQUIRED()]}
           /> 
         </GridItem>
         </GridContainer>
         <GridContainer style={{marginTop:"1%"}}>
         <GridItem xs={12} sm={12} md={6}>
           <CustomInput
              VisibleIconName="VisibilityIcon"
              NotVisibleIconName="VisibilityOffIcon"
              type="password"
              elementType="inputWithIcon"
              placeholder="ENTER PASSWORD"
              id="password"
              IconName="LockOpenIcon"
              OuterInputStyle={{marginBottom:"5px",border:"1px solid rgb(133, 133, 224,.6)",background:"rgb(242, 242, 242)"}}
              InputDataChangeHandler={InputChangeHandler}
              valid={initialSignUpState.userDetails.password.isValid}
              finalValue={initialSignUpState.submitted}
              validator={[VALIDATION_REQUIRED(),VALIDATION_MINLENGTH(6)]}
            /> 
         </GridItem>
           <GridItem  xs={12} sm={12} md={6}>
             <CustomInput
              id="confirmPassword"
              elementType="inputWithIcon"
              placeholder="CONFIRM PASSWORD"
              type="password"
              IconName="LockIcon"
              VisibleIconName="VisibilityIcon"
              NotVisibleIconName="VisibilityOffIcon"
              InputDataChangeHandler={InputChangeHandler}
              valid={initialSignUpState.userDetails.confirmPassword.isValid}
              finalValue={initialSignUpState.submitted}
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
                }} 
              >
              Submit
             </CustomButton>
           </GridItem>
         </GridContainer>
       </GridItem>
       </GridContainer>
    )

  let redirectToHomePage = null;
  if(isAuthenticated){
     redirectToHomePage = <Redirect to="/dashboard" />
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
    console.log(state.Auth.token)
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