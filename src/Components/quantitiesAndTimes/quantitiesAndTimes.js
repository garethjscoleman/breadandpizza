import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock}  from 'react-bootstrap';
import {InputMoment, BigInputMoment, DatePicker, TimePicker} from 'react-input-moment';
import DisplayQuantitiesTimesTab from './../displayQuantitiesTimesTab/displayQuantitiesTimesTab'; 
import  TitleComp  from './../titleComp/titleComp';
import  ImageComp  from './../imageComp/imageComp';
import { doughCalc } from './../../Services/doughCalc';
import { pizzaMass } from './../../Services/doughCalc';
import { bakeTime } from './../../Services/doughCalc';
import moment from 'moment';


import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import './quantitiesAndTimes.css';
import "react-input-range/lib/css/index.css"

class QuantitiesAndTimes extends React.Component {
    constructor(props, context) {
      super(props, context);
      var show = true;
      var showClass = "Hide";
      this.showClass = showClass;
      this.handleChange = this.handleChange.bind(this);
      this.handleHydrationChange = this.handleHydrationChange.bind(this);
      this.handleSizeChange = this.handleSizeChange.bind(this);
      this.handleWantedTimeChange = this.handleWantedTimeChange.bind(this);
      this.handleWantedDateChange = this.handleWantedDateChange.bind(this);
      this.handleFridgeChange = this.handleFridgeChange.bind(this);
      this.handleTempChange = this.handleTempChange.bind(this);
      this.setDesiredStartTime = this.setDesiredStartTime.bind(this);
      this.handleStarterChange = this.handleStarterChange.bind(this);
      this.handleFreshYeastChange = this.handleFreshYeastChange.bind(this);
      this.handleDryYeastChange = this.handleDryYeastChange.bind(this);
      this.handleRaisingAgentChange = this.handleRaisingAgentChange.bind(this);
      this.handleMassChange = this.handleMassChange.bind(this);
      this.handleMomentChange = this.handleMomentChange.bind(this);
      this.saveState = this.saveState.bind(this);
      this.hideOrShow = this.hideOrShow.bind(this);
      this.updateHydration = this.updateHydration.bind(this);
      this.updateHydrationRate = this.updateHydrationRate.bind(this);
      this.slideOptions = this.slideOptions.bind(this);
      this.delayedSlideCall = this.delayedSlide; 


      this.state = {
        slide:true,
        show :true,
        breadType: props.breadType,
        baketime:0,
        quantity : 1,
        size : 9,
        temperature : 17,
        fridgetemperature : 5,
        hydration:2,
        hydrationpercent: 67,
        hydrationadjust: 0,
        startermass : 100,
        doughmass : 250,
        freshyeastmass : 30 ,
        dryyeastmass : 7,
        raisingagenttype:'Sourdough', 
        raisingagenttypeval:0,
        moment: moment(), 
        watermass:0,
        saltmass:0,
        starterflourmass:0,
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
        recipe:{
          title:'This is a recipe',
          subtitle:'this is a subtitle',
          imagedescription:'this is an alt text',
          imageUrl:'http://imageUrl',
          ingredients: [
            {
              name: 'flour',
              quantity: 30,
              unit: 'g',
              id: 0
            },
            {
              name: 'water',
              quantity: 30,
              ubit: 'g',
              id: 1
            },
            {
              name: 'yeast',
              quantity: 30,
              ubit: 'g',
              id: 2
            },
            {
              name: 'salt',
              quantity: 30,
              ubit: 'g',
              id: 3
            },
            {
              name: 'starter',
              quantity: 30,
              ubit: 'g',
              id: 4
            },
            {
              name: 'oil',
              quantity: 30,
              ubit: 'g',
              id: 5
            },
            {
              name: 'butter',
              quantity: 30,
              ubit: 'g',
              id: 6
            },
            {
              name: 'eggs',
              quantity: 30,
              ubit: 'g',
              id: 6
            }
          ],
          instructions: [
            {
              id: 0,
              description: 'mix',
              temp: 0,
              start: '00:02',
              duratiob: '00:05'
            },
            {
              id: 1,
              description: 'autolyse',
              temp: 0,
              start: '00:02',
              duratiob: '00:05'
            },
            {
              id: 2,
              description: 'knead',
              temp: 0,
              start: '00:02',
              duratiob: '00:05'
            },
            {
              id: 3,
              description: 'wait',
              temp: 0,
              start: '00:02',
              duratiob: '00:05'
            },
            {
              id: 4,
              description: 'shape',
              temp: 0,
              start: '00:02',
              duratiob: '00:05'
            },
            {
              id: 5,
              description: 'proof',
              temp: 0,
              start: '00:02',
              duratiob: '00:05'
            },
            {
              id: 6,
              description: 'bake',
              temp: 230,
              start: '00:02',
              duratiob: '00:05'
            }
          ]
        },
       
      };
      var flourTypes = [
        'DovesWhiteBread',
        'DovesBrownBread',
        'AllPurpose',
        'FrenchT55',
        'FrenchT65',
        'FrenchT65_mixed_with_DovesWhiteBread',
        'Type00Pasta'
      ];
  
      var loadedStateString = localStorage.getItem('doughProps');
      if (!!loadedStateString){
        var loadedState = JSON.parse(loadedStateString);
        this.state = loadedState;
      }
    }

