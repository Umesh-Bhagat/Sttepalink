import React, { useState }  from 'react';
import { createBrowserHistory } from "history";
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

import * as action from "../../../Store/actions/index";
import Card from '../../../ComponentsMaterialUi/Card/Card.jsx';
import CardHeader from '../../../ComponentsMaterialUi/Card/CardHeader.jsx';
import CardBody from '../../../ComponentsMaterialUi/Card/CardBody.jsx';
import CardFooter from "../../../ComponentsMaterialUi/Card/CardFooter.jsx";
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../../ComponentsMaterialUi/Grid/GridItem.jsx';
import Button from '../../../ComponentsMaterialUi/CustomButtons/Button.jsx';
import CustomInput from '../../../ComponentsMaterialUi/CustomInput/CustomInput.jsx';
import userUpdateProfile from "../../../assets/jss/material-dashboard-react/components/ProfileStyle.jsx";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../../hoc/Axious/Axious";
const history = createBrowserHistory({forceRefresh: true});

const UpdateStudentDetails = ( props )=>{
 
  const [initialState , setInitialState] = useState({ 
   userDetails:{
      name:{
        elementType:'input',
        type:'text',
        placeholder:'Enter Your Full Name', 
        value:props.UserProfileId.userData.name
      },
      emailId:{
       elementType:'input',
       type:'email',
       placeholder:'Enter Your e-mail Id',
       value:props.UserProfileId.userData.emailId
      },
      workAs:{
        elementType:'select',
        options:[
         { value:"Student", displayValue:"Student" },
         { value:"ClassTeacher", displayValue:"Class Teacher" },
         { value:"Principal", displayValue:"Principal" },
         { value:"Others", displayValue:"Others" }
        ],
        value:props.UserProfileId.userData.workAs        
      },
      class:{
       elementType:'input',
       type:'text',
       placeholder:'Class (if not a principal)',
       value:props.UserProfileId.userData.class
      },
      SchoolName:{
       elementType:'input',
       type:'text',
       placeholder:"Enter your School's Name",
       value:props.UserProfileId.userData.SchoolName
      },
      Password:{
        elementType:'input',
        type:'password',
        placeholder:"Enter your Password First",
        value:""
       },
      mobileNo:{
       elementType:'input',
       type:'number',
       placeholder:'Enter Your Contact Number',
       value:props.UserProfileId.userData.mobileNo
      },
      dateOfBirth:{
       elementType:'input',
       type:'date',
       placeholder:'Enter Your Death Of Birth',
       value:props.UserProfileId.userData.dateOfBirth
      },
      sex:{
        elementType:'select',
        options:[
          { value:"Male", displayValue:"Male" },
          { value:"Female", displayValue:"Female" },
          {value:"Other",displayValue:"Others"}
        ],
        value:props.UserProfileId.userData.sex
      },
      fatherName:{
        elementType:'input',
        type:'text',
        placeholder:"Enter Your Father's Name",
        value:props.UserProfileId.userData.fatherName
      },
      currentAddress:{
        elementType:'input',
        type:'text',
        placeholder:'Enter Your Current Address',
        value:props.UserProfileId.userData.currentAddress
      },
      landMark:{
        elementType:'input',
        type:'text',
        placeholder:'Enter Your Near By Land Mark',
        value:props.UserProfileId.userData.landMark
      },
      postoffice:{
        elementType:'input',
        type:'text',
        placeholder:'Post Office',
        value:props.UserProfileId.userData.postoffice
      },
      district:{
        elementType:'input',
        type:'text',
        placeholder:'District',
        value:props.UserProfileId.userData.district
      },
      pincode:{
        elementType:'input',
        type:'text',
        placeholder:'Pincode',
        value:props.UserProfileId.userData.pincode
      },
      states:{
        elementType:'input',
        type:'text',
        placeholder:'State' ,
        value:props.UserProfileId.userData.states
      }  
    },
    passwordSuccess:false,
    passwordError:false,
    emailIdSuccess:false,
    emailIdError:false,
    SchoolNameSuccess:false,
    SchoolNameError:false,
    mobileNoSuccess:false,
    mobileNoError:false,
    currentAddressSuccess:false,
    currentAddressError:false,
    landMarkSuccess:false,
    landMarkError:false,
    postofficeSuccess:false,
    postofficeError:false,
    districtSuccess:false,
    districtError:false,
    pincodeSuccess:false,
    pincodeError:false,
    statesSuccess:false,
    statesError:false,
  });

 const UpdatedInputChangehandler = (event , inputIdentifier ) =>{

    const CopyOfUserDetails = {
      ...initialState.userDetails
    } 
    
    const UpdatedUserDetails = {
      ...CopyOfUserDetails[inputIdentifier]
    };
    console.log(CopyOfUserDetails);
    console.log(inputIdentifier)
    console.log(CopyOfUserDetails[inputIdentifier])
    UpdatedUserDetails.value = event.target.value;
    console.log(UpdatedUserDetails.value);
    CopyOfUserDetails[inputIdentifier] = UpdatedUserDetails;
    console.log(CopyOfUserDetails);
     setInitialState({userDetails:CopyOfUserDetails});
     console.log(initialState)
   }
     
 const SubmitUpdatedUserDetails = ( ) => {
   const Plan =props.UserProfileId.userData.PlanName;
   const updatedUserDetails = {
     PlanName:Plan,
     name:initialState.userDetails.name.value,
     emailId:initialState.userDetails.emailId.value,
     workAs:initialState.userDetails.workAs.value,
     class:initialState.userDetails.class.value,
     SchoolName:initialState.userDetails.SchoolName.value,
     mobileNo:initialState.userDetails.mobileNo.value,
     dateOfBirth:initialState.userDetails.dateOfBirth.value,
     sex:initialState.userDetails.sex.value,
     fatherName:initialState.userDetails.fatherName.value,
     currentAddress:initialState.userDetails.currentAddress.value,
     landMark:initialState.userDetails.landMark.value,
     postoffice:initialState.userDetails.postoffice.value,
     district:initialState.userDetails.district.value,
     pincode:initialState.userDetails.pincode.value,
     states:initialState.userDetails.states.value,
   }
    props.SendUpdatedData(updatedUserDetails,props.UserProfileId.id,props.tokenId,props.userId);
    props.BlackDrop();  
  };

    let form =(
      <Card style={{width:"100%" , margin:"0%",borderRadius:".8em .8em .5em .5em"}}>
        <CardHeader 
         style={{fontSize:"20px",
         paddingTop:"7%",
         fontWeight:"650",
         color:"#f7f7f7",
         borderRadius:".5em .5em 0 0",
         backgroundColor:"#b4becf"}}
         >
         Update Your Profile
        </CardHeader>
        <CardBody> 
          <GridContainer
           style={{
             height: '205px',
             backgroundColor: "rgb(253, 252, 252)",
             borderRadius: "1.5em 1.5em 1em 1em",
             overflow: 'auto',
            }}  
          >
         <GridItem xs={12} sm={12} md={12}>
           <CustomInput
             success={initialState.passwordSuccess}
             error={initialState.passwordError}
             labelText={initialState.userDetails.Password.placeholder}
             id="Password"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={initialState.userDetails.Password.elementType}
             selectPlaceholder={initialState.userDetails.Password.SelectPlaceholder}
             value={initialState.userDetails.Password.value}
             handleChange={(event)=>UpdatedInputChangehandler(event,"Password")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:initialState.userDetails.Password.type,
             }}
            /> 
         </GridItem>
         <GridItem xs={12} sm={12} md={12}>
           <CustomInput
             success={initialState.SchoolNameSuccess}
             error={initialState.SchoolNameError}
             labelText={initialState.userDetails.SchoolName.placeholder}
             formControlProps={{
               fullWidth: true,
             }}
             id="SchoolName"
             elementType={initialState.userDetails.SchoolName.elementType}
             value={initialState.userDetails.SchoolName.value}
             handleChange={(event)=>UpdatedInputChangehandler(event,"SchoolName")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:initialState.userDetails.SchoolName.type,
             }}
            /> 
         </GridItem>
         <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            labelText={initialState.userDetails.sex.placeholder}
            id="sex"
            formControlProps={{
              fullWidth: true,
            }}
            elementType={initialState.userDetails.sex.elementType}
            selectPlaceholder={initialState.userDetails.sex.SelectPlaceholder}
            menuOptions={initialState.userDetails.sex.options}
            value={initialState.userDetails.sex.value}
            handleChange={(event)=>UpdatedInputChangehandler(event,"sex")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:initialState.userDetails.sex.type,
            }}
           /> 
         </GridItem>
         <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            success={initialState.mobileNoSuccess}
            error={initialState.mobileNoError}
            labelText={initialState.userDetails.mobileNo.placeholder}
            id="mobileNo"
            formControlProps={{
              fullWidth: true,
            }}
            elementType={initialState.userDetails.mobileNo.elementType}
            selectPlaceholder={initialState.userDetails.mobileNo.SelectPlaceholder}
            value={initialState.userDetails.mobileNo.value}
            handleChange={(event)=>UpdatedInputChangehandler(event,"mobileNo")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:initialState.userDetails.mobileNo.type,
            }}
           /> 
         </GridItem>              
         <GridItem  xs={12} sm={12} md={12}>
          <CustomInput
            success={initialState.currentAddressSuccess}
            error={initialState.currentAddressError}
            labelText={initialState.userDetails.currentAddress.placeholder}
            id="currentAddress"
            formControlProps={{
              fullWidth: true,
            }}
            elementType={initialState.userDetails.currentAddress.elementType}
            selectPlaceholder={initialState.userDetails.currentAddress.SelectPlaceholder}
            value={initialState.userDetails.currentAddress.value}
            handleChange={(event)=>UpdatedInputChangehandler(event, "currentAddress")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:initialState.userDetails.currentAddress.type,
            }}
           /> 
         </GridItem>
         <GridItem  xs={12} sm={12} md={12}>
           <CustomInput
             success={initialState.landMarkSuccess}
             error={initialState.landMarkError}
             labelText={initialState.userDetails.landMark.placeholder}
             id="landMark"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={initialState.userDetails.landMark.elementType}
             selectPlaceholder={initialState.userDetails.landMark.SelectPlaceholder}
             value={initialState.userDetails.landMark.value}
             handleChange={(event)=>UpdatedInputChangehandler(event,"landMark")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:initialState.userDetails.landMark.type,
             }}
           /> 
         </GridItem>
         <GridItem  xs={12} sm={12} md={12}>
           <CustomInput
             success={initialState.postofficeSuccess}
             error={initialState.postofficeError}
             labelText={initialState.userDetails.postoffice.placeholder}
             id="postoffice"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={initialState.userDetails.postoffice.elementType}
             selectPlaceholder={initialState.userDetails.postoffice.SelectPlaceholder}
             value={initialState.userDetails.postoffice.value}
             handleChange={(event)=>UpdatedInputChangehandler(event,"postoffice")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:initialState.userDetails.postoffice.type,
             }}
           /> 
         </GridItem>
         <GridItem  xs={12} sm={12} md={12}>
           <CustomInput
             success={initialState.districtSuccess}
             error={initialState.districtError}
             labelText={initialState.userDetails.district.placeholder}
             id="district"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={initialState.userDetails.district.elementType}
             selectPlaceholder={initialState.userDetails.district.SelectPlaceholder}
             value={initialState.userDetails.district.value}
             handleChange={(event)=>UpdatedInputChangehandler(event,"district")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:initialState.userDetails.district.type,
             }}
           /> 
         </GridItem>
         <GridItem  xs={12} sm={12} md={12}>
           <CustomInput
             success={initialState.pincodeSuccess}
             error={initialState.pincodeError}
             labelText={initialState.userDetails.pincode.placeholder}
             id="pincode"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={initialState.userDetails.pincode.elementType}
             selectPlaceholder={initialState.userDetails.pincode.SelectPlaceholder}
             value={initialState.userDetails.pincode.value}
             handleChange={(event)=>UpdatedInputChangehandler(event,"pincode")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:initialState.userDetails.pincode.type,
             }}
           /> 
         </GridItem>
         <GridItem  xs={12} sm={12} md={12}>
           <CustomInput
             success={initialState.statesSuccess}
             error={initialState.statesError}
             labelText={initialState.userDetails.states.placeholder}
             id="states"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={initialState.userDetails.states.elementType}
             selectPlaceholder={initialState.userDetails.states.SelectPlaceholder}
             value={initialState.userDetails.states.value}
             handleChange={(event)=>UpdatedInputChangehandler(event,"states")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:initialState.userDetails.states.type,
             }}
           /> 
         </GridItem>
       </GridContainer>
     </CardBody>
     <CardFooter>
     <Button style={{padding:"3% 0 0 0",marginTop:'0%'}} onClick={SubmitUpdatedUserDetails} >Submit</Button> 
     </CardFooter>      
   </Card>  
  );
  console.log(initialState)
  return (
    <div> 
         {form}
    </div>
  );
}


export default withStyles(userUpdateProfile)(withErrorHandler(UpdateStudentDetails,axios));