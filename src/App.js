

import Navbar from './components/navbar/navbar';
import Mainpage from './components/mainpage/mainpage';
import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
      
    };
  }

  
  

render(){

  return (
    
    <div className="App">
     
     
     
      <Navbar className="navbar" />
      <Mainpage/>
      
    </div>
  );

}
 
}

export default App;
