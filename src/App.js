
import './App.css';
import Navbar from './components/navbar/navbar';
import Frame from './components/frame/frame';
import { Component } from 'react';
import bgimg from './static/images/backg.jpg'

var lastScroll = 9999;
var scrollIdleTime = 100; 
class App extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
      scrolling: false,
      element:null,
      scrleft : null,
      percent:null,
      amount:0,
      frame:null,
    };
  }
  
componentDidMount = () =>{

 
    const el = document.getElementsByClassName("App").item(0);
   
   const frame = document.getElementsByClassName("frame").item(0);
    this.setState({element:el,frame:frame}) ;
   
}

componentWillUnmount= () =>{
 
    
}




handleScroll = (event) =>{

    

  // this.state.element.scrollLeft += event.deltaY*9;
   /* let el = this.state.element;
    el.scrollLeft +=event.deltaY/100 * window.innerWidth/2 ;
    console.log(timeNow);
    this.setState({element: el});
    const bg = document.getElementsByClassName('background').item(0);*/
  
    var timeNow = performance.now();
    //this to detect only one scroll at a time
    if (timeNow > (lastScroll + scrollIdleTime) ) {
       
      let el = this.state.element;
      el.scrollLeft +=event.deltaY/100 * window.innerWidth/2 ;
      
      this.setState({element: el});
      
    }
    lastScroll = timeNow;
    
  

   
}
handleparallax = (e) => {

  //this.state.amount  =(this.state.element.scrollLeft);
  this.setState({amount:this.state.element.scrollLeft}); 
 
  let hundred =  this.state.frame.offsetWidth - (window.innerWidth -110);
  let percent = Math.round(((this.state.amount / hundred))*100)  ;
  this.setState({percent:percent});
  const bg = document.getElementsByClassName('background').item(0);
  const bg2 = document.getElementsByClassName('background2').item(0);
  const bg3 = document.getElementsByClassName('background3').item(0);
  const bg4 = document.getElementsByClassName('background4').item(0);
  const progress_bar = document.getElementsByClassName('progress_bar').item(0);

  bg.style.transform = 'translateX(-'+percent * .6 +'%)';
  bg2.style.transform = 'translateX(-'+percent /6  +'%)';
  bg3.style.transform = 'translateX(-'+percent *3  +'%)';
  bg4.style.transform = 'translateY(-'+percent*1.43 +'%)';

  progress_bar.style.setProperty("width",percent +'%') ;
}

  
  

render(){

  return (
    
    <div className="App" onWheel={this.handleScroll}  onScroll={this.handleparallax} >
      
      <div className="background" >
        <img src={bgimg} />

      </div>
     
     
      <Navbar className="navbar" />
      <Frame className="frame" />
      <div className ="progress_bar_container">
        <div className ="progress_bar"></div>
      </div> 
      
    </div>
  );

}
 
}

export default App;
