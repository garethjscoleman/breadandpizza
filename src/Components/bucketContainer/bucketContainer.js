
import React from 'react';
import Bucket from './../bucket/bucket'; 
import recipeContext from '../../Context/context';

import './bucketContainer.css';


class BucketContainer extends React.Component {
    constructor(props, context) {
    super(props, context);
    this.state={'view':1,
      'clicked':0,
      'touched':1
      };
    this.doughProps =this.context; 
    this.scrollBuckets = this.scrollBuckets.bind(this);

  }

  componentDidUpdate() {
    this.doughProps = this.context;
    /* ... */
  }
  componentWillUnmount() {
    this.doughProps = this.context;
    /* ... */
  }

  shouldComponentUpdate(nextProps, nextState, nextContext)
  {
    this.doughProps =this.context;
    return true; 
  }
  

  scrollBuckets = function(){
    var stateToSave = this.state;
    stateToSave.view++;
    stateToSave.clicked=2;
    if (stateToSave.view===3 && this.props.raisingagenttypeval!==0){
      stateToSave.view=5;
    }
    if(stateToSave.view>5){
      stateToSave.view=1;
    }
    this.setState(stateToSave);  
  }  

  render() {
    this.doughProps = this.context;
    var view = this.state.view;
    var displaystarter = ((view===3 || view===4  ) && this.doughProps.raisingagenttypeval===0);
    if (!displaystarter){

    }
    var freshyeast=0;
    var dryyeast=0;
    var starter=0;
    switch (this.doughProps.raisingagenttypeval)
    {case 0:
      starter=this.doughProps.startermass;
      break;
     case 1:
      freshyeast=this.doughProps.freshyeastmass;
     break;
     case 2:
      dryyeast=this.doughProps.dryyeastmass;
     break;
     default:
      starter=this.doughProps.startermass;
    }
    return (
 <div className='bucketscontainer'>
    {(view===1) ?
        <div className='bucketcontainermainmix'>
        <Bucket flour={(this.doughProps.flourmass)} 
        water={(this.doughProps.watermass)} 
        starter={(starter)} 
        salt={(this.doughProps.saltmass)} 
        egg={(this.doughProps.eggmass)} 
        oil={(this.doughProps.oilmass)}
        freshyeast={(freshyeast)} 
        dryyeast={(dryyeast)} 
        milk={(this.doughProps.milkmass)}  
        title='Main Mix'/>  
        </div>
        :<div/>}
    {(view===2) ?
        <div className='bucketcontainerautolysemix'>
        <Bucket flour={Math.round(0.8*this.doughProps.flourmass)}
        water={Math.round(0.8*this.doughProps.watermass)}
        salt='0'
        egg='0'
        oil='0'
        freshyeast='0' 
        dryyeast='0' 
        milk='0'
        starter='0'
        title='Autolyse Mix' />
        </div>
        : <div/>
    }
    { (displaystarter===true && view===3 ) ?
        <div className='bucketcontainerstartermix'>
        <Bucket flour={(this.doughProps.starterflourmass)}
        water={(this.doughProps.startermass- this.doughProps.starterflourmass)}
        salt='0'
        egg='0'
        oil='0'
        freshyeast='0' 
        dryyeast='0' 
        milk='0'
        starter='0'
        title='Starter Mix'/>
        </div> :
      <div/>
      }
      {  (displaystarter===true && view===4) ?
        <div className='bucketcontainerleavenmix'>
        <Bucket flour={(Math.round(this.doughProps.flourmass*0.2))}
        water={(Math.round(this.doughProps.watermass*0.15))}
        salt='0'
        egg='0'
        oil='0'
        freshyeast='0'
        dryyeast='0' 
        milk='0'
        starter={(this.doughProps.startermass)}
        title='Leaven Mix'/>
        </div>
        :<div/> }
      {  view===5 ?
        <div className='bucketcontainersaltmix'>
        <Bucket flour='0'
        water={Math.round(this.doughProps.watermass*0.05)}
        salt={Math.round(this.doughProps.flourmass*0.02)}
        egg='0'
        oil='0'
        freshyeast='0'
        dryyeast='0' 
        milk='0'
        starter='0'
        title='Salt Mix'/>
        </div>
        :<div/> }
        <div 
        onClick={this.scrollBuckets} 
        className='bucketscroller' >
         <div className="bucketButtons">
         {(view===1) ?
              <div className="circlehighlight" ></div>
:            <div className="circle" ></div>
         }
         {(view===2) ?
              <div className="circlehighlight" ></div>
:            <div className="circle" ></div>}
        {(view===3) ?
              <div className="circlehighlight" ></div>
:            <div className="circle" ></div>}
        {(view===4) ?
            <div className="circlehighlight" ></div>
:            <div className="circle" ></div>}
        {(view===5) ?
            <div className="circlehighlight" ></div>
:            <div className="circle" ></div>}
          </div>
          
        </div>
    </div>
    );
  }
}
BucketContainer.contextType = recipeContext;

export default BucketContainer;