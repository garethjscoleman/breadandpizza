import   React                      from 'react';
import { FormGroup, Tabs,Tab}       from 'react-bootstrap';
import   DisplayQuantitiesTimesTab  from './../displayQuantitiesTimesTab/displayQuantitiesTimesTab'; 
import   TitleComp                  from './../titleComp/titleComp';
import   ImageComp                  from './../imageComp/imageComp';
import   AdjustersComp              from '../adjustersComp/adjustersComp';
import   DescriptionComp            from './../descriptionComp/descriptionComp';
import   StepsContainerComp         from './../stepsContainerComp/stepsContainerComp';
import  IngredientsList            from './../ingredientList/ingredientList';
import { doughCalc }                from './../../Services/doughCalc';
import { pizzaMass }                from './../../Services/doughCalc';
import { bakeTime }                 from './../../Services/doughCalc';
import { timeCalc }                 from './../../Services/doughCalc' ;
import   moment                     from 'moment';
import  { getrecipelist,  validateRecipe}                 from './../../RecipeList/recipelist';
import { RecipeProvider }           from "./../../Context/context";
import {NearestTime,  NearestDuration} from './../../Services/timeHelper/timeHelper';

import './quantitiesAndTimes.css';
import "react-input-range/lib/css/index.css"

class QuantitiesAndTimes extends React.Component {

    constructor(props) {
      super(props)
      var showClass = "Hide";
      this.showClass = showClass;
      this.handleChange = this.handleChange.bind(this);
      this.handleHydrationChange = this.handleHydrationChange.bind(this);
      this.handleSizeChange = this.handleSizeChange.bind(this);            
      this.handleFridgeChange = this.handleFridgeChange.bind(this);
      this.handleTempChange = this.handleTempChange.bind(this);
      this.setDesiredStartTime = this.setDesiredReadyTime.bind(this);
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
      this.changeRecipe = this.changeRecipe.bind(this);
      this.slideOptions = this.slideOptions.bind(this);
      this.bestGuessRoomChange = this.bestGuessRoomChange.bind(this);
      this.delayedSlideCall = this.delayedSlide; 
      this.changeMode = this.changeMode.bind(this); 
      this.handleSelect = this.handleSelect.bind(this);
      this.recipe = {};
      var recipeTitle = this.props.match.params.recipeid;
      this.recipelist = getrecipelist();
      var recipe = this.recipelist.filter(recipe => recipeTitle === recipe.title)[0] ;
  
      this.state = {
        version:'0.2',    
        mode:'room',
        slide:false,
        show :false,
        baketime:0,
        quantity : 1,
        size : 9,
        temperature : 17,
        fridgetemperature : 5,
        hydration:3,
        hydrationpercent: 67,
        hydrationadjust: 0,
        startermass : 100,
        doughmass : 250,
        freshyeastmass : 30 ,
        dryyeastmass : 7,
        raisingagenttype:'Sourdough', 
        raisingagenttypeval:0,
        moment: moment()._d.toISOString(), 
        watermass:0,
        saltmass:0,
        eggmass:0,
        milkmass:0,
        oilmass:0,
        starterflourmass:0,
        desiredDate: '1999-12-31',
        desiredTime: '23:59',
        desiredDateTime : 0,
        duration:0,
        roomstart: 0 ,
        roomshape:0,
        nicestart :'',
        fridgestart : 0,
        fridgeshape : 0,
        roomplusfridgestart:0,
        roomplusfridgeshape:0,
        fridgeplusroomstart:0,
        fridgeplusroomshape:0,
        proofingtimes : {
          inroom : 0,
          infridge : 0
        },
        timeToRise:0,
        recipeid: recipe.recipeid ,
        recipe:recipe,
        success:'',
      };
      //var flourTypes = [
      //  'DovesWhiteBread',
      //  'DovesBrownBread',
      //  'AllPurpose',
      //  'FrenchT55',
      //  'FrenchT65',
      //  'FrenchT65_mixed_with_DovesWhiteBread',
      //  'Type00Pasta'
      //];
      var loadedStateString = localStorage.getItem('doughProps');
      if (!!loadedStateString){
        var loadedState = JSON.parse(loadedStateString);
        if (loadedState.version === this.state.version)
        {
          this.state = loadedState;
          //now navigate to the appropriate location to match the recipe
          if (this.state.recipe.recipeid !== recipe.recipeid)
          {
             
          }
        }
        else
        {
          //upgrade the stored data if possible....
        }
      }
    }

