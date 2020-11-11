import React from 'react';
import {MenuItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


 class BreadMenuItem extends React.Component {

    constructor(props){
      super(props)
      this.closeNav = this.closeNav.bind(this);
    }
    closeNav(){
        this.props.onSelect();
    }


   render() {
   return   (
        <LinkContainer onSelect={this.closeNav} to={(this.props.placeToGo)} key={"--"+(this.props.navigation)} >
          <MenuItem   key={"-"+(this.props.navigation)} eventKey={(this.props.navigation)} >{(this.props.breadTitle)}</MenuItem>
        </LinkContainer>
   
   )}
}
export default BreadMenuItem;