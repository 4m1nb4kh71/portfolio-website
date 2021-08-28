import { Component } from "react";
import Notfound from "./components/notfound/notfound";
import Mainpage from "./components/mainpage/mainpage";
import Project from "./components/Projects/project";
import {Switch , Route} from 'react-router-dom'
class Main extends Component {
    render(){

        return (
          <Switch>
              <Route exact path='/' component={Mainpage}></Route>
              <Route exact path='/project/:id' component={Project}></Route>
              <Route  path='*'  component={Notfound}></Route>
          </Switch>
        
        );
      
      }
}
export default Main;