    saveState(stateToSave){
      this.setState(stateToSave);
      localStorage.setItem('doughProps', JSON.stringify(stateToSave));
      localStorage.setItem('version', JSON.stringify(stateToSave.version));
    }

    changeMode(){
      var doughProps = this.state;
      switch (doughProps.mode) {
        case 'room':
          doughProps.mode = 'fridge';
          break;
        case 'fridge':
            doughProps.mode = 'fridgeroom';
            break;
        case 'fridgeroom':
            doughProps.mode = 'roomfridge';
            break;
        default:
          doughProps.mode= 'room';
          break;
      }
      doughProps = this.handleChangesToDoughRiseTime(doughProps);
      this.saveState(doughProps);
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
      try 
      {
        var theDate = new Date();
        theDate.setHours( theDate.getHours()+6);
        
        var doughProps = this.state;
        if (doughProps.desiredDateTime -100000 < theDate)
        {
          doughProps = this.setDesiredReadyTime(theDate, doughProps);
          doughProps = this.handleChangesToDoughRiseTime(doughProps);
        }
        var recipeTitle = this.props.match.params.recipeid;
        if (recipeTitle !== doughProps.recipe.title )
        {
          this.recipelist = getrecipelist();
          var recipe = this.recipelist.filter(recipe => recipeTitle === recipe.title)[0] ;
          doughProps.recipe = this.changeRecipe(recipe.recipeid);
          doughProps.recipeid = recipe.recipeid;
          doughProps = this.handleChangesToDoughRiseTime(doughProps);
        }
        this.saveState(doughProps);

      }
      catch {
        console.log("Error setting desired time  quantitiesAndTimes.js");
      }
    }
  
    handleSelect(key) {
      this.setState({ key });
    }
     
    changeRecipe(newID){
      try {
        var doughProps = this.state;
        //checkrecipeexists
        this.recipelist = getrecipelist();
        var foundrecipe = this.recipelist.find(function(arecipe) {
          return arecipe.recipeid === newID;
        });
        if (!!foundrecipe)
        {
          this.recipe=foundrecipe;
          doughProps.recipeid=newID;
          doughProps.success='';
          doughProps.flourType= this.recipe.flourcomponents[0].flourTypeName;
          doughProps.recipe = foundrecipe;
          doughProps.hydrationpercent = doughProps.recipe.basehydration; 
          doughProps.hydrationadjust = (doughProps.hydration-3)*5;
          doughProps.recipe = validateRecipe(doughProps.recipe, doughProps.doughmass,doughProps.startermass, doughProps.hydrationpercent + doughProps.hydrationadjust, doughProps.raisingagenttype );


          this.saveState(doughProps);   
          
          
        }
      }
      catch {
        console.log("Error changing recipe -  quantitiesAndTimes.js");
      }

      return foundrecipe;
    }

    setDesiredReadyTime(theTimetoBeReady, doughProps){
      try 
      {      
        //we need a point a bit in the future - try 6 hours 
        //today = today.addHours(6);
        var dd = theTimetoBeReady.getDate();
        var mm = theTimetoBeReady.getMonth() + 1; //January is 0!      
        var yyyy = theTimetoBeReady.getFullYear();
        var HH = theTimetoBeReady.getHours();
        var nn = theTimetoBeReady.getMinutes();

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
        doughProps.desiredDateTime = Date.parse(doughProps.desiredDate + ' ' + doughProps.desiredTime);
        doughProps.success='';
      }
      catch {
        console.log("Error setting desired ready time  quantitiesAndTimes.js");
      }
      return doughProps;
    }

    updateHydration=function(doughProps) {
      try 
      {  
        doughProps = this.state;
        var remainingMass = doughProps.doughmass;
        var hydrate  = doughProps.hydrationpercent+ doughProps.hydrationadjust;
        if(doughProps.raisingagenttypeval===0){
          remainingMass = doughProps.doughmass - doughProps.startermass;
        }
        
        doughProps.watermass = Math.round(remainingMass * (hydrate) / (100 + (hydrate)));
        doughProps.flourmass = remainingMass - doughProps.watermass;
        doughProps.starterflourmass =  doughProps.startermass-Math.round(doughProps.startermass * hydrate / (100 + hydrate));
        doughProps.remainingMass =remainingMass;
      }
      catch {
        console.log("Error updating hydration  quantitiesAndTimes.js");
      }

      return doughProps;
  
    }

