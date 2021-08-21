
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
 
  let hundred =  (this.state.frame.offsetWidth) - (window.innerWidth );
  let percent = Math.round((((this.state.amount-100) / hundred))*100)  ;
  this.setState({percent:percent});
  const bg = document.getElementsByClassName('background').item(0);
  const bg2 = document.getElementsByClassName('background2').item(0);
  const hellobg = document.getElementsByClassName('hellobg').item(0);
  const whatidobg = document.getElementsByClassName('whatidobg').item(0);
  const progress_bar = document.getElementsByClassName('progress_bar').item(0);
  this.state.element.style.backgroundColor = 'rgb('+( 19 + (percent*1.2))  +','+ (18+ (percent*1.5) )+','+( 30 + percent*5 )+')';
  bg.style.opacity =  .1 + percent/150 ;
  bg2.style.transform = 'translate('+percent   +'vw,-'+Math.log10( percent )*50 +'vh)';
  bg2.style.backgroundColor = 'rgb('+ 254   +','+ (150 + (percent/1.2) )+','+ 118+')';
  //bg2.style.transform = 'translateX(-'+percent /6  +'%)';
  hellobg.style.transform = 'translateY(-'+percent  +'%)';
  whatidobg.style.transform = 'translateY(-'+ percent +'%)';

  progress_bar.style.setProperty("width",percent +'%') ;
}

  
  

render(){

  return (
    
    <div className="App" onWheel={this.handleScroll}  onScroll={this.handleparallax} >
      
      <div className="background" >
       

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
