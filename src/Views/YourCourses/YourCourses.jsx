import React , { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import withStyles from "@material-ui/core/styles/withStyles";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {connect} from "react-redux";
import Card from "../../ComponentsMaterialUi/Card/Card.jsx";
import CardHeader from "../../ComponentsMaterialUi/Card/CardHeader.jsx";
import CardBody from "../../ComponentsMaterialUi/Card/CardBody.jsx";
import CustomInput from "../../ComponentsMaterialUi/CustomInput/CustomInput.jsx";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ListCardForm from "../../ComponentsMaterialUi/CustomLists/ListCardForm.jsx";
import TutorialScreem from './TutorialSection/TutorialSection.jsx';
import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer';
import GridItem from "../../ComponentsMaterialUi/Grid/GridItem";
import Button from "../../ComponentsMaterialUi/CustomButtons/Button.jsx";
import Li from "../../ComponentsMaterialUi/CustomLists/Lists.jsx";
import Modal from "../../ComponentsMaterialUi/Modal/Modal";
import YourCoursesStyle from "../../assets/jss/material-dashboard-react/components/YourCoureseStyle.jsx";
import * as action from  "../../Store/actions/index";
import Spinner from '../../ComponentsMaterialUi/Spinner/Spinner.js';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from "../../hoc/Axious/Axious";
import { ArrowDropDown } from '@material-ui/icons';

class YourCourses extends Component {
   state={
    SubTopicPack:[],
    currentSubject:"",
    Class:"",
    ShowTheChapterDisplayCard : false,
    ToggalScreenAndNotesComponent:false,
    ToggleModel:false
   }
  
   componentDidMount(){
     //use try catch methord for handlaning of any 
     //errer that may occure during the execution of Code
      this.props.getStudentCourses(this.props.userId,this.props.tokenId);
      setTimeout(() => {
         console.log(this.props.SubjectName,this.props.ClassDetails)
         this.props.displaySelectedSubject(this.props.tokenId,this.props.ClassDetails,this.props.SubjectName);
         this.setState({currentSubject:this.props.SubjectName})
       }, 3000);
     
   }

   GoBackToChapterList = ( ) => {
    this.setState({ToggalScreenAndNotesComponent:!this.state.ToggalScreenAndNotesComponent});
   }

   BlackDropToggle = ( ) =>{
    this.setState({ShowTheChapterDisplayCard:false});
   }

   ChapterListCards = ( event,ChapterId ) => {
      event.preventDefault();
     this.props.displayAvailableTopics(this.props.tokenId,this.props.ClassDetails,this.props.SubjectName,ChapterId);
     this.setState({ToggalScreenAndNotesComponent:true});
   }

   
  AddSubjectToCard = (event,classDetail , Subject) =>{
     event.preventDefault()
     this.props.displaySelectedSubject(this.props.tokenId,classDetail,Subject);
     this.setState({ShowTheChapterDisplayCard:true,currentSubject:Subject,ToggleModel:!this.state.ToggleModel});
  }

  ToggleBlackDrope = ( ) => {
     this.setState({ToggleModel:!this.state.ToggleModel});
  }
 
   render(){
     const { classes, ...rest } = this.props;
     let ChapterListToDisplay = [ ];
     if(this.props.ChapterList){
      ChapterListToDisplay = this.props.ChapterList;
     }
  
     let Subjects = [ ];
     if(this.props.userDetails){
      Subjects = this.props.userDetails
     } 

     let ChapterToDisplay = this.state.currentSubject?(
     <div>
        <CardHeader style={{width:"98%",padding:"2% 0 0% 2%",display:"flex",fontWeight:"650"}}>
            <div style={{width :"20%"}}>
              <div style={{width:"100%"}}>
                 <div style={{width:"100%"}}>
                    <div>
                       <div style={{display:"flex"}} onClick={this.ToggleBlackDrope}>
                          <CustomInput
                             formControlProps={{
                               fullWidth: true,
                             }}
                             style={{
                                background:"white",
                                padding:"0 0 0 8%"
                             }}
                             elementType="input"
                             value={this.state.currentSubject}
                             handleChange={this.ToggleBlackDrope}
                             inputProps={{
                               autoComplete:"off",
                               readOnly: true,
                               type:"text",
                             }}
                          />
                          <div  style={{marginTop:"8%",paddingTop:"2%", background:"rgb(138, 153, 168)"}}> 
                            {this.state.ToggleModel?<ArrowDropUpIcon/>:<ArrowDropDown/>}
                          </div>
                    </div>
                    <Modal  right="58%" left="22%" top="10%" show={this.state.ToggleModel} BlackDrop={this.ToggleBlackDrope}>
                      {Subjects.map((SubjectInfo) =>(
                         <Button
                          selectForm
                          key={SubjectInfo.value}
                          onClick={(event)=>this.AddSubjectToCard(event,SubjectInfo.Class ,SubjectInfo.value)}
                         >
                            {SubjectInfo.value}
                         </Button>
                      ))}
                    </Modal>
                    </div>
                 </div>
              </div>
           </div>
        </CardHeader>
         <CardBody>
            <GridContainer 
               style={{
                  width:"100%",
                  color:"#4d4d4d",
                  fontSize:"18px",
                  fontWeight:"500",
                  display:"flex",
                  margin:"1% 0 0 0",
                  padding:"2.1% 0 0% 0%",
                  background:"#8c8c8c",
                  color:"white"
               }} 
             >
                <GridItem 
                   xs={2} sm={2} md={2}
                   style={{
                      width:"20%",
                      margin:"0"
                    }}
                  >
                     S.No.
                </GridItem>
                <GridItem 
                    xs={8} sm={8} md={8}
                    style={{
                       width:"60%",
                       margin:"0"
                     }}
                  >
                   Chapter Name
                 </GridItem>
                 <GridItem 
                  xs={2} sm={2} md={2}
                   style={{
                      width:"20%",
                      margin:"0"
                     }}
                  >
                    Total Topic
                 </GridItem>
          </GridContainer>
          <div style={{height:"405px",margin:"0 .1% 0 .1% .5%", borderBottom:"1px solid gray",overflow:"auto"}}>
             {ChapterListToDisplay.map((chapterList ,indexOf) =>(
                 <GridContainer
                    key={chapterList.id} 
                    style={{
                      //padding:"0",
                        background:"white",
                        borderBottom:"1px solid #bfbfbf",
                        fontSize:'16px',
                        fontWeight:'500',
                       }}
                    onClick={(event)=>this.ChapterListCards(event,chapterList.id)}
                  >
                    <GridItem 
                       style={{ 
                         color:"#4d4d4d",
                         marginBottom:"0%",
                         padding:".5% 0 0 0 ",
                         display:"flex"
                       }}
                       xs={2} sm={2} md={2}
                    >
                       <div style={{padding:"0% 2% 0% 12%"}}>
                         <MenuBookIcon/>
                       </div>
                       <div style={{padding:"0% 3% .7% 0%"}}>
                         Chapter
                       </div>
                       {indexOf + 1} :
                    </GridItem>
                    <GridItem 
                       style={{ 
                         color:"#4d4d4d",
                         marginBottom:".3%",
                         padding:".5% 0 0 1%"
                       }}
                       xs={8} sm={8} md={8}
                    >
                      {chapterList.ChapterName}
                    </GridItem>
                    <GridItem 
                       style={{ 
                         color:"#4d4d4d",
                         marginBottom:".3%",
                         padding:".5% 0 0 1%"
                       }}
                       xs={2} sm={2} md={2}
                    >
                      {indexOf+ 1}
                    </GridItem>
                 </GridContainer>
              ))}
           </div>
        </CardBody>
     </div>
     ):<Spinner/>;
   
     let FrontPage = !this.state.ToggalScreenAndNotesComponent?(
        <Card style={{background:"#f2f2f2", boxShadow:"none",borderRadius:"0",width:"auto",marginTop:"0%",paddingTop:"1.5%",marginBottom:"0",border:"1px solid rgb(217, 217, 217)"}}>
          {ChapterToDisplay}
        </Card>
      ):(
        <TutorialScreem 
          GoBackToChapterList={this.GoBackToChapterList} 
          ToggalScreenAndNotesComponent={this.state.ToggalScreenAndNotesComponent}
        />
      );
     if(this.props.Loader){
       FrontPage = <Spinner/>
      }

     return(
       <div>
          {FrontPage}
       </div> 
     );
   }
}

const mapStateToProp = ( state ) => {
   return{
      userId : state.Auth.userId,
      tokenId : state.Auth.token,
      userDetails:state.StudentCourses.userCourseDetails,
      ChapterList:state.StudentCourses.ChapterList,
      SubjectName:state.StudentCourses.Subj,
      ClassDetails:state.StudentCourses.Clas,
      ListOfTopics:state.StudentCourses.topicsList,
      Loader:state.StudentCourses.loader
   };
}

const mapDispatchToProp = dispatch => {
   return{
      getStudentCourses : (userId,tokenId) => dispatch(action.getStudentCourse(userId,tokenId)),
      displaySelectedSubject:(token, classDetail, subjectName) => dispatch(action.DisplayAvailableChapters(token,classDetail,subjectName)),
      displayAvailableTopics:(TokenId , Class , Chapter , ChapterId) => dispatch(action.DisplayAvailableTopics(TokenId , Class , Chapter , ChapterId))
   };
}
export default connect(mapStateToProp,mapDispatchToProp) (withStyles(YourCoursesStyle)(withErrorHandler(YourCourses,axios)));