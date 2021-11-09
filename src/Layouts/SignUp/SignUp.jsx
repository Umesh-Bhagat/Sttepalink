import React,{Component} from 'react';
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import {Redirect} from 'react-router-dom';
import { VALIDATOR_REQUIRED } from '../../utilityFolder/validator.js';

import CustomInput from '../../ComponentsMaterialUi/CustomInput/CustomInput.jsx';
import CustomButton from "../../ComponentsMaterialUi/CustomButtons/Button.jsx";
import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../ComponentsMaterialUi/Grid/GridItem.jsx';
import Card from "../../ComponentsMaterialUi/Card/Card.jsx";
import CardBody from "../../ComponentsMaterialUi/Card/CardBody.jsx";
import SttepalinkLogo from "../../assets/images/studentsOnComputer.jpg";
import * as actions from "../../Store/actions/index";

const history = createBrowserHistory({forceRefresh: true});

class SignUpComponent extends Component{
  state={
    userDetails:{
      name:{
       elementType:'input',
       type:'text',
       placeholder:'Enter Name' ,
       value:""
      },
      emailId:{
       elementType:'input',
       type:'email',
       placeholder:'Enter e-mail Id',
       value:""
      },
      workAs:{
        elementType:'select',
        SelectPlaceholder:"",
        options:[
          { value:"Student", displayValue:"Student" },
          { value:"ClassTeacher", displayValue:"Class Teacher" },
          { value:"Principal", displayValue:"Principal" },
          { value:"Others", displayValue:"Others" }
        ],
        value:'Student'        
      },
      Standart:{
       elementType:'select',
       SelectPlaceholder:"",
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
       value:"Class 10" 
      },
      SchoolName:{
       elementType:'input',
       type:'text',
       placeholder:"Enter School's Name" ,
       value:""
      },
      mobileNo:{
       elementType:'input',
       type:'number',
       placeholder:'Enter Contact No.',
       value:''
      },
      dateOfBirth:{
       elementType:'input',
       type:'date',
       value:''
      },
      sex:{
       elementType:'select',
       SelectPlaceholder:"Gender",
       options:[
         { value:"Male", displayValue:"Male" },
         { value:"Female", displayValue:"Female" },
         {value:"Other",displayValue:"Others"}
        ],
        value:'Male'        
      },
      fatherName:{
       elementType:'input',
       type:'text',
       placeholder:"Enter Father's Name",
       value:''
      },
      currentAddress:{
       elementType:'input',
       type:'text',
       placeholder:'House Address',
       value:''
      },
      landMark:{
       elementType:'input',
       type:'text',
       placeholder:'Land Mark',
       value:''
      },
      postoffice:{
       elementType:'input',
       type:'text',
       placeholder:'Post Office',
       value:''
      },
      district:{
       elementType:'input',
       type:'text',
       placeholder:'District',
       value:''
      },
      pincode:{
       elementType:'input',
       type:'text',
       placeholder:'Pin Code No.',
       value:''
      },
      states:{
       elementType:'input',
       type:'text',
       placeholder:'State',
       value:''
      },
      Password:{
       elementType:'input',
       type:'password',
       placeholder:'Password',
       value:""
      },
      ConfirmPassword:{
       elementType:'input',
       type:'password',
       placeholder:'Re-Enter Password',
       value:""
      }
    },
    emailSuccess: false,
    emailError: false,
    statesSuccess: false,
    statesError: false,
    pincodeSuccess: false,
    pincodeError: false,
    districtSuccess: false,
    districtError: false,
    postofficeSuccess: false,
    postofficeError: false,
    landMarkSuccess: false,
    landMarkError: false,
    currentAddressSuccess: false,
    currentAddressError: false,
    fatherNameSuccess: false,
    fatherNameError: false,
    sexSuccess: false,
    sexError: false,
    dateOfBirthSuccess: false,
    dateOfBirthError: false,
    mobileNoSuccess: false,
    mobileNoError: false,
    SchoolNameSuccess: false,
    SchoolNameError: false,
    StandartSuccess: false,
    StandartError: false,
    passwordSuccess: false,
    passwordError: false,
    confirmPasswordSuccess: false,
    confirmPasswordError: false,
    workAsSuccess: false,
    workAsError: false,
    nameSuccess: false,
    nameError: false,
    toggleform:false,
    CurrentUsingPlan:'',
    VarifiedPasswords : '',
   // SelectedSubjectsForm:true
  }


