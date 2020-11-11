 import React from 'react';

 import './titleComp.css';
 
 class TitleComp extends React.Component {

   
   render() {
     return (
       <div>
       <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      
       </div>
     )
   }
  }
 
  export default TitleComp;