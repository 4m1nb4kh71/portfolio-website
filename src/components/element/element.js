import { Component } from 'react';
import './element.css';
import Helloworld from '../HelloWorld/helloworld';
class Element extends Component{


  constructor(props) {
    super(props);
    this.state = {
      element_title : this.props.element_title,
      element_img : this.props.element_img,
    };
  }

  


  render(){
   
    return (

          <div className="element" >
          
            <h1 className="header_title">{this.state.element_title}</h1>

            
     
            <hr />

            <div className="container">
              <div className="elementpic">
                    <img src={this.state.element_img}/>
              </div>

              <div className="content_container">
                  
              </div>
               

            
            </div>
          </div>
         
    );

  }

}

export default Element;