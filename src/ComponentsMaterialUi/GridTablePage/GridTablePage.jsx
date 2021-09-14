import React from 'react';
import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../ComponentsMaterialUi/Grid/GridItem.jsx'
import Card from '../../ComponentsMaterialUi/Card/Card.jsx';
import CardHeadder from '../../ComponentsMaterialUi/Card/CardHeader.jsx'
import PricingPlan  from '../../Views/PricingPlanDiscription/PricingPlan.jsx';
import CardBody from '../../ComponentsMaterialUi/Card/CardBody.jsx';


const GridTablePage = ( props ) => {
    return(
       <div>
         <div  style={{padding:"0% 1.5%",marginBottom:"3%"}}>
            <Card style={{backgroundColor:"#b1b1cd",margin:"0%"}}>
             <CardHeadder>
              <h2 style={{textDecoration:" underline ",padding:"1% 0 0 0",color:"#666699", textAlign:"center"}}> {props.topic}</h2>
             </CardHeadder>
              <CardBody>
              <GridContainer justify="center">
                {props.Array.map(formLog => (
                  <GridItem xs={11} sm={6} md={4} key={formLog.Id} style={{padding:"2% 2% 2% 2%"}}>
                    <PricingPlan 
                      Key={formLog.Id}
                      BeforPrice={formLog.Packages.Price}
                      Validity={formLog.Packages.Validity}
                      Type={formLog.Packages.Type}
                      SignUp= {(e ) => props.functionName(e, formLog)}    
                    />
                  </GridItem>  
                ))} 
              </GridContainer>
              </CardBody>
            </Card>
          </div>
        </div>
    )
}

export default GridTablePage;