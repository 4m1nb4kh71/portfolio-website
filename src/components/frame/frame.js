
import { Component } from 'react';
import './frame.css';
import Helloworld from './../HelloWorld/helloworld';
import Element from './../element/element';
import {profilepic, progpic,rocks} from './../../static/images';
import Whatido from '../whatido/whatido';


class Frame extends Component{


  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
 

  render(){

    return (
      <div className="frame" >
        

        <div className="layers_container">
          <div className="background2">
          
          </div>
         
          
        </div>
        
         <Helloworld element_title="About me" element_img={profilepic}/>
         <Whatido element_title="What i do ?" element_img={progpic}/>
         <Element element_title="My projects"/>
         <Element element_title="contacts"/>
       
       
       
      </div>
    );

  }

}

export default Frame;
