import React , { Component } from 'react';
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "../../../hoc/Axious/Axious";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

import EditProfileForm from '../UpdateUser/UpdateUser';
import Modal from '../../../ComponentsMaterialUi/Modal/Modal';
import ProfileForm from '../ProfileForm/ProfileForm.jsx';
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer';
import GridItem from "../../../ComponentsMaterialUi/Grid/GridContainer.jsx";
import * as actions from "../../../Store/actions/index";
import Spinner from "../../../ComponentsMaterialUi/Spinner/Spinner";
import ProfileStyle from "../../../assets/jss/material-dashboard-react/components/ProfileStyle.jsx";

class UserProfile extends Component {
  
  state={
    userDetails :[],
    UserDetailId:'',
    EditeduserDetails:[],
    fullProfile:true,
    ProfileUpdateToggle:false,
    TempId : []
  }

  componentDidMount(){
   this.props.GetUserProfile(this.props.userId,this.props.tokenId);
   }

  
   userProfileUpdates= ( ) =>{
       this.setState({ProfileUpdateToggle:!this.state.ProfileUpdateToggle});
   }
 
  

   render(){
      const { classes, ...rest } = this.props;

      let EditProfile=this.state.ProfileUpdateToggle?(
        <Modal 
          show={this.state.ProfileUpdateToggle} 
          title="Update Your Profile" 
          left="42%"
          right="25%"
          top="10%"
          BlackDrop={this.userProfileUpdates}
         >
           <EditProfileForm
           UserProfileId={this.props.userDetail}
           userId={this.props.userId}
           tokenId={this.props.tokenId}
           SendUpdatedData={this.props.SendUpdatedData}
           BlackDrop={this.userProfileUpdates}
           />
        </Modal>
     ):null;
      
      let Profilecontainer = this.props.userDetail?(  
        <GridContainer justify="center">
           <GridItem item={true} xs={12} sm={11} md={10}>
              <ProfileForm
                userName={ this.props.userDetail.userData.name}
                userPricingPlan={ this.props.userDetail.userData.PlanName}
                useremailId={ this.props.userDetail.userData.emailId}
                userworkAs={ this.props.userDetail.userData.workAs}
                usersex={ this.props.userDetail.userData.sex}
                userClass={ this.props.userDetail.userData.class}
                usermobileNo={ this.props.userDetail.userData.mobileNo}
                userfatherName={ this.props.userDetail.userData.fatherName}
                userSchoolName={ this.props.userDetail.userData.SchoolName}
                usercurrentAddress={ this.props.userDetail.userData.currentAddress}
                userlandMark={ this.props.userDetail.userData.landMark}
                userpostoffice={ this.props.userDetail.userData.postoffice}
                userdistrict={ this.props.userDetail.userData.district}
                userpincode={ this.props.userDetail.userData.pincode}
                userstates={ this.props.userDetail.userData.states}
                ProfileUpdateToggle={this.state.ProfileUpdateToggle}
                FetchedDetail={this.state.EditeduserDetails}
                updateUserProfile={()=>this.userProfileUpdates( )}
               />
           </GridItem>
         </GridContainer>
      ):null;    //do check null here .. what sould be here in place of it..
     
      if(this.props.loader){
         Profilecontainer = <Spinner/>
      }

    return (
          <div className={classes.ProfileGril}>
               {Profilecontainer}
               {EditProfile}
          </div> 
      );
   }
}

 
const mapStatetoProps = (state) =>{
   return{
    userId  : state.Auth.userId,
    tokenId : state.Auth.token,
    userDetail:state.Profile.userDetails,
    loader :state.Profile.loading
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      GetUserProfile : ( userId , token) => dispatch(actions.getProfile(userId , token)),
      SendUpdatedData : (userUpdatedData,ProfileId,Token,userId) => dispatch(actions.UpdateUserProfile(userUpdatedData,ProfileId,Token,userId))
   }
}
export default connect(mapStatetoProps,mapDispatchToProps)(withStyles(ProfileStyle)(withErrorHandler(UserProfile,axios)));