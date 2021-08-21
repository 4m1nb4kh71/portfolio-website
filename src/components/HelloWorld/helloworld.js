

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
          <div className="hellobg"></div>
            <h1 className="header_title">{this.props.element_title}</h1>

            <hr />

          <div className="container">
            <div className="elementpic">
                <img src={this.props.element_img}/>
            </div>
            <div className="content_container">
              <div className="greeting"><h1>Hi there!</h1><h2>I'm Amin Bakhti</h2></div>
              <p>i'm a web developper</p>
            </div>


            

          </div>
     
        </div>
    );

  }

}

export default Helloworld;