    updateHydrationRate = function(doughProps) {
      try {
        switch (doughProps.recipe.Title) 
        {
          case 'Pizza':
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
          doughProps.hydrationpercent = doughProps.recipe.basehydration; 
          doughProps.hydrationadjust = (doughProps.hydration-3)*5;
        }
        doughProps.recipe = validateRecipe(doughProps.recipe, doughProps.doughmass,doughProps.startermass, doughProps.hydrationpercent + doughProps.hydrationadjust, doughProps.raisingagenttype );
      }
      catch {
        console.log("Error updating hydration rate  quantitiesAndTimes.js");
      }
      
      return this.updateHydration(doughProps);
      
    }
  
    calcTimeToRise = function(doughProps){
      try {
        var roomrisetime = 0 ;
        var fridgerisetime = 0 ;
        this.recipelist = getrecipelist();

        var flourType ='';
        if (!!doughProps.recipe){
          flourType = doughProps.recipe.flourcomponents[0].flourTypeName;
        }
        var regex='Rye'
        var flourTypeName = "Wheat";
        if (!!flourType.match(regex))
        {
          flourTypeName = "Rye";
        }
        if (doughProps.raisingagenttype === 'Sourdough')
        {
          roomrisetime = doughCalc(doughProps.temperature,doughProps.startermass,doughProps.doughmass,0,0,flourTypeName);
          fridgerisetime = doughCalc(doughProps.fridgetemperature,doughProps.startermass,doughProps.doughmass,0,0,flourTypeName);  
        }
        else
        {
          if(doughProps.raisingagenttype=== 'Fresh Yeast')
          {
            roomrisetime = doughCalc(doughProps.temperature,0,doughProps.doughmass,doughProps.freshyeastmass,0,'Wheat');
            fridgerisetime = doughCalc(doughProps.fridgetemperature,0,doughProps.doughmass,doughProps.freshyeastmass,0,'Wheat');
          }
          else
          {
            roomrisetime = doughCalc(doughProps.temperature,0,doughProps.doughmass,0,doughProps.dryyeastmass,'Wheat');
            fridgerisetime = doughCalc(doughProps.fridgetemperature,0,doughProps.doughmass,0,doughProps.dryyeastmass,'Wheat');    
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
          doughProps.baketime = bakeTime(doughProps.recipe.Title,doughProps.doughmass);
          doughProps.roomstart =  (new Date(doughProps.desiredDateTime - doughProps.baketime - (2*doughProps.proofingtimes.inroom*(60*1000)))).toISOString();
          doughProps.fridgestart =  (new Date(doughProps.desiredDateTime - doughProps.baketime - (2*doughProps.proofingtimes.infridge*(60*1000)))).toISOString();
          doughProps.roomplusfridgestart =  (new Date(doughProps.desiredDateTime - doughProps.baketime - ((doughProps.proofingtimes.infridge+doughProps.proofingtimes.inroom)*(60*1000)))).toISOString();
          var start = doughProps.roomplusfridgestart;
          var duration =         
          duration = doughProps.proofingtimes.infridge + doughProps.proofingtimes.inroom;

          switch (doughProps.mode) {
            case 'room':
              start = doughProps.roomstart;
              duration = doughProps.proofingtimes.inroom*2;
              break;
            case 'fridge':
              start = doughProps.fridgestart;
              duration = doughProps.proofingtimes.infridge*2;
                break;
            default:
              break;
          }
          doughProps.duration = duration;
          doughProps.nicestart = NearestTime(new Date (start)); 
          doughProps.nicefinishtime = NearestTime(new Date(doughProps.moment));
          doughProps.nicebaketime = NearestDuration(doughProps.baketime/(60*1000));
          doughProps.roomshape = (new Date(doughProps.desiredDateTime - doughProps.baketime -  (doughProps.proofingtimes.inroom*(60*1000)))).toISOString();        
          doughProps.fridgeshape =  (new Date(doughProps.desiredDateTime - doughProps.baketime -  (doughProps.proofingtimes.infridge*(60*1000)))).toISOString();
          doughProps.roomplusfridgeshape = (new Date(doughProps.desiredDateTime - doughProps.baketime -  (doughProps.proofingtimes.infridge*(60*1000)))).toISOString();
          doughProps.fridgeplusroomstart = doughProps.roomplusfridgestart; 
          doughProps.fridgeplusroomshape =  (new Date(doughProps.desiredDateTime - doughProps.baketime - (doughProps.proofingtimes.inroom*(60*1000)))).toISOString();


        }
      }
      catch {
        console.log("Error calculating time to rise  quantitiesAndTimes.js");
      }

      return doughProps;
    }

    

     getValidationState = function() {
      try {

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
        
  //      if (theStarterMass < 1) return 'error';
  //      else if (theStarterMass > 50000) return 'error';      
        const theDoughMass = this.state.doughmass;
        if (theDoughMass < 1) return 'error';
        else if (theDoughMass > 50000) return 'error';
        else return 'success';      
      }
      catch {
        console.log("Error obtaining validation state  quantitiesAndTimes.js");
      }
      return 'error'

    }



    handleMomentChange(value){
      try {
        var doughProps = this.state;
        doughProps.moment= value._d.toISOString();
        console.log(value._d.toISOString());
        doughProps = this.setDesiredReadyTime(value.toDate(),doughProps);  
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        this.saveState(doughProps);    
      }
      catch {
        console.log("Error updating moment  quantitiesAndTimes.js");
      }
        
    }


    handleChangesToDoughRiseTime(doughProps){
      try {
        var newdoughmass; 
        doughProps = this.updateHydrationRate(doughProps);
        if ( doughProps.recipe.Title === "Pizza"){
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
          if (startermass> 0.75* newdoughmass ){
            var newstartermass = Math.round(0.75* newdoughmass);
            if (newstartermass>1)
            {
              doughProps.startermass = newstartermass;
            }
          }                
          doughProps = this.calcTimeToRise(doughProps);
        }
      }
      catch {
        console.log("Error updating dough mass  quantitiesAndTimes.js");
      }

      return doughProps;

    }

  
    handleChange(value) {
      try {
        var doughProps = this.state;
        doughProps.quantity = value; 
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        doughProps.success='';
        this.saveState(doughProps);
      }
      catch {
        console.log("Error updating input values  quantitiesAndTimes.js");
      }
      

    }

    bestGuessRoomChange() {
      try {

        var doughProps = this.state;
        var theDate = new Date();
        var desireddatetime = new Date(doughProps.desiredDate + " " + doughProps.desiredTime);
        var diffMs = desireddatetime - (doughProps.baketime) - theDate ;
        var diffMins = -15 + (0.5*Math.round(diffMs / 60000)); // minutes - note we need 2 rises so divide the time in 2 . although they don't have to be equal in length.
        var dryyeastmass = 0;
        var freshyeastmass = 0;
        var startermass = 0;
        switch (doughProps.raisingagenttype)
        {
          case 'Sourdough': startermass = doughProps.startermass  ;break;
          case 'Dry Yeast':  dryyeastmass = doughProps.dryyeastmass;break;
          case 'Fresh Yeast': freshyeastmass = doughProps.freshyeastmass;break;
          default:
        }



        var newrecipe = timeCalc(doughProps.temperature,doughProps.fridgetemperature, startermass,doughProps.doughmass,freshyeastmass,dryyeastmass,diffMins,doughProps.mode);
        if (newrecipe.achievedTime)
        {
          doughProps.startermass=0;
          doughProps.freshyeastmass=0;
          doughProps.dryyeastmass=0;
          doughProps.mode=newrecipe.mode;
          switch (doughProps.raisingagenttype)
          {
            case 'Sourdough': doughProps.startermass = newrecipe.startermass ; ;break;
            case 'Dry Yeast':  doughProps.dryyeastmass = newrecipe.dryyeastmass;break;
            case 'Fresh Yeast': doughProps.freshyeastmass = newrecipe.freshyeastmass;break;
            default:
          }
          doughProps.success='yes';
        }
        else
        {
          doughProps.success='no';
        }
        console.log('success');
        console.log(doughProps.success);


        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        this.saveState(doughProps);
      }
      catch {
        console.log("Error after room temp change  quantitiesAndTimes.js");
      }
      

    }

    handleHydrationChange(value) {
      try {

        var doughProps = this.state;
        doughProps.hydration = value; 
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        this.saveState(doughProps);
      }
      catch {
        console.log("Error with hydration change  quantitiesAndTimes.js");
      }
    }

    handleSizeChange(value) {
      try {

        var doughProps = this.state;
        doughProps.size = value; 
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        doughProps.success='';
        this.saveState(doughProps);
      }
      catch {
        console.log("Error after size change  quantitiesAndTimes.js");
      }

    }
    handleMassChange(value)
    {
      try {

        var doughProps = this.state;
        doughProps.size = 9; 
        doughProps.quantity =  value/225;
        doughProps.doughmass =  value;
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        doughProps.success='';
        this.saveState(doughProps);
      }
      catch {
        console.log("Error in mass change  quantitiesAndTimes.js");
      }


    }
    handleStarterChange(value) {
      try {
        var doughProps = this.state;
        doughProps.startermass = value;
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        doughProps.success='';
        this.saveState(doughProps);
      }
      catch {
        console.log("Error in Starter change  quantitiesAndTimes.js");
      }
    }

    handleDryYeastChange (value) {
      try {
        var doughProps = this.state;
        doughProps.dryyeastmass = value;
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        doughProps.success='';
        this.saveState(doughProps);
      }
      catch {
        console.log("Error in dry yeast change quantitiesAndTimes.js");
      }

    }

    handleFreshYeastChange(value) {
      try {
        var doughProps = this.state;
        doughProps.freshyeastmass = value;
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        doughProps.success='';
        this.saveState(doughProps);
      }
      catch {
        console.log("Error in fresh yeast change  quantitiesAndTimes.js");
      }

    }

    handleRaisingAgentChange(value) {
      try {
        var doughProps = this.state;
        var prevraisingval=0;
        switch (doughProps.raisingagenttype)
        {
          case 'Sourdough': prevraisingval= doughProps.startermass;break;
          case 'Dry Yeast': prevraisingval= Math.round(doughProps.dryyeastmass*90);break;
          case 'Fresh Yeast': prevraisingval= Math.round(doughProps.freshyeastmass*21);break;
          default: prevraisingval = doughProps.startermass;
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
          default:
              doughProps.raisingagenttype='Sourdough';
        }
        doughProps.raisingagenttypeval=value;
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        doughProps.success='';
        this.saveState(doughProps);
      }
      catch {
        console.log("Error changing raising agent  quantitiesAndTimes.js");
      }

    }


    handleFridgeChange(value) {
      try {
        var doughProps = this.state;
        doughProps.fridgetemperature = value;
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        doughProps.success='';
        this.saveState(doughProps);
      }
      catch {
        console.log("Error in fridge change  quantitiesAndTimes.js");
      }

    }
    handleTempChange(value) {
      try {
        var doughProps = this.state;
        doughProps.temperature = value;
        doughProps = this.handleChangesToDoughRiseTime(doughProps);
        doughProps.success='';
        this.saveState(doughProps);
      }
      catch {
        console.log("Error in temperature change  quantitiesAndTimes.js");
      }
    }

    componentWillReceiveProps(nextProps) {
      // Any time props.email changes, update state.
      if (nextProps.match.params.recipeid !== this.props.match.params.recipeid) {
      }
    }
    componentDidUpdate(prevprops) {
      try {

        var recipeTitle = this.props.match.params.recipeid;
        this.recipelist = getrecipelist();
        var recipe = this.recipelist.filter(recipe => recipeTitle === recipe.title)[0] ;
  

        var doughProps = this.state;

        if (recipeTitle !== prevprops.match.params.recipeid  && typeof(recipe) !== 'undefined' )
        {
          doughProps.recipe = this.changeRecipe(recipe.recipeid);
          doughProps.recipeid = recipe.recipeid;
          doughProps = this.handleChangesToDoughRiseTime(doughProps);
          this.saveState(doughProps);
        
        }
      }
      catch {
        console.log("Error after component updates  quantitiesAndTimes.js");
      }

    }


    render() {
      
      var doughProps = this.state;
      return(
    
     <div className="container">
        <RecipeProvider value={doughProps}>
          <div className="center">      
            <TitleComp title={(this.recipelist[this.state.recipeid].title)} subtitle={(this.recipelist[this.state.recipeid].subtitle)}/>
            <ImageComp imagedescription={(this.recipelist[this.state.recipeid].imagedescription)} imageUrl={(this.recipelist[this.state.recipeid].imageUrl)}/>
            <AdjustersComp 
              mode={(this.state.mode)}
              changemode = {this.changeMode}
              baketime={(this.state.baketime/(60*1000))  }
              starttime={(this.state.nicestart)}
              finishtime={(this.state.moment)}
              nicestart ={(this.state.nicestart)} 
              nicebaketime  ={(this.state.nicebaketime)}
              nicefinishtime ={(this.state.nicefinishtime)} 
              duration={(this.state.duration)}
              desiredready={(this.state.desiredDateTime)}
              servings={(Math.round(this.state.doughmass/220))}
              moment={(this.state.moment)}
              handleWantedTimeChange={mom => { this.setState({thetest:mom._d.toISOString()}); this.handleMomentChange(mom);}} 
              temperature={(this.state.temperature)}
              handleTemperatureChange={temperature => { this.handleTempChange(temperature); }}
              fridgetemperature={(this.state.fridgetemperature)}
              handleFridgeTemperatureChange={fridgetemperature => { this.handleFridgeChange(fridgetemperature); }}
              breadTitle={(this.state.recipe)} 
              quantity={(this.state.quantity)}
              size={(this.state.size)}
              handleQuantityChange={quantity =>  this.handleChange(quantity) }
              handleSizeChange={size =>  this.handleSizeChange(size)}
              doughMass={(this.state.doughmass)}
              handleDoughMassChange={doughmass =>  this.handleMassChange(doughmass)}
              starterMass={(this.state.startermass)}
              handleStarterMassChange={startermass =>  this.handleStarterChange(startermass)}
              raisingagenttypeval={(this.state.raisingagenttypeval)}
              handleRaisingAgentChange={raisingagent =>  this.handleRaisingAgentChange(raisingagent)}
              dryyeastmass = {(this.state.dryyeastmass)}
              handleDryYeastChange={dryyeastmass =>  this.handleDryYeastChange(dryyeastmass)}
              freshyeastmass = {(this.state.freshyeastmass)}
              handleFreshYeastChange={freshyeastmass =>  this.handleFreshYeastChange(freshyeastmass)}
              hydration={(this.state.hydration)}
              handleChangeHydration={hydration => { this.handleHydrationChange(hydration); }}
              bestGuess = {() => this.bestGuessRoomChange()}
              difficulty={(this.recipelist[this.state.recipeid].difficulty)}
              success={(this.state.success)}
    />
            <form className="form">
              <FormGroup
                controlId="formPizzaQantities"
                validationState={this.getValidationState()}>

              </FormGroup>
            </form>

            <DescriptionComp  description={(this.recipelist[this.state.recipeid].description)}    />
            <Tabs
              activeKey={this.state.tabkey}
              onSelect={this.handleSelect}
              id="controlled-tab-example"
              >
              <Tab eventKey={1} title="Instructions"  >
                <StepsContainerComp recipeid={(this.state.recipeid)} totalMass={(this.state.doughmass)} starterMass={(this.state.startermass)} />
              </Tab>
              <Tab eventKey={2} title="Ingredients">
                <IngredientsList recipeid={(this.state.recipeid)}  totalMass={(this.state.doughmass)} starterMass={(this.state.startermass)}  />
              </Tab>
            </Tabs>
            <DisplayQuantitiesTimesTab 
            baketime={this.state.baketime} 
            breadTiTle={this.state.recipe.Title} 
            infridge={this.state.proofingtimes.infridge} 
            fridgestart={this.state.fridgestart} 
            fridgeshape={this.state.fridgeshape} 
            roomshape={this.state.roomshape} 
            roomstart={this.state.roomstart} 
            inroom={this.state.proofingtimes.inroom} 
            roomplusfridgestart={this.state.roomplusfridgestart} 
            fridgeplusroomstart={this.state.fridgeplusroomstart}
            fridgeplusroomshape={this.state.fridgeplusroomshape} 
            roomplusfridgeshape={this.state.roomplusfridgeshape} />
          </div>
        </RecipeProvider>
      </div>);
  }  
}

                    
            
  
  export default QuantitiesAndTimes;