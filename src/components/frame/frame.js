
import { Component } from 'react';
import './frame.css';

import Element from './../element/element';
import {profilepic, progpic} from './../../static/images';

class Frame extends Component{


  constructor(props) {
    super(props);
    this.state = {
      
    };
  }




  render(){

    return (
      <div className="frame" >
         <div className="background2" >
       

       </div>
       <div className="background3" >
       

       </div>
       <div className="background4" >
       

       </div>
         <Element element_title="Hello World!" element_img={profilepic}/>
         <Element element_title="What i do ?" element_img={progpic}/>
         <Element element_title="My projects"/>
         <Element element_title="contacts"/>
       
      </div>
    );

  }

}

export default Frame;
