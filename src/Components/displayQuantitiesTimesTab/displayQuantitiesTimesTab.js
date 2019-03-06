
import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Tabs,Tab}  from 'react-bootstrap';
import  DoughHydration from '../doughHydration/doughHydration';
import DisplayQuantitiesAndTimes from './../displayQuantitiesAndTimes/displayQuantititesAndTimes'; 

class DisplayQuantitiesTimesTab extends React.Component {
  
  
  constructor(props, context) {
    var start = 0;
    var place = 0;
    var shape = null;
    var breadType = '';
    var title = '';
    var interfere = [0];
    var baketime =  [0];
    var time = [0];
    var location=[''];
  
  
    super(props, context);

      this.handleSelect = this.handleSelect.bind(this);
      this.ensureDisplayOnNav = this.ensureDisplayOnNav.bind(this);
                             this.state = {
        key: 1
      };

      const theDoughProps = this.props.doughProps;
      this.breadType = this.props.breadType;
      this.baketime =  [this.props.baketime] ;     
      this.handleSelect(1);
      
    }

    handleSelect(key) {
      this.setState({ key });
      this.ensureDisplayOnNav(key);
    }

    ensureDisplayOnNav(key){
      switch (key) {
        case 2 :
          this.title = 'In Fridge';
          this.time = [this.props.infridge];
          this.interfere = [this.props.fridgestart,this.props.fridgeshape];
          this.location = ['fridge'];
          break;
        case 3 :
          this.title = 'In Room, then Fridge';
          this.time = [this.props.inroom,this.props.infridge];
          this.interfere = [this.props.roomplusfridgestart,this.props.roomplusfridgeshape];
          this.location = ['room', 'fridge'];
          break;
        case 4 :
          this.title = 'In Fridge, then Room';
          this.time = [this.props.infridge,this.props.inroom];
          this.interfere = [this.props.fridgeplusroomstart,this.props.fridgeplusroomshape];
          this.location = [ 'fridge','room'];
          break;
        case 1:
        default:
          this.title = 'In Room';
          this.time = [this.props.inroom];
          this.interfere = [this.props.roomstart,this.props.roomshape];
          this.location = ['room'];
      }

    }

    render() {

      this.breadType = this.props.breadType;
      this.baketime =  [this.props.baketime] ;
      this.ensureDisplayOnNav(this.state.key);
      return (
        <div>
        <h2>Rise and Baking Time</h2>
        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="controlled-tab-example"
        >
          <Tab eventKey={1} title="In Room">
            <DisplayQuantitiesAndTimes  start={this.start} title={this.title} baketime={this.baketime} time={this.time} interfere={this.interfere} breadType={this.breadType} location={this.location} />
          </Tab>
          <Tab eventKey={4} title="Fridge, then Room ">          
          <DisplayQuantitiesAndTimes start={this.start} title={this.title} baketime={this.baketime} time={this.time} interfere={this.interfere} breadType={this.breadType} location={this.location} />            </Tab>
          <Tab eventKey={3} title="Room, then Fridge " >          
          <DisplayQuantitiesAndTimes start={this.start} title={this.title} baketime={this.baketime} time={this.time} interfere={this.interfere} breadType={this.breadType} location={this.location} />          </Tab>
          <Tab eventKey={2} title="In Fridge">          
          <DisplayQuantitiesAndTimes start={this.start} title={this.title} baketime={this.baketime} time={this.time} interfere={this.interfere} breadType={this.breadType} location={this.location} />          </Tab>
        </Tabs>
                     
                      <DoughHydration hydration={this.props.hydration} key={(this.props.breadType)}  breadType={(this.props.breadType)} doughmass={(this.props.doughmass)} startermass={(this.props.startermass)} />
 
               </div>
      );
    }
  }

  export default DisplayQuantitiesTimesTab;