  PasswordValidation = (Password1 , Password2) =>{
     if((Password1 === Password2)){
       return Password1;
     }else{
       return false;
     }
    
   }

  validateInputs(data){  
    console.log(data)
    if((data.name.value !== "" )&& (data.emailId.value !== "") && (data.workAs.value !== "" )&& (data.Standart.value !== "")&& (data.Password.value !== "")&& (data.ConfirmPassword.value !== "")&& (data.currentAddress.value !== "")&& (data.district.value !== "")&& (data.postoffice.value !== "")&& (data.fatherName.value !== "")&& (data.SchoolName.value !== "")&& (data.pincode.value !== "")&& (data.states.value !== "")&& (data.landMark.value !== "")&& (data.mobileNo.value !== "")&& (data.sex.value !== "")&& (data.dateOfBirth.value !== "")){
      console.log("working");
      this.setState({
        emailSuccess: true,
        emailError: false,
        statesSuccess: true,
        statesError: false,
        pincodeSuccess: true,
        pincodeError: false,
        districtSuccess: true,
        districtError: false,
        postofficeSuccess: true,
        postofficeError: false,
        landMarkSuccess: true,
        landMarkError: false,
        currentAddressSuccess: true,
        currentAddressError: false,
        fatherNameSuccess: true,
        fatherNameError: false,
        sexSuccess: true,
        sexError: false,
        dateOfBirthSuccess: true,
        dateOfBirthError: false,
        mobileNoSuccess: true,
        mobileNoError: false,
        SchoolNameSuccess: true,
        SchoolNameError: false,
        StandartSuccess: true,
        StandartError: false,
        passwordSuccess: true,
        passwordError: false,
        confirmPasswordSuccess: true,
        confirmPasswordError: false,
        workAsSuccess: true,
        workAsError: false,
        nameSuccess: true,
        nameError: false,
      })
      return true
    }else{
      if(data.emailId.value === ""){
        console.log("worging false");
        this.setState({
          emailSuccess: false,
          emailError: true
        })
      }else{
        this.setState({
          emailSuccess: true,
          emailError: false
        })
      }
      if(data.dateOfBirth.value === ""){
        this.setState({
          dateOfBirthSuccess: false,
          dateOfBirthError: true
        })
      }else{
        this.setState({
          dateOfBirthSuccess: true,
          dateOfBirthError: false
        })
      }
      if(data.sex.value === ""){
        this.setState({
          sexSuccess: false,
          sexError: true
        })
      }else{
        this.setState({
          sexSuccess: true,
          sexError: false
        })
      }
      if(data.mobileNo.value === ""){
        this.setState({
          mobileNoSuccess: false,
          mobileNoError: true
        })
      }else{
        this.setState({
          mobileNoSuccess: true,
          mobileNoError: false
        })
      }
      if(data.landMark.value === ""){
        this.setState({
          landMarkSuccess: false,
          landMarkError: true
        })
      }else{
        this.setState({
          landMarkSuccess: true,
          landMarkError: false
        })
      }
      if(data.states.value === ""){
        this.setState({
          statesSuccess: false,
          statesError: true
        })
      }else{
        this.setState({
          statesSuccess: true,
          statesError: false
        })
      }
      if(data.pincode.value === ""){
        this.setState({
          pincodeSuccess: false,
          pincodeError: true
        })
      }else{
        this.setState({
          pincodeSuccess: true,
          pincodeError: false
        })
      }
      if(data.SchoolName.value === ""){
        this.setState({
          SchoolNameSuccess: false,
          SchoolNameError: true
        })
      }else{
        this.setState({
          SchoolNameSuccess: true,
          SchoolNameError: false
        })
      }
      if(data.fatherName.value === ""){
        this.setState({
          fatherNameSuccess: false,
          fatherNameError: true
        })
      }else{
        this.setState({
          fatherNameSuccess: true,
          fatherNameError: false
        })
      }
      if(data.postoffice.value === ""){
        this.setState({
          postofficeSuccess: false,
          postofficeError: true
        })
      }else{
        this.setState({
          postofficeSuccess: true,
          postofficeError: false
        })
      }
      if(data.district.value === ""){
        this.setState({
          districtSuccess: false,
          districtError: true
        })
      }else{
        this.setState({
          districtSuccess: true,
          districtError: false
        })
      }
      if(data.currentAddress.value === ""){
        this.setState({
          currentAddressSuccess: false,
          currentAddressError: true
        })
      }else{
        this.setState({
          currentAddressSuccess: true,
          currentAddressError: false
        }) 
      }
      if(data.Password.value === ""){
        this.setState({
          passwordSuccess: false,
          passwordError: true
        })
      }else{
        this.setState({
          passwordSuccess: true,
          passwordError: false
        })
      }
      if(data.ConfirmPassword.value === ""){
        this.setState({
          confirmPasswordSuccess: false,
          confirmPasswordError: true
        })
      }else{
        this.setState({
          confirmPasswordSuccess: true,
          confirmPasswordError: false
        })
      }
      if(data.Standart.value === ""){
        this.setState({
          classSuccess: false,
          classError: true
        })
      }else{
        this.setState({
          classSuccess: true,
          classError: false
        })
      }
    if(data.workAs.value === ""){
      this.setState({
        workAsSuccess: false,
        workAsError: true
      })
    }else{
      this.setState({
        workAsSuccess: true,
        workAsError: false
      })
    }
      if(data.name.value === ""){
        this.setState({
          nameSuccess: false,
          nameError: true
        })
      }else{
        this.setState({
          nameSuccess: true,
          nameError: false
        })
      }
      console.log("some Input missing");
      return false
      
    }
  }


