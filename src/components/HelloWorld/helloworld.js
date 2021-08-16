

import './helloworld.css';
import Element from '../element/element';



class Helloworld extends Element{


  constructor(props) {
    super(props);
    this.state = {
      
    };
  }




  render(){

    return (
        <div className="element helloworld" >
        <h1 className="header_title">{this.props.element_title}</h1>

        
 
        <hr />


        <div className="content_container">
            <div className="greeting"><h1>Hi there!</h1><h2>I'm Amin Bakhti</h2></div>
        </div>
        <div className="elementpic">
            <img src={this.props.element_img}/>
        </div>
      </div>
    );

  }

}

export default Helloworld;