import React, { Component } from 'react';


class DoughHydration extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.updateHydration = this.updateHydration.bind(this);
    this.updateHydrationRate = this.updateHydrationRate.bind(this);


    var flourTypes = [
      'DovesWhiteBread',
      'DovesBrownBread',
      'AllPurpose',
      'FrenchT55',
      'FrenchT65',
      'FrenchT65_mixed_with_DovesWhiteBread',
      'Type00Pasta'
    ];




    this.state = {
      flourType: 'DovesWhiteBread',
      hydration: 67,
      watermass: 61,
      flourmass: 89,
      starterflourmass: 0
    };
    this.updateHydrationRate();

  }
  updateHydrationRate() {
    var theState = this.state;

    switch (this.props.breadType) {
      case 'pizza':
        theState.flourType = 'Type00Pasta';
        theState.hydration = 68;
        break;
      case 'baguette':
        theState.flourType = 'FrenchT65_mixed_with_DovesWhiteBread';
        theState.hydration = 72;
        break;
      default:
      theState.flourType = 'DovesWhiteBread';
      theState.hydration = 67;
  }
    this.setState(theState);
    this.updateHydration();

  }

  updateHydration() {
    var thestate = this.state;
    var remainingMass = this.props.doughmass - this.props.startermass;
    thestate.watermass = Math.round(remainingMass * thestate.hydration / (100 + thestate.hydration));
    thestate.flourmass = remainingMass - thestate.watermass;
    thestate.starterflourmass =  this.props.startermass-Math.round(this.props.startermass * thestate.hydration / (100 + thestate.hydration));
    this.setState(thestate);


  }


  componentDidMount() {
    this.updateHydrationRate();
  }

  componentDidUpdate(prevprops) {
    if (this.props.breadType !== prevprops.breadType) {
      this.updateHydratationRate();
    }

    if (this.props.doughmass !== prevprops.doughmass || this.props.startermass !== prevprops.startermass) {
      this.updateHydration();
    }
  }



  handleChange(e) {

    this.updateHydration();

  }

  render() {
    return (

      <div>
        <h2>Quantities</h2>

         <span>Mass of starter is {(Math.round(this.props.startermass))} g</span><br/>
         <span>Mass of flour in starter is {(Math.round(this.state.starterflourmass))} g</span><br/>
         <span>Mass of water in starter is {(Math.round(this.props.startermass-this.state.starterflourmass))} g</span>
        <h3>Remaining mass</h3>



        <span> Flour Type  {(this.state.flourType)}
        </span><br />
        <span> Using Hydration  {(this.state.hydration)}
        </span><br />
        <span> Mass to add to starter {(Math.round(this.props.doughmass - this.props.startermass))}
        </span><br />
        <h2>Made up of </h2>
        <span> Flour Mass  {(Math.round(this.state.flourmass))}
        </span><br />
        <span> Water Mass  {(this.state.watermass)}
        </span><br />
      </div>
    );
  }
}

export default DoughHydration;