
import React from 'react';
import { NearestTime, NearestDurationFormatted, NearestDuration} from './../../Services/timeHelper/timeHelper';

import recipeContext from './../../Context/context';

class DisplayQuantitiesAndTimes extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.doughProps = null;
    this.doughProps =this.context; 
  }


    render() {


      return (
        <div>
            Approx {NearestDuration(Math.round(this.props.baketime[0]/60000))} minutes for {(this.props.breadTitle)} of this size <br/>
              Time of {(this.props.location[0])} rise is:  {NearestDuration(this.props.time[0])} mins.(that is about {(Math.round(this.props.time[0]/6)/10)} hours   )<br/>
              {this.props.location.length>1? 
            <div>Time of {(this.props.location[1])} rise is:  {NearestDuration(this.props.time[1])} mins.(that is about {(Math.round(this.props.time[1]/6)/10)} hours )<br/ ></div> : <span/> }
              Start: {NearestTime(this.props.interfere[0])}  in {(this.props.location[0])}
              {this.props.time.length>1 ? <span><br/> , then move to  {(this.props.location[1])} at {(this.props.interfere[1])}   </span> :<span> </span> } <br/>          
               Do a shape around {NearestTime(this.props.interfere[1])} to achieve the desired rise  {(this.props.title)}<br/>
        </div>
      );
    }
  }

  DisplayQuantitiesAndTimes.contextType = recipeContext;

  export default DisplayQuantitiesAndTimes;