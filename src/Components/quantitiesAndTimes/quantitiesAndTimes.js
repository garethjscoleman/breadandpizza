import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock}  from 'react-bootstrap';
import {InputMoment, BigInputMoment, DatePicker, TimePicker} from 'react-input-moment';
import DisplayQuantitiesTimesTab from './../displayQuantitiesTimesTab/displayQuantitiesTimesTab'; 

import { doughCalc } from './../../Services/doughCalc';
import { pizzaMass } from './../../Services/doughCalc';
import { bakeTime } from './../../Services/doughCalc';
import moment from 'moment';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"

class QuantitiesAndTimes extends React.Component {
    constructor(props, context) {
      super(props, context);
      var show = true;
      var showClass = "Hide";
      this.showClass = showClass;
      this.handleChange = this.handleChange.bind(this);
      this.handleSizeChange = this.handleSizeChange.bind(this);
      this.handleWantedTimeChange = this.handleWantedTimeChange.bind(this);
      this.handleWantedDateChange = this.handleWantedDateChange.bind(this);
      this.handleFridgeChange = this.handleFridgeChange.bind(this);
      this.handleTempChange = this.handleTempChange.bind(this);
      this.setDesiredStartTime = this.setDesiredStartTime.bind(this);
      this.handleStarterChange = this.handleStarterChange.bind(this);
      this.handleMassChange = this.handleMassChange.bind(this);
      this.handleMomentChange = this.handleMomentChange.bind(this);
      this.hideOrShow = this.hideOrShow.bind(this);
      this.state = {
        show :true,
        breadType: props.breadType,
        baketime:0,
        quantity : 1,
        size : 9,
        temperature : 17,
        fridgetemperature : 5,
        startermass : 100,
        doughmass : 250,
        moment: moment(), 
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
        timeToRise:0,
       
      };

    }

    hideOrShow(){
      this.setState(state => ({
        show: !state.show
      }));
      this.show = !this.show;
      if(this.show)
      {
        this.showClass = 'Show';
      }
      else
      {
        this.showClass = 'Hide';
      }

    }

    componentDidMount() {
      
      var theDate = new Date();
      theDate.setHours( theDate.getHours()+6);
      
      var doughProps = this.state;
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
      if (HH < 10) {
        HH = '0' + HH;
      } 
      if (nn < 10) {
        nn = '0' + nn;
      } 
      var sDay =  yyyy + '-' + mm + '-' + dd ;
      var sTime = HH + ':'+ nn;
      doughProps.desiredDate =  sDay;
      doughProps.desiredTime = sTime ;
      return doughProps;

    }


   

