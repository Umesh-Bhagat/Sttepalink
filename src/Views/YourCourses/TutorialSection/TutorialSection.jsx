import React , { Component } from 'react';
import {connect} from "react-redux";
import Menu from "@material-ui/icons/Menu";
import { createBrowserHistory } from "history";

import Spinner from "../../../ComponentsMaterialUi/Spinner/Spinner";
import {storage} from '../../../firebase/Index';
import NotesPage from "./NoteDisplay/NotePage.jsx";
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../../ComponentsMaterialUi/Grid/GridItem.jsx';
import Card from "../../../ComponentsMaterialUi/Card/Card.jsx";
import CardBody from "../../../ComponentsMaterialUi/Card/CardBody.jsx";
import Modal from '../../../ComponentsMaterialUi/Modal/Modal'; 
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListCardForm from '../../../ComponentsMaterialUi/CustomLists/ListCardForm.jsx';
import Button from '../../../ComponentsMaterialUi/CustomButtons/Button.jsx';
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../../hoc/Axious/Axious";


const history = createBrowserHistory({forceRefresh: true});

class TutorialSection extends Component {
  state ={
    TopicName:" ",
    TopicNotes:" ",
    VideoURL:" ",
    ToggleNotesPageDisplay:false,
    BlackDropToggle:false,
  }

  TopicButton = (e) =>{
    this.setState({BlackDropToggle:!this.state.BlackDropToggle});
  }
  BlackDropToggle = ( ) =>{
    this.setState({BlackDropToggle:false});
  }

  DisplayONTtorialScreen = ( e , data,TopicName) =>{
    e.preventDefault();
    const TopicGot=[];
    for(let key in data.TopicData){
      TopicGot.push({
       TopicData:data.TopicData[key].NotesTopic,
       Video:data.TopicData[key].Video,
       id:key
      });
    }
    let VideoDetail = TopicGot[0].Video;
    let storeRef = storage.ref();
    let spaceRef = storeRef.child(VideoDetail)
    storeRef.child('videos/'+VideoDetail).getDownloadURL().then((url) =>{
        this.setState({VideoURL:url});
    })
    this.setState({TopicName:TopicName,ToggleNotesPageDisplay:true,TopicNotes:TopicGot[0].TopicData,BlackDropToggle:!this.state.BlackDropToggle})
  }


  render(){
    let ManualPadding = window.innerWidth >= 960 ? "0% 13% 0% 13%" : "0 4% 0 4%"
    let TutorialScreenButtonPadding = window.innerWidth >= 960 ? "0 15px 0 15px" : "0 0 0 0"
    let NotesPageDisplay = this.state.ToggleNotesPageDisplay ? (
     <NotesPage
        ManualPadding={ManualPadding}
        TopicName={this.state.TopicName}
        TopicNotes={this.state.TopicNotes}
     />
    ):null;
       
    let TutorialScreenAndNoteBoard = this.props.ToggalScreenAndNotesComponent?(
     <div style={{padding:TutorialScreenButtonPadding}}>
       <GridContainer justify="center">
         <GridItem style={{height:"490px", marginTop:"10px",marginBottom:"1.5%"}} sx={12} sm={12} md={12}>
           <iframe 
             style={{backgroundColor:"#242729",width:"100%",height:"490px"}} 
             src={this.state.VideoURL}
             frameBorder="0" 
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             controlsList="nodownload"
             allowFullScreen>
           </iframe>
         </GridItem>
         <GridItem xs={6}  sm={6} md={6}>
           <Button   onClick = {(e)=>this.props.GoBackToChapterList(e)} > Go Back </Button>
         </GridItem>
         <GridItem xs={6}  sm={6} md={6}>
           <Button   onClick = {(e)=>this.TopicButton(e)}> <Menu/>Topics (Start)</Button>
         </GridItem>
       </GridContainer>
       {NotesPageDisplay}
     </div>
    ):null;
 
    let FormArrayForSubList=[];
    console.log(this.props.SubTopics)
    for(let key in this.props.SubTopics){
      FormArrayForSubList.push({
        ...this.props.SubTopics[key],
        id:key
      });
    }
      
    let CurrentSubTopic =this.state.BlackDropToggle?(
     <Modal left="35%" top="4%" right="15%" show={this.state.BlackDropToggle} BlackDrop={this.BlackDropToggle}>
       <Card style={{margin:"0"}}>
         <CardBody style={{padding:"0"}}>
       <GridContainer 
         style={{
           color:"#4d4d4d",
           fontSize:"18px",
           fontWeight:"500",
           display:"flex",
           margin:"0 0 0 0",
           padding:"4% 0 0% 0%",
           background:"#8c8c8c",
           color:"white"
         }} 
       >
         <GridItem 
           sx={2} sm={2} md={2}
           style={{
              margin:"0"
            }}>
            S.No.
         </GridItem>
         <GridItem 
           sx={10} sm={10} md={10}
           style={{
             margin:"0"
            }}
          >
            Topic Name
         </GridItem>
       </GridContainer>
       <div style={{height:"270px",margin:"0 .1% 0 .1% .5%", borderBottom:"1px solid gray",overflow:"auto"}}>
       {FormArrayForSubList.map((formLog,indexOf) => ( 
          <GridContainer 
            key={formLog.id} 
            style={{
                width1:"20%",
                padding:"0% 0% 0% 3%",
                background:"white",
                borderBottom:"1px solid #bfbfbf",
                fontSize:'16px',
                fontWeight:'500',
                "&:hover": {
                  background:"#f2f2f2",
                  fontSize:"17%",
                }
               }}
              onClick={(e)=>this.DisplayONTtorialScreen(e,formLog,formLog.TopicName)}
           >
             <GridItem 
               sx={2} sm={2} md={2}
               style={{ 
                  width:"20%",
                  color:"#4d4d4d",
                  marginBottom:".3%",
                  padding:".5% 0 0 0 ",
                  display:"flex"
                }}
             >
               <span style={{padding:"0% 2% 0 0"}}>
                 <MenuBookIcon/>
               </span>
                <div style={{padding:"0% 3% .7% 0%"}}>
                   Topic
                </div>
                {indexOf + 1}
             </GridItem>
             <GridItem 
                sx={10} sm={10} md={10}
                style={{ 
                  width:"60%",
                  color:"#4d4d4d",
                  marginBottom:".3%",
                  padding:".5% 0 0 1%"
                }}
             >
                 {formLog.TopicName}
             </GridItem>
           
           </GridContainer>
       ))}
       </div>
       </CardBody>
       </Card>
     </Modal>
    ):null;
       
    return (
      <div>
        {TutorialScreenAndNoteBoard}
         {CurrentSubTopic}   
      </div>
    );
  }   
}

const mapStateToProps = state =>{
  return{
    SubTopics : state.StudentCourses.topicsList
  }
}

export default connect(mapStateToProps,null)(withErrorHandler(TutorialSection,axios)); 