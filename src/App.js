import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';
import BreadNavbar from './Components/BreadNavbar/breadNavbar';
import QuantitiesAndTimes from './Components/quantitiesAndTimes/quantitiesAndTimes';
import './App.css';
import './input-moment.min.css'

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      breadType: 'pizza'
    }
  

  this.handleBreadtype = this.handleBreadtype.bind(this);

  }

  handleBreadtype(newBreadType){
    this.setState({breadType:newBreadType});
  }

  render() {

  
    
    
  



  
    return (
      <div className="App">
         <BreadNavbar navExpanded='true'  breadType={(this.state.breadType)}  onChangeBreadType={this.handleBreadtype}/>
         {(this.state.breadType)}
         <QuantitiesAndTimes breadType={(this.state.breadType)}/>
         <div className='footer'></div>
      </div>
    );
  }
}

export default App;
