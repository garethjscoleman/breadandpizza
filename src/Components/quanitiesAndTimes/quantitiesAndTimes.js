import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { doughCalc } from './../../Services/doughCalc';
import { pizzaMass } from './../../Services/doughCalc';
import { bakeTime } from './../../Services/doughCalc';

class QuantitiesAndTimes extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSizeChange = this.handleSizeChange.bind(this);
      this.handleWantedTimeChange = this.handleWantedTimeChange.bind(this);
      this.handleWantedDateChange = this.handleWantedDateChange.bind(this);
      this.handleFridgeChange = this.handleFridgeChange.bind(this);
      this.handleTempChange = this.handleTempChange.bind(this);
      this.setDesiredStartTime = this.setDesiredStartTime.bind(this);
      this.handleStarterChange = this.handleStarterChange.bind(this);

      
      
      this.state = {
        breadType: 'roundloaf',
        baketime:0,
        quantity : 1,
        size : 9,
        temperature : 17,
        fridgetemperature : 5,
        startermass : 200,
        doughmass : 250,
        desiredDate: '1999-12-31',
        desiredTime: '23:59',
        desiredDateTime : 0,
        roomstart: 0 ,
        fridgestart : 0,
        roomplusfridgestart:0,
        roomplusfridgeshape:0,
        fridgeplusroomstart:0,
        fridgeplusroomshape:0,
        proofingtimes : {
          inroom : 0,
          infridge : 0
        },
        timeToRise:0
      };

      


    }
    componentDidMount() {

      var theDate = new Date();
      theDate.setHours( theDate.getHours()+6);
      var doughProps = this.state;
      debugger;
      doughProps = this.setDesiredStartTime(theDate, doughProps);
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);
    }
  
 
    setDesiredStartTime(theTimetoStart, doughProps){
      
      //we need a point a bit in the future - try 6 hours 
      //today = today.addHours(6);

      var dd = theTimetoStart.getDate();
      var mm = theTimetoStart.getMonth() + 1; //January is 0!      
      var yyyy = theTimetoStart.getFullYear();
      var HH = theTimetoStart.getHours();
      var nn = theTimetoStart.getMinutes();

      if (dd < 10) {
        dd = '0' + dd;
      } 
      if (mm < 10) {
        mm = '0' + mm;
      } 
      var sDay =  yyyy + '-' + mm + '-' + dd ;
      var sTime = HH + ':'+ nn;
      doughProps.desiredDate =  sDay;
      doughProps.desiredTime = sTime ;
      return doughProps;

    }


   

    calcTimeToRise = function(doughProps){
      var proofingtimes = doughProps.proofingtimes;
      var firstrisetime = doughCalc(doughProps.temperature,doughProps.startermass,doughProps.doughmass);
      var secondrisetime = doughCalc(doughProps.fridgetemperature,doughProps.startermass,doughProps.doughmass); 
      doughProps.proofingtimes.inroom = firstrisetime;
      doughProps.proofingtimes.infridge = secondrisetime ;
      doughProps.timeToRise = firstrisetime+secondrisetime ;
      try {
        doughProps.desiredDateTime = Date.parse(doughProps.desiredDate + ' ' + doughProps.desiredTime);
      }
      catch
      {
        doughProps.desiredDateTime = 0;
      } 
      if (isNaN(doughProps.desiredDateTime))
      {
        doughProps.desiredDateTime = 0;
      } 
      else
      {
         
        doughProps.baketime = bakeTime(doughProps.breadType,doughProps.doughmass);
        doughProps.roomstart =  (new Date(doughProps.desiredDateTime - doughProps.baketime - (2*doughProps.proofingtimes.inroom*(60*1000)))).toLocaleString();
        doughProps.roomshape = (new Date(doughProps.desiredDateTime - doughProps.baketime -  (doughProps.proofingtimes.inroom*(60*1000)))).toLocaleString();
        doughProps.fridgestart =  (new Date(doughProps.desiredDateTime - doughProps.baketime - (2*doughProps.proofingtimes.infridge*(60*1000)))).toLocaleString();
        doughProps.fridgeshape =  (new Date(doughProps.desiredDateTime - doughProps.baketime -  (doughProps.proofingtimes.infridge*(60*1000)))).toLocaleString();
        doughProps.roomplusfridgestart =  (new Date(doughProps.desiredDateTime - doughProps.baketime - ((doughProps.proofingtimes.infridge+doughProps.proofingtimes.inroom)*(60*1000)))).toLocaleString();
        doughProps.roomplusfridgeshape = (new Date(doughProps.desiredDateTime - doughProps.baketime -  (doughProps.proofingtimes.inroom*(60*1000)))).toLocaleString();
        doughProps.fridgeplusroomstart = doughProps.roomplusfridgestart; 
        doughProps.fridgeplusroomshape =  (new Date(doughProps.desiredDateTime - doughProps.baketime - (doughProps.proofingtimes.infridge*(60*1000)))).toLocaleString();


      }
      return doughProps;
    }

    

     getValidationState = function() {
      const theQuantity = this.state.quantity;
      if (theQuantity < 1) return 'error';
      else if (theQuantity > 5000) return 'error';
      const theSize = this.state.size;
      if (theSize < 1) return 'error';
      else if (theSize > 5000) return 'error';
      const theTemp = this.state.temperature;
      if (theTemp < 1) return 'error';
      else if (theTemp > 35) return 'error';
      const theFridgeTemp = this.state.fridgetemperature;
      if (theFridgeTemp < 1) return 'error';
      else if (theFridgeTemp > 35) return 'error';      
      const theStarterMass = this.state.startermass;
      if (theStarterMass < 1) return 'error';
      else if (theStarterMass > 50000) return 'error';      
      const theDoughMass = this.state.doughmass;
      if (theDoughMass < 1) return 'error';
      else if (theDoughMass > 50000) return 'error';
      else return 'success';      
    }

    handleChangesToDoughRiseTime(doughProps){
      var newdoughmass = pizzaMass( doughProps.size, doughProps.quantity, 'napoletana' ) ; 
      if (newdoughmass>1)
      {
        doughProps.doughmass = newdoughmass;  
        var startermass = doughProps.startermass;
        if (startermass> 0.5* newdoughmass ){
          var newstartermass = 0.5* newdoughmass;
          if (newstartermass>1)
          {
            doughProps.startermass = newstartermass;
          }

        }                
        doughProps = this.calcTimeToRise(doughProps);
      }
      return doughProps;

    }

  
    handleChange(e) {
      var doughProps = this.state;
      doughProps.quantity = e.target.value; 
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);
      

    }
    handleSizeChange(e) {
      var doughProps = this.state;
      doughProps.size = e.target.value; 
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);

    }
    handleStarterChange(e) {
      var doughProps = this.state;
      doughProps.startermass = e.target.value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);
    }
    handleWantedTimeChange(e) {
      var doughProps = this.state;
      doughProps.desiredTime = e.target.value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);
    }
    handleWantedDateChange(e) {
      var doughProps = this.state;
      doughProps.desiredDate = e.target.value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);
    }
    handleFridgeChange(e) {
      var doughProps = this.state;
      doughProps.fridgetemperature = e.target.value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);
    }
    handleTempChange(e) {
      var doughProps = this.state;
      doughProps.temperature = e.target.value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);
    }

    render() {
      return (
        <form>
          <FormGroup
            controlId="formPizzaQantities"
            validationState={this.getValidationState()}>
            <ControlLabel>How Many Pizza's do you want?</ControlLabel>
            <FormControl
              type="number"
              value={this.state.quantity}
              placeholder="Enter how many you want"
              onChange={this.handleChange}
              min="1" max="5000"
              step="1"
            />
            <FormControl.Feedback />
            <HelpBlock>This has to be a number between 1 and 5000.</HelpBlock>
            <ControlLabel>How big should they be</ControlLabel>
            <FormControl
              type="number"
              value={this.state.size}
              placeholder="Enter how many you want"
              onChange={this.handleSizeChange}
              min="7" max="18"
              step="2"
            />
            <FormControl.Feedback />
            <HelpBlock>This has to be a number between 7 and 18 inches.</HelpBlock>
            <HelpBlock>This is total mass of dough we need {(this.state.size*this.state.size/81)*this.state.quantity*225}g</HelpBlock>
            <ControlLabel>How Much Starter do you have?</ControlLabel>
            <FormControl
              type="number"
              value={this.state.startermass}
              placeholder="Enter how much starter mass you think we can use"
              onChange={this.handleStarterChange}
              min="10" max="5000"
              step="1"
            />
            <FormControl.Feedback />
            <HelpBlock>This has to be a number between 10 and 5000.</HelpBlock>


            <ControlLabel>Which day do you want it</ControlLabel>
            <FormControl
              type="date"
              value={this.state.desiredDate}
              placeholder="When do you want it ?"
              onChange={this.handleWantedDateChange}
            />
            <FormControl.Feedback />
            <HelpBlock>This has to be a date .</HelpBlock>
            <ControlLabel>When do you want it?</ControlLabel>
            <FormControl
              type="time"
              value={this.state.desiredTime}
              placeholder="When do you want it ?"
              onChange={this.handleWantedTimeChange}
            />
            

            <FormControl.Feedback />
            <HelpBlock>This has to be a time .</HelpBlock>
            <ControlLabel>How warm is the room?</ControlLabel>
            <FormControl
              type="number"
              value={this.state.temperature}
              placeholder="Enter the room temp in Centigrade"
              onChange={this.handleTempChange}
              min="4" max="35"
              step="1"
            />
            <FormControl.Feedback />
            <HelpBlock>This has to be a number between 4 and 35.</HelpBlock>
            <ControlLabel>How cold is the fridge?</ControlLabel>
            <FormControl
              type="number"
              value={this.state.fridgetemperature}
              placeholder="Enter how many you want"
              onChange={this.handleFridgeChange}
              min="4" max="35"
              step="1"
            />
            <FormControl.Feedback />
            <HelpBlock>This has to be a number between 4 and 35.</HelpBlock>

          <h2>Baking Time</h2>
          Approx {(Math.round(this.state.baketime/60000))} for {(this.state.breadType)} of this size
          <h2>In Room</h2>
            Time of room rise is:  {(this.state.proofingtimes.inroom)} mins.(that is about {(Math.round(this.state.proofingtimes.inroom/6)/10)} hours )<br/>
            Start at {(this.state.roomstart)}, with a shape around {(this.state.roomshape)} to achive the desired time in the room<br/>
          <h2>In Fridge</h2>
            Time of fridge rise is:  {(this.state.proofingtimes.infridge)} mins. (that is about {(Math.round(this.state.proofingtimes.infridge/6)/10)} hours )<br/>
            Start at {(this.state.fridgestart)}, with a shape around {(this.state.fridgeshape)} to achive the desired time in the fridge<br/>
          <h2>Fridge, then Room </h2>
            Start at {(this.state.roomplusfridgestart)}, with a shape around {(this.state.roomplusfridgeshape)} <br/>
          <h2>Room, then Fridge </h2>
          Start at {(this.state.fridgeplusroomstart)}, with a shape around {(this.state.fridgeplusroomshape)} <br/>



            Mass of starter is {(this.state.startermass)} g
          </FormGroup>
        </form>
      );
    }
  }
  
  export default QuantitiesAndTimes;