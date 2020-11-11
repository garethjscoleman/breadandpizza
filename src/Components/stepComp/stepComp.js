 import React from 'react';

 import './stepComp.css';

 class StepComp extends React.Component {
   
   render() {
     return (
       <div>
       <h2>{this.props.steptitle}</h2>
        {this.props.stepdetail}
        <br/><br/>{this.props.temp ===0 ? <span></span>:<span>Temperature {this.props.temp} &deg;C</span>}
       </div>
     )
   }
  }
 
  export default StepComp;