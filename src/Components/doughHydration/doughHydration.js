import React, { Component } from 'react';


class DoughHydration extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
      
      
      
      this.state = {
        flourType: 'DovesWhiteBread',
        hydration : 67,
        watermass : 61,
        flourmass : 89
      };

      


    }

    updateHydration(){
      var thestate = this.state;
      var remainingMass = this.props.doughmass - this.props.startermass;
      thestate.watermass = Math.round(remainingMass * thestate.hydration / (100 + thestate.hydration)); 
      thestate.flourmass = remainingMass - thestate.watermass; 
      this.setState(thestate);


    }

    componentDidMount() {
      this.updateHydration();
    }
  
    componentDidUpdate(prevprops) {
      if (this.props.doughmass!=prevprops.doughmass || this.props.startermass != prevprops.startermass){
        this.updateHydration();
      }
    }


  
    handleChange(e) {
     
      this.updateHydration();

    }

    render() {
      return (
        
        <div>
          <span> Flour Type  {(this.state.flourType)} 
          </span><br/>
          <span> Using Hydration  {(this.state.hydration)} 
          </span><br/>
          <span> Mass to add to starter {(this.props.doughmass - this.props.startermass)}
          </span><br/>
          <h2>Made up of </h2>
          <span> Flour Mass  {(this.state.flourmass)} 
          </span><br/>
          <span> Water Mass  {(this.state.watermass)} 
          </span><br/>
        </div>
      );
    }
  }
  
  export default DoughHydration;