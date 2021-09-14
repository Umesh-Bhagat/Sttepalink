import React from 'react';
import Card from '../Card/Card.jsx';
import CardBody from '../Card/CardBody.jsx';
import GridContainer from '../Grid/GridContainer.jsx';
import GridItem from '../Grid/GridItem.jsx';
import BackDrop from '../Modal/BackDrop/BackDrop';


const Modal = (props) => {
  console.log(props.show,props.BlackDrop)
  return(
    <div>
     <BackDrop show={props.show} clickedBlackDrop={props.BlackDrop}/>
     <GridContainer justify="center">
      <GridItem  xs={12} sm={12} md={12}
           style={{
             transform:props.show ? 'translateY(0)': 'translateY(-100vh)',
             opacity: props.show ? 1 :0 ,
             width: window.innerWidth >= 960?"auto":"90%",
             height:"auto",
             zIndex:"100",
             left: window.innerWidth >= 960 ?props.left : "5%",
             right: window.innerWidth >= 960 ? props.right : "5%",
             top: window.innerWidth >= 960 ? props.top : "10%",
             padding:"0%",
             position:"fixed",
             transition: "all 0.3s ease-out",
             backgroundColor: "white",
             //borderRadius: "1.5em 1.5em 1em 1em",
             boxShadow: "-6px 10px 6px rgb(82, 82, 86)",
             margin:"5% 0 10% 0"
            }}
          >
            {props.children}  
       </GridItem> 
       </GridContainer>
    </div>  
  );
}

export default Modal;