

import './whatido.css';
import Element from '../element/element';



class Whatido extends Element{


  constructor(props) {
    super(props);
    this.state = {
      
    };
  }




  render(){

    return (
        <div className="element whatido" >
           <div className="whatidobg"></div>
        <h1 className="header_title">{this.props.element_title}</h1>

        
 
        <hr />

        <div className="container">
          <div className="elementpic">
              <img src={this.props.element_img}/>
          </div>

          <div className="content_container">
              <div className="dos"><p>Currently i develop websites mainly with django and react.</p></div>
          </div>
          
        </div>
      </div>
    );

  }

}

export default Whatido;