    calcTimeToRise = function(doughProps){
      doughProps.breadType= this.props.breadType;
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
    handleMomentChange(value){
      var doughProps = this.state;
      console.log(value.format('DD-MM-YYYY'));
      this.setDesiredStartTime(value.toDate(),doughProps);      
    }


    handleChangesToDoughRiseTime(doughProps){
      var newdoughmass; 
      if ( doughProps.breadType === "pizza"){
        newdoughmass = pizzaMass( doughProps.size, doughProps.quantity, 'napoletana' ) ; 
      }
      else
      {
        newdoughmass = doughProps.doughmass;
      }
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

  
    handleChange(value) {
      var doughProps = this.state;
      doughProps.quantity = value; 
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);
      

    }
    handleSizeChange(value) {
      var doughProps = this.state;
      doughProps.size = value; 
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);

    }
    handleMassChange(value)
    {
      var doughProps = this.state;
      doughProps.size = 9; 
      doughProps.quantity =  value/225;
      doughProps.doughmass =  value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);


    }
    handleStarterChange(value) {
      var doughProps = this.state;
      doughProps.startermass = value;
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
    handleFridgeChange(value) {
      var doughProps = this.state;
      doughProps.fridgetemperature = value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);
    }
    handleTempChange(value) {
      var doughProps = this.state;
      doughProps.temperature = value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.setState(doughProps);
    }

    render() {
      const breadType = this.props.breadType;
      var doughProps = this.state;
      if (breadType!==doughProps.breadType)
      {
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        this.setState(doughProps);
      }
      let wrapperClass = 'wrapper medium'  ;
      return(

     <div>
       <form className="form">
        
        </form>
        <form className="form">
            <FormGroup
              controlId="formPizzaQantities"
              validationState={this.getValidationState()}>
              { breadType==="pizza" ? <div> 
            
              <ControlLabel>How Many Pizza&apos;s do you want?  {(this.state.breadType==="pizza")}</ControlLabel>
              <InputRange 
              formatMinLabel={value => ` Min ${value} `}
              formatMaxLabel={value => ` Max ${value} `}
              step={1}
              maxValue={15}
              minValue={1}
              value={this.state.quantity}
              onChange={quantity => {this.setState({ quantity }); this.handleChange(quantity); }} 
              onChangeComplete={value => console.log(value)}
              />

              <HelpBlock>This has to be a number between 1 and 5000.</HelpBlock>
              <ControlLabel>How big should they be</ControlLabel>
              <InputRange 
              formatMinLabel={value => ` Min ${value} `}
              formatMaxLabel={value => ` Max ${value} `}
              step={1}
              maxValue={18}
              minValue={7}
              value={this.state.size}
              onChange={size => {this.setState({ size }); this.handleSizeChange(size); }} 
              onChangeComplete={value => console.log(value)}
              />
              <HelpBlock>This has to be a number between 7 and 18 inches.</HelpBlock> 
              </div>: 
              <div>
                <ControlLabel>How large do you want your loaf?</ControlLabel>
                <InputRange 
                formatLabel={value => `${value} g`}
                formatMinLabel={value => `Min ${value} g`}
                formatMaxLabel={value => `Max ${value} g`}

              step={50}
              maxValue={3000}
              minValue={250}
              value={this.state.doughmass}
              onChange={doughmass => {this.setState({ doughmass }); this.handleMassChange(doughmass); }} 
              onChangeComplete={value => console.log(value)}
              />

              <HelpBlock>This has to be a number between 1 and 5000.</HelpBlock>
            </div>
            }

              <div> This is total mass of dough we need {Math.round((this.state.size*this.state.size/81)*this.state.quantity*225)}g</div>
              <ControlLabel>How Much Starter do you have?</ControlLabel>
              <InputRange 
              formatMinLabel={value => ` Min ${value} g`}
              formatMaxLabel={value => ` Max ${value} g`}
              step={1}
              maxValue={Math.round(this.state.doughmass/2)}
              minValue={0}
              value={this.state.startermass}
              onChange={startermass => {this.setState({ startermass }); this.handleStarterChange(startermass); }} 
              onChangeComplete={value => console.log(value)}
              />
              <HelpBlock>This has to be a number between 10 and 5000.</HelpBlock>

            <div>
              <div onTouchStart={this.hideOrShow}   ><h4>
          {this.state.show?<span> + Enter the desired time</span> : <span> - Close time entry</span> }
              </h4></div>
              <div className={(this.showClass)}>

                <ControlLabel>Which day do you want it</ControlLabel>
                <div className={wrapperClass}>
                  <BigInputMoment
                    moment={this.state.moment}
                    showSeconds={false}
                    onChange={mom => { this.handleMomentChange(mom);this.setState({moment: mom});}}
                    locale="en"
                  />
                </div>
              </div>
            </div>
              <ControlLabel>How warm is the room?</ControlLabel>
              <InputRange 
              formatMinLabel={value => ` Min ${value} g`}
              formatMaxLabel={value => ` Max ${value} g`}
              step={1}
              maxValue={35}
              minValue={0}
              value={this.state.temperature}
              onChange={temperature => {this.setState({ temperature }); this.handleTempChange(temperature); }} 
              onChangeComplete={value => console.log(value)}
              />
              <HelpBlock>This has to be a number between 4 and 35.</HelpBlock>
              <ControlLabel>How cold is the fridge?</ControlLabel>
              
              <InputRange 
              formatMinLabel={value => ` Min ${value} g`}
              formatMaxLabel={value => ` Max ${value} g`}
              step={1}
              maxValue={35}
              minValue={0}
              value={this.state.fridgetemperature}
              onChange={fridgetemperature => {this.setState({ fridgetemperature }); this.handleFridgeChange(fridgetemperature); }} 
              onChangeComplete={value => console.log(value)}
              />

              <HelpBlock>This has to be a number between 4 and 35.</HelpBlock>



            </FormGroup>
            <DisplayQuantitiesTimesTab fridgeplusroomshape={this.state.fridgeplusroomshape} roomplusfridgeshape={this.state.roomplusfridgeshape}  doughmass={this.state.doughmass} startermass={this.state.startermass} baketime={this.state.baketime} breadType={this.state.breadType} infridge={this.state.proofingtimes.infridge} fridgestart={this.state.fridgestart} fridgeshape={this.state.fridgeshape} roomshape={this.state.roomshape} roomstart={this.state.roomstart} inroom={this.state.proofingtimes.inroom} roomplusfridgestart={this.state.roomplusfridgestart} fridgeplusroomstart={this.state.fridgeplusroomstart} />
      
          </form>
      </div>);
      }  
    }
  
  
  export default QuantitiesAndTimes;