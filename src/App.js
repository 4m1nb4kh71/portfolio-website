
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
      amount:0,
    };
  }
  
componentDidMount = () =>{
   
 
    const el = document.getElementsByClassName("App").item(0);
   
    this.setState({element:el}) ;
   
}

componentWillUnmount= () =>{
 
    
}


handleScroll = (event) =>{
   
 
   
   
 
  // this.state.element.scrollLeft += event.deltaY*9;
    let el = this.state.element;
    el.scrollLeft += event.deltaY*10;
    this.setState({element: el});
    const bg = document.getElementsByClassName('background').item(0);
  
  

    
        
        

  
  
    
      
      
    
   
}
handleparallax = (e) => {
  
  this.state.amount  =(this.state.element.scrollLeft);
  console.log(this.state.amount);
  const bg = document.getElementsByClassName('background').item(0);
  const bg2 = document.getElementsByClassName('background2').item(0);
  const bg3 = document.getElementsByClassName('background3').item(0);
  const bg4 = document.getElementsByClassName('background4').item(0);
  bg.style.transform = 'translateX(-'+this.state.amount/100   +'%)';
  bg2.style.transform = 'translateX(-'+this.state.amount/100  * 50 +'%)';
  bg3.style.transform = 'translateX(-'+this.state.amount/100  * .3 +'%)';
  bg4.style.transform = 'translateY(-'+this.state.amount/100  * 2.6 +'%)';
}

  
  

render(){

  return (
    <div className="App" onWheel = {this.handleScroll} onScroll={this.handleparallax}>
      <div className="background" >
        <img src={bgimg} />

      </div>
     
     
      <Navbar className="navbar" />
      <Frame className="frame"  />
      
    
    </div>
  );

}
 
}

export default App;
