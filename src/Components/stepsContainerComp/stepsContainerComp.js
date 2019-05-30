 import React, { Component } from 'react';

 import './stepComp.css';
 
 class StepComp extends React.Component {
   constructor(props) {
     super(props)    
     
   }
   
   render() {
     return (
       <div>
       <h1>{this.props.stepno}</h1>        
       <h1>{this.props.stepdetail}</h1>              
       </div>
     )
   }
  }
 
  export default StepComp;