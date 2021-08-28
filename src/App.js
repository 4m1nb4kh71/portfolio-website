

import Navbar from './components/navbar/navbar';
import Mainpage from './components/mainpage/mainpage';
import Main from './main';
import { Component } from 'react';
import './App.css';
import Themesetter from './components/themesetter/themesetter';


class App extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
      
    };
  }

  
  

render(){

  return (
    
    <div className="App">
      
      <Themesetter/>
     
      <Navbar className="navbar" />
      
      <Main/>
      
    </div>
  );

}
 
}

export default App;