  SubmitData = (MatchedPassword) => {
    const userDetails = {
      PlanName: localStorage.getItem("Package"),
      name:this.state.userDetails.name.value,
      emailId:this.state.userDetails.emailId.value,
      workAs:this.state.userDetails.workAs.value,
      class:this.state.userDetails.Standart.value,
      SchoolName: this.state.userDetails.SchoolName.value,
      mobileNo: this.state.userDetails.mobileNo.value,
      dateOfBirth: this.state.userDetails.dateOfBirth.value,
      sex: this.state.userDetails.sex.value,
      fatherName: this.state.userDetails.fatherName.value,
      currentAddress: this.state.userDetails.currentAddress.value,
      landMark: this.state.userDetails.landMark.value,
      postoffice: this.state.userDetails.postoffice.value,
      district: this.state.userDetails.district.value,
      pincode: this.state.userDetails.pincode.value,
      states: this.state.userDetails.states.value
    }
    this.props.signUpAuth(userDetails.emailId,MatchedPassword,true,userDetails);   
  }


   SubmitUserDetails = (e ) => {
     e.preventDefault();
     let MatchedPassword = " ";
     let verified = this.validateInputs(this.state.userDetails);
     const password1 = this.state.userDetails.Password.value ;
     const password2 =  this.state.userDetails.ConfirmPassword.value;
   
     MatchedPassword = this.PasswordValidation(password1,password2);
       
     if(MatchedPassword && verified){
       console.log(MatchedPassword)
    //   this.setState({VarifiedPasswords:MatchedPassword});
    //   this.setState({SelectedSubjectsForm:!this.state.SelectedSubjectsForm});
       this.SubmitData(MatchedPassword);
      }else{
       console.log("some Inputs are empty");
      }
  
    };
   
   InputChangeHandler = (event, inputIdentifier ) =>{
     console.log(inputIdentifier);
     switch (inputIdentifier) {
       case ('name'): this.setState({nameError:false, nameSuccess:true})
       break;
   
       case ('emailId'): this.setState({emailError:false, emailSuccess:true})
       break;
       case ('workAs'): this.setState({workAsError:false, workAsSuccess:true})
       break;
       case ('SchoolName'): this.setState({SchoolNameError:false, SchoolNameSuccess:true})
       break;
       case ('mobileNo'): this.setState({mobileNoError:false, mobileNoSuccess:true})
       break;
       case ('dateOfBirth'): this.setState({dateOfBirthError:false, dateOfBirthSuccess:true})
       break;
       case ('sex'): this.setState({sexError:false, sexSuccess:true})
       break;
       case ('fatherName'): this.setState({fatherNameError:false, fatherNameSuccess:true})
       break;
       case ('currentAddress'): this.setState({currentAddressError:false, currentAddressSuccess:true})
       break;
       case ('landMark'): this.setState({landMarkError:false, landMarkSuccess:true})
       break;
       case ('postoffice'): this.setState({postofficeError:false, postofficeSuccess:true})
       break;
       case ('district'): this.setState({districtError:false, districtSuccess:true})
       break;
       case ('pincode'): this.setState({pincodeError:false, pincodeSuccess:true})
       break;
       case ('states'): this.setState({emailError:false, emailSuccess:true})
       break;
       case ('Password'): this.setState({passwordError:false, passwordSuccess:true})
       break;
       case ('ConfirmPassword'): this.setState({confirmPasswordError:false, confirmPasswordSuccess:true})
       break;   
      }
    
     const CopyOfUserDetails = {
       ...this.state.userDetails
     };
 
     const UpdatedUserDetails = {
       ...CopyOfUserDetails[inputIdentifier]
     };
   
     UpdatedUserDetails.value = event.target.value;
     CopyOfUserDetails[inputIdentifier] = UpdatedUserDetails;
     this.setState({userDetails:CopyOfUserDetails});
    }


