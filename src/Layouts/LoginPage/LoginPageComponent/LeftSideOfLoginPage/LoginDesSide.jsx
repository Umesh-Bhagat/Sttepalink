import React from "react";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import Button from '../../../../ComponentsMaterialUi/CustomButtons/Button';
import CardBody from "../../../../ComponentsMaterialUi/Card/CardBody.jsx";
import  GridContainer from "../../../../ComponentsMaterialUi/Grid/GridContainer.jsx";
import GridItem from "../../../../ComponentsMaterialUi/Grid/GridItem.jsx";

import Infodesk from '../../../../sttepalinkHome/SttepaContainers/infodesk/infodesk';

const LoginDesSide = ({...Props}) => {

   const {VideoPlayButton,ToggleModel} = Props;
   
  return(
   <CardBody style={{borderRight: "1px solid rgb(189, 187, 187)",paddingTop:"24%" , backgroundColor: "rgb(230, 231, 237)"}}> 
      <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
             <Infodesk/>
          </GridItem>
          <GridItem  
            xs={12} sm={12} md={12} 
            style={{
               color: "rgb(98, 92, 92)",
               fontSize:"14px",
               fontWeight:"650",
               margin:"0% 0% 0% 2%",
               padding:"5%"
            }}>
              &nbsp;&nbsp; &nbsp;Sttepalink is a Learning Platform, Where You Come And Get Your All  Doubt Cleared.
              We Help You Through Providing You a videos Tutorials And Relates Notes. Sttepalink is a Learning Platform, Where You Come And Get Your All  Doubt Cleared.
              We Help You Through Providing You a videos Tutorials And Relates Notes.
          </GridItem>
          <GridItem  xs={12} sm={12} md={12} >
             <h4 style={{
                fontSize:'14px',
                fontWeight:"650",
                color: "rgb(98, 92, 92)",
                padding:"2% 5%"
             }}> since 2021 , all right reserved</h4>
          </GridItem>
      </GridContainer >
   </CardBody>
  );
}

export default LoginDesSide;