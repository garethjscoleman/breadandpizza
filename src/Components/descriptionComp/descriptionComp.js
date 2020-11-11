 import React from 'react';

 import './descriptionComp.css';
 
 class DescriptionComp extends React.Component {

   
   render() {
     return (
       <div className="description">
         <h2>{this.props.description}</h2>
      
       </div>
     )
   }
  }
 
  export default DescriptionComp;