   render(){
    const Package = localStorage.getItem("Package");
      const formElementArray = [];
      for(let key in this.state.userDetails){
        formElementArray.push({
         Id: key,
         config: this.state.userDetails[key]
        });
      }
  
      
      let form =(
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
            <GridItem xs={3} sm={3} md={3} >
              <p 
                style={{
                  fontSize:"17px",
                  fontWeight:"650",
                  paddingTop:"25%"
                }}
              >
                Plan Details :
              </p>
            </GridItem>
           <GridItem xs={9} sm={9} md={9}>
           <CustomInput
               id="plan"
               formControlProps={{
                 fullWidth: true,
               }}
               style={{background:"none"}}
               elementType="input"
               value={Package}
               inputProps={{
                 autoComplete:"off",
                 readOnly: true,
                 type:"text",
               }}
              /> 
           </GridItem>
          </GridContainer> 
          <GridContainer  style={{paddingBottom:".5%"}}>
            <GridItem xs={12} sm={10} md={10}>
              {/* <input 
              style={{
                padding:"4% 2% 1% 2%",
                border:"1px solid gray",
                width:'100%',
                fontSize:"18px",
                border
              }}
              placeholder="Name"
              /> */}
               <CustomInput
                success={this.state.nameSuccess}
                error={this.state.nameError}
                formControlProps={{
                  fullWidth: true,
                }}
                validators={[VALIDATOR_REQUIRED()]}
                style={{borderRadius:".4em",border:"none"}}
                id="name"
                labelText={this.state.userDetails.name.placeholder}
                elementType={this.state.userDetails.name.elementType}
                value={this.state.userDetails.name.value}
                handleChange={(event) =>this.InputChangeHandler(event , "name")}
                inputProps={{
                  autoComplete:"off",
                  readOnly: false,
                  type:this.state.userDetails.name.type,
                }}
               />
            </GridItem>
            <GridItem xs={12} sm={10} md={10}>
             <CustomInput
               success={this.state.emailSuccess}
               error={this.state.emailError}
               formControlProps={{
                 fullWidth: true,
               }}
               id="emailId"
               labelText={this.state.userDetails.emailId.placeholder}
               elementType={this.state.userDetails.emailId.elementType}
               value={this.state.userDetails.emailId.value}
               handleChange={(event) =>this.InputChangeHandler(event , "emailId")}
               inputProps={{
                 autoComplete:"off",
                 readOnly: false,
                 type:this.state.userDetails.emailId.type,
               }}
              /> 
            </GridItem>
          </GridContainer>
          <GridContainer style={{paddingBottom:".5%"}}>
          {/* <GridItem xs={6} sm={7} md={7}>
          <CustomInput
            success={this.state.fatherNameSuccess}
            error={this.state.fatherNameError}
            id="fatherName"
            formControlProps={{
              fullWidth: true,
            }}
            labelText={this.state.userDetails.fatherName.placeholder}
            elementType={this.state.userDetails.fatherName.elementType}
            value={this.state.userDetails.fatherName.value}
            handleChange={(event) =>this.InputChangeHandler(event , "fatherName")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.fatherName.type,
            }}
           /> 
         </GridItem>   */}
         {/* <GridItem xs={6} sm={6} md={6} style={{textAlign:"center"}}>
          <CustomInput
            success={this.state.sexSuccess}
            error={this.state.sexError}
            id="sex"
            formControlProps={{
              fullWidth: true,
            }}
            elementType={this.state.userDetails.sex.elementType}
            value={this.state.userDetails.sex.value}
            menuOptions={this.state.userDetails.sex.options}
            handleChange={(event) =>this.InputChangeHandler(event , "sex")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.sex.type,
            }}
           /> 
         </GridItem> */}
       </GridContainer>
       <GridContainer style={{paddingBottom:".5%"}}>
          {/* <GridItem xs={6} sm={6} md={6}>
          <CustomInput
            success={this.state.dateOfBirthSuccess}
            error={this.state.dateOfBirthError}
            id="dateOfBirth"
            formControlProps={{
              fullWidth: true,
            }}
            labelText={this.state.userDetails.dateOfBirth.placeholder}
            elementType={this.state.userDetails.dateOfBirth.elementType}
            value={this.state.userDetails.dateOfBirth.value}
            handleChange={(event) =>this.InputChangeHandler(event , "dateOfBirth")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.dateOfBirth.type,
            }}
           /> 
         </GridItem> */}
            {/* <GridItem xs={6} sm={6} md={6}>
             <CustomInput
               id="workAs"
               formControlProps={{
                 fullWidth: true,
               }}
               elementType={this.state.userDetails.workAs.elementType}
               selectPlaceholder={this.state.userDetails.workAs.SelectPlaceholder}
               menuOptions={this.state.userDetails.workAs.options}
               value={this.state.userDetails.workAs.value}
               handleChange={(event) =>this.InputChangeHandler(event , "workAs")}
               inputProps={{
                 autoComplete:"off",
                 readOnly: false,
                 type:this.state.userDetails.workAs.type,
               }}
              /> 
            </GridItem> */}
            <GridItem xs={6} sm={5} md={5}>
             <CustomInput
               id="Standart"
               formControlProps={{
                 fullWidth: true,
               }}
               elementType={this.state.userDetails.Standart.elementType}
               menuOptions={this.state.userDetails.Standart.options}
               value={this.state.userDetails.Standart.value}
               handleChange={(event) =>this.InputChangeHandler(event , "Standart")}
               inputProps={{
                 autoComplete:"off",
                 readOnly: false,
                 type:this.state.userDetails.Standart.type,
               }}
              /> 
            </GridItem> 
            <GridItem xs={6} sm={5} md={5}>
             <CustomInput
              success={this.state.mobileNoSuccess}
              error={this.state.mobileNoError}
               id="mobileNo"
               formControlProps={{
                 fullWidth: true,
               }}
               labelText={this.state.userDetails.mobileNo.placeholder}
               elementType={this.state.userDetails.mobileNo.elementType}
               value={this.state.userDetails.mobileNo.value}
               handleChange={(event) =>this.InputChangeHandler(event , "mobileNo")}
               inputProps={{
                 autoComplete:"off",
                 readOnly: false,
                 type:this.state.userDetails.mobileNo.type,
               }}
              /> 
            </GridItem>
          </GridContainer>
           <GridContainer style={{paddingBottom:".5%"}}>
           {/* <GridItem xs={12} sm={12} md={12}>
             <CustomInput
               success={this.state.SchoolNameSuccess}
               error={this.state.SchoolNameError}                     
               id="SchoolName"
               formControlProps={{
                 fullWidth: true,
               }}
               labelText={this.state.userDetails.SchoolName.placeholder}
               elementType={this.state.userDetails.SchoolName.elementType}
               value={this.state.userDetails.SchoolName.value}
               handleChange={(event) =>this.InputChangeHandler(event , "SchoolName")}
               inputProps={{
                 autoComplete:"off",
                 readOnly: false,
                 type:this.state.userDetails.SchoolName.type,
               }}
              /> 
            </GridItem> */}
           
         </GridContainer>
         {/* <GridContainer>
           <GridItem>
             <p style={{
                 textDecoration:"underline",
                 fontSize:"18px",
                 fontWeight:"650",
                 paddingTop:"15%"
                }}
              >
                Current Address:
             </p>
           </GridItem>
         </GridContainer> */}
         {/* <GridContainer >
         <GridItem xs={6} sm={4} md={7}>
          <CustomInput
            success={this.state.currentAddressSuccess}
            error={this.state.currentAddressError}
            id="currentAddress"
            formControlProps={{
              fullWidth: true,
            }}
            labelText={this.state.userDetails.currentAddress.placeholder}
            elementType={this.state.userDetails.currentAddress.elementType}
            value={this.state.userDetails.currentAddress.value}
            handleChange={(event) =>this.InputChangeHandler(event , "currentAddress")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.currentAddress.type,
            }}
           /> 
         </GridItem>
         <GridItem xs={6} sm={4} md={5}>
          <CustomInput
            success={this.state.landMarkSuccess}
            error={this.state.landMarkError}
            id="landMark"
            formControlProps={{
              fullWidth: true,
            }}
            labelText={this.state.userDetails.landMark.placeholder}
            elementType={this.state.userDetails.landMark.elementType}
            value={this.state.userDetails.landMark.value}
            handleChange={(event) =>this.InputChangeHandler(event , "landMark")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.landMark.type,
            }}
           /> 
         </GridItem>
       </GridContainer>
       <GridContainer>   
         <GridItem xs={6} sm={4} md={4}>
          <CustomInput
            success={this.state.postofficeSuccess}
            error={this.state.postofficeError}
            id="postoffice"
            formControlProps={{
              fullWidth: true,
            }}
            labelText={this.state.userDetails.postoffice.placeholder}
            elementType={this.state.userDetails.postoffice.elementType}
            value={this.state.userDetails.postoffice.value}
            handleChange={(event) =>this.InputChangeHandler(event , "postoffice")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.postoffice.type,
            }}
           /> 
         </GridItem> 
         <GridItem xs={6} sm={4} md={4}>
          <CustomInput
            success={this.state.districtSuccess}
            error={this.state.districtError}
            id="district"
            formControlProps={{
              fullWidth: true,
            }}
            labelText={this.state.userDetails.district.placeholder}
            elementType={this.state.userDetails.district.elementType}
            value={this.state.userDetails.district.value}
            handleChange={(event) =>this.InputChangeHandler(event , "district")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.district.type,
            }}
           /> 
         </GridItem>
         <GridItem xs={6} sm={4} md={4}>
          <CustomInput
            success={this.state.statesSuccess}
            error={this.state.statesError}
            id="states"
            formControlProps={{
              fullWidth: true,
            }}
            labelText={this.state.userDetails.states.placeholder}
            elementType={this.state.userDetails.states.elementType}
            value={this.state.userDetails.states.value}
            handleChange={(event) =>this.InputChangeHandler(event , "states")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.states.type,
            }}
           /> 
         </GridItem>
         <GridItem xs={6} sm={4} md={4}>
          <CustomInput
            success={this.state.pincodeSuccess}
            error={this.state.pincodeError}
            id="pincode"
            formControlProps={{
              fullWidth: true,
            }}
            labelText={this.state.userDetails.pincode.placeholder}
            elementType={this.state.userDetails.pincode.elementType}
            value={this.state.userDetails.pincode.value}
            handleChange={(event) =>this.InputChangeHandler(event , "pincode")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.pincode.type,
            }}
           /> 
         </GridItem>
       </GridContainer> */}
       <GridContainer style={{paddingTop:"5%"}} >   
         <GridItem xs={12} sm={12} md={4}>
           <CustomInput
             success={this.state.passwordSuccess}
             error={this.state.passwordError}
             labelText={this.state.userDetails.Password.placeholder}
             id="Password"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={this.state.userDetails.Password.elementType}
             selectPlaceholder={this.state.userDetails.Password.SelectPlaceholder}
             value={this.state.userDetails.Password.value}
             handleChange={(event) =>this.InputChangeHandler(event , "Password")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:this.state.userDetails.Password.type,
             }}
            /> 
         </GridItem>
           <GridItem  xs={12} sm={12} md={4}>
             <CustomInput
               success={this.state.confirmPasswordSuccess}
               error={this.state.confirmPasswordError}
               labelText={this.state.userDetails.ConfirmPassword.placeholder}
               id="ConfirmPassword"
               formControlProps={{
                 fullWidth: true,
               }}
               elementType={this.state.userDetails.ConfirmPassword.elementType}
               selectPlaceholder={this.state.userDetails.ConfirmPassword.SelectPlaceholder}
               value={this.state.userDetails.ConfirmPassword.value}
               handleChange={(event) =>this.InputChangeHandler(event , "ConfirmPassword")}
               inputProps={{
                 autoComplete:"off",
                 readOnly: false,
                 type:this.state.userDetails.ConfirmPassword.type,
               }}
              /> 
           </GridItem>
           <GridItem 
             style={{paddingTop:"3%"}}
             xs={12} sm={4} md={4} >
             <CustomButton 
             onClick = {(e)=>this.SubmitUserDetails(e)} 
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
  if(this.props.isAuthenticated){
    redirectToHomePage = <Redirect to="/home" />
  }
  return (
    <div>
      {form}
      {redirectToHomePage}
    </div>
  );

    }
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