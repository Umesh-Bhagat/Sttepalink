import React,{Component} from 'react';
import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../ComponentsMaterialUi/Grid/GridItem.jsx'
import Card from '../../ComponentsMaterialUi/Card/Card.jsx';
import CardHeadder from '../../ComponentsMaterialUi/Card/CardHeader.jsx'
import PricingPlan  from '../../Views/PricingPlanDiscription/PricingPlan.jsx';
import { createBrowserHistory } from "history";
import PriceDisplayGridTable from "../../ComponentsMaterialUi/GridTablePage/GridTablePage.jsx";
import './PricingPlanDis.css';
import CardBody from '../../ComponentsMaterialUi/Card/CardBody.jsx';

const history = createBrowserHistory({forceRefresh: true});
class SpacingGrid extends Component{
 state={
   VideoPackages:{
     ThreeDaysVideoPlan:{
       Price:"99",   
       Type:"Video Tutorial With Notes ",       
       Validity:"3 days validity",           
     },
     SevenDaysVideoPlan:{
       Price:"130",
       Type:"Video Tutorial With Notes ",  
       Validity:"7 days validity",
     },
     FourteenDaysVideoPlan:{
       Price:"230",
       Type:"Video Tutorial With Notes ",  
       Validity:"14 days validity",
     },
     TwentyEightDaysVideoPlan:{
       Price:"319",
       Type:"Video Tutorial With Notes",  
       Validity:"28 days validity",
     }
   },
   NotesPackage:{
     ThreeDaysOnlyNotesPlan:{
       Price:"49",        
       Type:"Only Notes Available",   
       Validity:"3 days validity",
      },
      SevenDaysOnlyNotesPlan:{
       Price:"69",
       Type:"Only Notes Available ",   
       Validity:"7 days validity",
      },
      FourteenDaysOnlyNotesPlan:{
       Price:"110",
       Type:"Only Notes Available",   
       Validity:"14 days validity",
      },
      TwentyEightDaysOnlyNotesPlan:{
       Price:"180",
       Type:"Only Notes Available ",   
       Validity:"28 days validity",
      }
    },
    toggleform:false,
    PasswordMatched:false,
    CurrentUsingPlan:'',
    VarifiedPasswords : '',
    SelectedSubjectsForm:false
  }

 SignUp = ( e,det) =>{
   e.preventDefault();
   this.setState({toggleform : !this.state.toggleform});
   console.log(det);
   const PacValidity = det.Packages.Validity;
   const PacType = det.Packages.Type;
   const PacPrice = det.Packages.Price;
   let PacNamePacPricw =  PacPrice+ "/-"+"  "+PacType + "("+ PacValidity+")";
   localStorage.setItem("Package",PacNamePacPricw);
   history.push("/signUp")
  }

  render(){
    const VideoPackageArray = [];
    for(let key in this.state.VideoPackages){
      VideoPackageArray.push({
        Id: key,
        Packages:this.state.VideoPackages[key]
       });
     }
    const NotesPackageArray = [];
    for(let key in this.state.NotesPackage){
      NotesPackageArray.push({
       Id: key,
       Packages:this.state.NotesPackage[key]
      });
    }
    const GridForm=!this.state.SelectedSubjectsForm?(
     <div>
      <h1 style={{color:"Gray",padding:"1.5% 0% .5% 1.5%",margin:"0%"}}>Sttepalink Pricing</h1>
       <PriceDisplayGridTable
          topic="Video Along With Notes"
          Array={VideoPackageArray}
          functionName= {(e ,formLog ) => this.SignUp(e, formLog)}       
       />

       <PriceDisplayGridTable 
          topic=" Only Notes Available"
          Array={NotesPackageArray}
          functionName= {(e , formLog ) => this.SignUp(e, formLog)}       
       />
     </div>
    ) : null;
     return (
        <div className="PricingPlanBackground">
          {GridForm}
        </div>
     );
   }
  }


export default SpacingGrid;