    saveState(stateToSave){
      this.setState(stateToSave);
      localStorage.setItem('doughProps', JSON.stringify(stateToSave));
    }


    slideOptions = function(event){
      event.persist()
      this.delayedSlideCall()
    };

    delayedSlide = function(){

      var stateToSave = this.state;
      /* Toggle the options slider */
      stateToSave.slide = !stateToSave.slide;
      this.setState(stateToSave);  
    }  

    hideOrShow(){
      this.saveState(state => ({
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
      this.saveState(doughProps);
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
    updateHydration=function(doupghProps) {
      var doughProps = this.state;
      var remainingMass = doughProps.doughmass;
      var hydrate  = doughProps.hydrationpercent+ doughProps.hydrationadjust;
      if(doughProps.raisingagenttypeval===0){
        remainingMass = doughProps.doughmass - doughProps.startermass;
      }
      
      doughProps.watermass = Math.round(remainingMass * (hydrate) / (100 + (hydrate)));
      doughProps.flourmass = remainingMass - doughProps.watermass;
      doughProps.starterflourmass =  doughProps.startermass-Math.round(doughProps.startermass * hydrate / (100 + hydrate));
      doughProps.remainingMass =remainingMass;
      return doughProps;
  
    }

    updateHydrationRate = function(doughProps) {
  
      switch (doughProps.breadType) 
      {
        case 'pizza':
        doughProps.flourType = 'Type00Pasta';
        doughProps.hydrationpercent = 68;
        doughProps.hydrationadjust =0;
          break;
        case 'baguette':
        doughProps.flourType = 'FrenchT65_mixed_with_DovesWhiteBread';
        doughProps.hydrationpercent = 72; 
        doughProps.hydrationadjust = (doughProps.hydration-3)*5;
          break;
        default:
        doughProps.hydrationpercent = 70; 
        doughProps.hydrationadjust = (doughProps.hydration-3)*5;
      }
      
      return this.updateHydration(doughProps);
      
    }
  
   

    calcTimeToRise = function(doughProps){
      doughProps.breadType= this.props.breadType;
      var proofingtimes = doughProps.proofingtimes;
      var roomrisetime = 0 ;
      var fridgerisetime = 0 ;
      if (doughProps.raisingagenttype== 'Sourdough')
      {
        roomrisetime = doughCalc(doughProps.temperature,doughProps.startermass,doughProps.doughmass,0,0);
        fridgerisetime = doughCalc(doughProps.fridgetemperature,doughProps.startermass,doughProps.doughmass,0,0);  
      }
      else
      {
        if(doughProps.raisingagenttype== 'Fresh Yeast')
        {
          roomrisetime = doughCalc(doughProps.temperature,0,doughProps.doughmass,doughProps.freshyeastmass,0);
          fridgerisetime = doughCalc(doughProps.fridgetemperature,0,doughProps.doughmass,doughProps.freshyeastmass,0);
        }
        else
        {
          roomrisetime = doughCalc(doughProps.temperature,0,doughProps.doughmass,0,doughProps.dryyeastmass);
          fridgerisetime = doughCalc(doughProps.fridgetemperature,0,doughProps.doughmass,0,doughProps.dryyeastmass);    
        }

      }
      doughProps.proofingtimes.inroom = roomrisetime;
      doughProps.proofingtimes.infridge = fridgerisetime ;
      doughProps.timeToRise = roomrisetime+fridgerisetime ;
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
        doughProps.roomplusfridgeshape = (new Date(doughProps.desiredDateTime - doughProps.baketime -  (doughProps.proofingtimes.infridge*(60*1000)))).toLocaleString();
        doughProps.fridgeplusroomstart = doughProps.roomplusfridgestart; 
        doughProps.fridgeplusroomshape =  (new Date(doughProps.desiredDateTime - doughProps.baketime - (doughProps.proofingtimes.inroom*(60*1000)))).toLocaleString();


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
//      if (theStarterMass < 1) return 'error';
//      else if (theStarterMass > 50000) return 'error';      
      const theDoughMass = this.state.doughmass;
      if (theDoughMass < 1) return 'error';
      else if (theDoughMass > 50000) return 'error';
      else return 'success';      
    }



    handleMomentChange(value){
      var doughProps = this.state;
      console.log(value.format('DD-MM-YYYY'));
      this.setDesiredStartTime(value.toDate(),doughProps);  
      this.saveState(doughProps);    
    }


    handleChangesToDoughRiseTime(doughProps){
      var newdoughmass; 
      doughProps = this.updateHydrationRate(doughProps);
      if ( doughProps.breadType === "pizza"){
        newdoughmass = pizzaMass( doughProps.size, doughProps.quantity, 'napoletana' ) ; 
      }
      else
      {
        newdoughmass = doughProps.doughmass;
      }
      if (newdoughmass>1 )
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
      this.saveState(doughProps);
      

    }
    handleHydrationChange(value) {
      var doughProps = this.state;
      doughProps.hydration = value; 
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);
    }

    handleSizeChange(value) {
      var doughProps = this.state;
      doughProps.size = value; 
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);

    }
    handleMassChange(value)
    {
      var doughProps = this.state;
      doughProps.size = 9; 
      doughProps.quantity =  value/225;
      doughProps.doughmass =  value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);


    }
    handleStarterChange(value) {
      var doughProps = this.state;
      doughProps.startermass = value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);
    }

