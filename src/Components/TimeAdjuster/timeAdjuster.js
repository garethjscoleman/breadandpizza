import React from 'react';
import {  ControlLabel,  HelpBlock, Modal, Button }  from 'react-bootstrap';
import InputRange from 'react-input-range';
import { BigInputMoment} from 'react-input-moment';
import moment from 'moment';


class TimeAdjuster extends React.Component {
    constructor(props, context) {
        super(props, context);
        var showClass = "Hide";
        this.showClass = showClass;
        this.hideOrShow = this.hideOrShow.bind(this);
        this.saveState = this.saveState.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
      
        this.state = {
          show :false,
          themoment: moment(),
          thetest:'',
          datePickerMoment: moment(),
          datePickerRangeStartMoment: moment(),
          datePickerRangeEndMoment: moment(),
          timePickerMoment: moment(),
          showSeconds: true,
          locale: 'en',
          size: 'medium'
        };
    }

    shouldComponentUpdate(nextProps, nextState ){
      if (nextProps.moment2 === this.props.moment2 && this.state.themoment._d.toISOString() === nextState.themoment._d.toISOString() && this.state.show === nextState.show && this.props.fridgetemperature === nextProps.fridgetemperature && this.props.temperature === nextProps.temperature )
      {
        
        return false;
      }
      else
      {
        //this props have changed - make sure that the other state has caught up
        return true;
      }

    }


    componentWillMount(){
      this.setState({show : this.props.show, themoment : moment(this.props.moment2)});
    }
    handleTimeChange(value){
      this.props.handleWantedTimeChange();
    }
    saveState(stateToSave){
        this.setState(stateToSave);
    }
  
  
    hideOrShow(){
        var newstate= {show: !this.state.show}
        this.saveState(newstate);
          
        this.show = !this.show;
        if(this.show)
        {
          this.showClass = 'Show';
        }
        else
        {
          this.showClass = 'Hide';
          this.props.handleWantedTimeChange(moment(this.props.moment2));

        }
  
    }
  
  
  render() {
    let wrapperClass = 'wrapper medium'  ;
    let themoment = moment(this.props.moment2);
    let showSeconds = this.state.showSeconds;
    let locale = this.state.showSeconds;
    return (
        <>
        <div onTouchStart={this.hideOrShow}  onClick={this.hideOrShow} >
        <i className="fa fa-wrench fa-clock-o fa-2x" ></i>
       </div>
      <Modal show={this.state.show} onHide={this.hideOrShow}>
        <Modal.Header closeButton  >
            <Modal.Title>Adjustments for Time </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className={(this.showClass)}>

                <ControlLabel>Which day do you want it</ControlLabel>

                <div className={wrapperClass}>
                  <BigInputMoment
                    moment={themoment}
                    locale={locale}
                    showSeconds={showSeconds}
                    onChange={this.props.handleWantedTimeChange }
                  />
                </div>


            </div>
              
        


              <ControlLabel>How warm is the room&#63;</ControlLabel>
              <InputRange 
              formatMinLabel={value => " Min "+ value +" g"}
              formatMaxLabel={value => " Max "+ value + " g"}
              step={1}
              maxValue={35}
              minValue={0}
              value={(this.props.temperature)}
              onChange={this.props.handleTemperatureChange} 

              />
              <HelpBlock>This has to be a number between 4 and 35.</HelpBlock>
              <ControlLabel>How cold is the fridge&#63;</ControlLabel>
              
              <InputRange 
              formatMinLabel={value => "Min " + value + " g"}
              formatMaxLabel={value => "Max " + value + " g"}   
              step={1}
              maxValue={35}
              minValue={0}
              value={(this.props.fridgetemperature)}
              onChange={this.props.handleFridgeTemperatureChange} 

              />

              <HelpBlock>This has to be a number between 4 and 35.</HelpBlock>

        
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary" onClick={this.hideOrShow}>Close</Button>
        </Modal.Footer>
        </Modal>
    </>
    )
  }
 }

 export default TimeAdjuster;