 import React from 'react';
 import TimeAdjuster from '../TimeAdjuster/timeAdjuster'; 
 import { NearestDurationFormatted, NearestDuration} from '../../Services/timeHelper/timeHelper';
 import QuantityAdjusters          from '../QuantityAdjusters/quantityAdjusters';
 import {Button} from 'react-bootstrap';
 import './adjustersComp.css';  

 class AdjustersComp extends React.Component {




   render() {


     return (
       <div className="adjusters">
        <div> 


          Baking Time: <i className="fa fa-clock-o"></i> {(this.props.nicebaketime)} mins <br/>
          Start: {(this.props.nicestart)} <br/>
          Finish: {(this.props.nicefinishtime)}   <br/> 
          <span onClick={this.props.changemode}> Mode:&nbsp;  
          { this.props.mode==='room' ? <>Room <i className="fa fa-thermometer warm"></i>{(this.props.temperature)}&deg;C </> : <>
            {this.props.mode==='fridge' ? <>Fridge <i className="fa fa-thermometer-half cold"></i>{(this.props.fridgetemperature)}&deg;C </>:
              <>Mix of Fridge and room<i className="fa fa-thermometer-half middle"></i>{(this.props.fridgetemperature)}-{(this.props.temperature)}</>
              }
              </>
          }
          
            </span><br/>
          Proofing Time: {NearestDurationFormatted(NearestDuration(this.props.duration))}&nbsp;
          
          <TimeAdjuster 
                  show={false}
                  moment2={(this.props.moment)}
                  handleWantedTimeChange={this.props.handleWantedTimeChange} 
                  temperature={(this.props.temperature)}
                  handleTemperatureChange={this.props.handleTemperatureChange}
                  fridgetemperature={(this.props.fridgetemperature)}
                  handleFridgeTemperatureChange={this.props.handleFridgeTemperatureChange}
                />
        </div>
        <div>Difficulty:{this.props.difficulty} <br/>
        <Button className="primary" variant="primary" onClick={this.props.bestGuess} >Start Now - {(this.props.success)}</Button>
            { this.props.success==='yes' ? <i className="fa fa-magic warm"></i> : <>
            {this.props.success==='no' ?  <i className="fa fa-magic-half cold"></i>:
            <i className="fa fa-magic middle"></i>
              }</>
          }
  </div>
        <div>Servings:{(this.props.servings)}<br/>
        Weight: {Math.round(this.props.doughMass/5)*5} g<br/>

        <QuantityAdjusters 
                  quantity={(this.props.quantity)}
                  handleQuantityChange={this.props.handleQuantityChange}
                  size={(this.props.size)}
                  handleSizeChange={this.props.handleSizeChange}
                  doughMass={(this.props.doughMass)}
                  handleDoughMassChange={this.props.handleDoughMassChange}
                  starterMass={(this.props.starterMass)}
                  handleStarterMassChange={this.props.handleStarterMassChange}
                  raisingagenttypeval={(this.props.raisingagenttypeval)}
                  handleRaisingAgentChange={this.props.handleRaisingAgentChange}
                  dryyeastmass = {(this.props.dryyeastmass)}
                  handleDryYeastChange={this.props.handleDryYeastChange}
                  freshyeastmass = {(this.props.freshyeastmass)}
                  handleFreshYeastChange={this.props.handleFreshYeastChange}
                  hydration={(this.props.hydration)}
                  handleChangeHydration={(this.props.handleChangeHydration) }
                  breadTitle = {(this.props.breadTitle)}
                />

        
        </div>      
       </div>
     )
   }
  }
 
  export default AdjustersComp;