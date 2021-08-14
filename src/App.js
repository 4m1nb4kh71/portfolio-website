
import './App.css';
import Navbar from './components/navbar/navbar';
import Frame from './components/frame/frame';
import { Component } from 'react';
import bgimg from './static/images/backg.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
      element:null,
      scrleft : null,
      scrlx:0,
    };
  }
  
componentDidMount = () =>{
    window.addEventListener('scroll', this.handleScroll);
  
    const el = document.getElementsByClassName("App").item(0);
    this.setState({element:el}) ;
   
}

componentWillUnmount= () =>{
    window.removeEventListener('scroll', this.handleScroll);
    
}

handleScroll = (event) =>{
   
   const panel = document.getElementsByClassName("frame").item(0);
   
   console.log(event);
   const progress_bar =  document.getElementsByClassName("progress_bar").item(0);
  // this.state.element.scrollLeft += event.deltaY*9;
    let el = this.state.element;
    el.scrollLeft += event.deltaY*9;
    this.setState({element: el});
  
     
   
     
      
      
    
   
}

  
  

render(){

  return (
    <div className="App" onWheel = {this.handleScroll}>
      <div className="background">
        <img src={bgimg}/>

      </div>
     <div className="progress_bar"></div>
      <Navbar className="navbar" />
      <Frame className="frame" />
      
    
    </div>
  );

}
 
}

export default App;
