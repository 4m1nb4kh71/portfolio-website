import { Component } from 'react';
import './element.css';

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


            <div className="content_container">
              
            </div>
            <div className="elementpic">
                <img src={this.state.element_img}/>
            </div>
          </div>
         
    );

  }

}

export default Element;