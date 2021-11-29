import React from 'react';
import './InfodeskImage.css'
//import Infoimg from '../../assets/images/logoDark.png';
import Infoimg from '../../assets/images/logo.png';

const InfodeskImage = (props) => (
      <img  className="imageSize" style={props.style} src={Infoimg} alt="infoImage"/> 
);

export default InfodeskImage ;