    handleDryYeastChange (value) {
      var doughProps = this.state;
      doughProps.dryyeastmass = value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);
    }

    handleFreshYeastChange(value) {
      var doughProps = this.state;
      doughProps.freshyeastmass = value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);
    }

    handleRaisingAgentChange(value) {
      var doughProps = this.state;
      var prevraisingval=0;
      switch (doughProps.raisingagenttype)
      {
        case 'Sourdough': prevraisingval= doughProps.startermass;break;
        case 'Dry Yeast': prevraisingval= doughProps.dryyeastmass*90;break;
        case 'Fresh Yeast': prevraisingval= doughProps.freshyeastmass*21;break;

    }
      switch (value){
        case 0: doughProps.raisingagenttype='Sourdough';
        doughProps.startermass=Math.round(prevraisingval);
        break;
        case 2: doughProps.raisingagenttype='Dry Yeast';
        doughProps.dryyeastmass=Math.round(prevraisingval/90);
        break;
        case 1: doughProps.raisingagenttype='Fresh Yeast';
        doughProps.freshyeastmass=Math.round(prevraisingval/21);
        break;        
      }
      doughProps.raisingagenttypeval=value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);
    }


    handleWantedTimeChange(e) {
      var doughProps = this.state;
      doughProps.desiredTime = e.target.value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);
    }
    handleWantedDateChange(e) {
      var doughProps = this.state;
      doughProps.desiredDate = e.target.value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);
    }
    handleFridgeChange(value) {
      var doughProps = this.state;
      doughProps.fridgetemperature = value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);
    }
    handleTempChange(value) {
      var doughProps = this.state;
      doughProps.temperature = value;
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);
    }

    componentDidUpdate(prevprops) {
      const breadType = this.props.breadType;
      var doughProps = this.state;
      if (breadType!==prevprops.breadType)
      {
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        this.saveState(doughProps);
      }
    }

    render() {
      const breadType = this.props.breadType;
      
      var doughProps = this.state;
      let wrapperClass = 'wrapper medium'  ;
      return(

     <div className="container">

        { doughProps.slide ? 
        <div className="leftbar">
          <div className='theoptions'>
          <form className="form">
            <FormGroup
              controlId="formPizzaQantities"
              validationState={this.getValidationState()}>
              { breadType==='pizza' ? <div> 
            
              <ControlLabel>How Many Pizzas do you want?  {(this.state.breadType==="pizza")}</ControlLabel>
              <InputRange 
              step={1}
              maxValue={15}
              minValue={1}
              value={this.state.quantity}
              onChange={quantity => { this.handleChange(quantity); }} 

              />

              <HelpBlock>This has to be a number between 1 and 5000.</HelpBlock>
              <ControlLabel>How big should they be</ControlLabel>
              <InputRange 
              formatLabel={value =>  `  ${value} "`}
               step={1}
              maxValue={18}
              minValue={7}
              value={this.state.size}
              onChange={size => { this.handleSizeChange(size); } }

              />
              <HelpBlock>This has to be a number between 7 and 18 inches.</HelpBlock> 
              </div> 
           :
              <div>
                <ControlLabel>How large do you want your loaf?</ControlLabel>
                <InputRange 
                formatLabel={value=> `${value} g`}             
                formatMinLabel={250}
                formatMaxLabel={3000}

              step={50}
              maxValue={3000}
              minValue={250}
              value={this.state.doughmass}
              onChange={doughmass => { this.handleMassChange(doughmass); }} 

              />

              <HelpBlock>This has to be a number between 1 and 5000.</HelpBlock>
            </div>
              }
             
             

              <div> This is total mass of dough we need {Math.round((this.state.size*this.state.size/81)*this.state.quantity*225)}g
              </div>
              
              <ControlLabel>What Type of Raising Agent do you want to use?</ControlLabel>
              <InputRange 
              formatLabel={value => {if(value===0){return 'Sour Dough';}if(value===1){return 'Fresh Yeast';}return 'Dry Yeast'; }}
              formatMinLabel={'Sour Dough'}
              formatMaxLabel={'Dry Yeast'}
              step={1}
              maxValue={2}
              minValue={0}
              value={this.state.raisingagenttypeval}
              onChange={raisingagent => { this.handleRaisingAgentChange(raisingagent); }} 

              />
              <HelpBlock></HelpBlock>
              { doughProps.raisingagenttypeval===0 ? 
                  <div> 

                  <ControlLabel>How Much Starter do you have?</ControlLabel>
                  <InputRange 
                  formatLabel={value => ` ${value} g`}
                  step={Math.round(this.state.doughmass/60)}
                  maxValue={Math.round(this.state.doughmass/2)}
                  minValue={1}
                  value={this.state.startermass}
                  onChange={startermass => { this.handleStarterChange(startermass); }} 

                  />
                  <HelpBlock>This has to be a number between 10 and 5000.</HelpBlock>
                    </div>:<div>
                  {  doughProps.raisingagenttypeval===2 ?
                    <div>
                      <ControlLabel>How Much Dry Yeast do you want to use?</ControlLabel>
                      <InputRange 
                      formatLabel={value => ` ${value} g`}
                      step={0.5}
                      maxValue={Math.round(this.state.doughmass/90)}
                      minValue={1}
                      value={this.state.dryyeastmass}
                      onChange={dryyeastmass => { this.handleDryYeastChange(dryyeastmass); }} 

                      />


                    </div>:<div> 

                      <HelpBlock>This has to be a number between 10 and 5000.</HelpBlock>
                    <ControlLabel>How Much Fresh Yeast do you want to use?</ControlLabel>
                    <InputRange 
                    formatLabel={value => ` ${value} g`}
                    step={1}
                    maxValue={Math.round(this.state.doughmass/(21))}
                    minValue={1}
                    value={this.state.freshyeastmass}
                    onChange={freshyeastmass => { this.handleFreshYeastChange(freshyeastmass); }} 

                    />
                    <HelpBlock>This has to be a number between 10 and 5000.</HelpBlock>

                    </div> }
                </div>                  
              }
            <ControlLabel>How much hydration ?</ControlLabel>
             <InputRange 
                formatLabel={value => {if(value<3){return 'Low';}if(value>4){return 'High';}return 'Medium'; }}
                formatMinLabel={' Low Hydration'}
              formatMaxLabel={' High Hydration'}

           step={1}
           maxValue={5}
           minValue={1}
           value={this.state.hydration}
           onChange={hydration => { this.handleHydrationChange(hydration); }} 

           />

           <HelpBlock>This has to be a number between 1 and 3.</HelpBlock>
        


              <div onTouchStart={this.hideOrShow}  ><h4>
          {this.state.show?<span> + Enter the desired time</span> : <span> - Close time entry</span> }
              </h4></div>
              <div className={(this.showClass)}>

                <ControlLabel>Which day do you want it</ControlLabel>
                <div className={wrapperClass}>
                  <BigInputMoment
                    moment={moment(this.state.moment)}
                    showSeconds={false}
                    onChange={mom => { var doughProps=this.state; doughProps.moment= mom;this.saveState(doughProps);  this.handleMomentChange(mom);}}
                    locale="en"
                  />
                </div>
              </div>
              <ControlLabel>How warm is the room?</ControlLabel>
              <InputRange 
              formatMinLabel={value => ' Min ${value} g'}
              formatMaxLabel={value => ' Max ${value} g'}
              step={1}
              maxValue={35}
              minValue={0}
              value={this.state.temperature}
              onChange={temperature => { this.handleTempChange(temperature); }} 

              />
              <HelpBlock>This has to be a number between 4 and 35.</HelpBlock>
              <ControlLabel>How cold is the fridge?</ControlLabel>
              
              <InputRange 
              formatMinLabel={value => ' Min ${value} g'}
              formatMaxLabel={value => ' Max ${value} g'}
              step={1}
              maxValue={35}
              minValue={0}
              value={this.state.fridgetemperature}
              onChange={fridgetemperature => { this.handleFridgeChange(fridgetemperature); }} 

              />

              <HelpBlock>This has to be a number between 4 and 35.</HelpBlock>



            </FormGroup>
            </form>
          
          </div>
          <div className='slideBar' onClick={(this.slideOptions)}   ></div>  
          </div> :
          <div className='slideBar second' onClick={(this.slideOptions)}  ></div>}
        <div className="center">

            <DisplayQuantitiesTimesTab 
            hydrationpercent={this.state.hydrationpercent}  
            hydrationadjust={this.state.hydrationadjust}  
            fridgeplusroomshape={this.state.fridgeplusroomshape} 
            roomplusfridgeshape={this.state.roomplusfridgeshape}  
            doughmass={this.state.doughmass}   
            watermass  = {this.state.watermass}
            flourmass = {this.state.flourmass}
            flourType={this.state.flourType}
            raisingagenttype={this.state.raisingagenttypeval} 
            freshyeastmass={this.state.freshyeastmass} 
            dryyeastmass={this.state.dryyeastmass} 
            startermass={this.state.startermass} 
            starterflourmass={this.state.starterflourmass}
            baketime={this.state.baketime} 
            breadType={this.state.breadType} 
            infridge={this.state.proofingtimes.infridge} 
            fridgestart={this.state.fridgestart} 
            fridgeshape={this.state.fridgeshape} 
            roomshape={this.state.roomshape} 
            roomstart={this.state.roomstart} 
            inroom={this.state.proofingtimes.inroom} 
            roomplusfridgestart={this.state.roomplusfridgestart} 
            fridgeplusroomstart={this.state.fridgeplusroomstart} />

        </div>
          <div className='right'>
          </div>
      </div>);
      }  
    }
  
        //   <TitleComp title={this.state.recipe.title} subtitle={this.state.recipe.subtitle}/>             
        //   <ImageComp imagedescription={this.state.recipe.imagedescription} imageUrl={this.state.recipe.ImageUrl}/> 
  
  export default QuantitiesAndTimes;