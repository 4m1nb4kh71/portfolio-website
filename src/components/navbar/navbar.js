
import { Component } from 'react';
import './navbar.css';

class Navbar extends Component {

    constructor(props) {
       
        super(props);
        this.state = {
         ycoord : null,
        };
      }
      
    componentDidMount = () =>{
        const tab_selector = document.getElementsByClassName("tab_selector").item(0);
        const tab =  document.getElementsByClassName("tab").item(0);
        const current_tab =  document.getElementsByClassName("current_tab").item(0);
       
        tab_selector.style.setProperty('transform',"translateX("+ current_tab.offsetLeft +"px)") ;
        
        tab_selector.style.setProperty('width',tab.clientWidth+"px") ;
    }

    click = (event) =>{
        const current_tab =  document.getElementsByClassName("current_tab").item(0);
        const target_tab = event.target;
        
        current_tab.classList.remove('current_tab');
        target_tab.classList.add('current_tab');




        //THIS IS FOR MOVING THE TAB SIDELINE
        const tab_selector = document.getElementsByClassName("tab_selector").item(0);

        
        const tabs =Array.from(event.target.parentElement.children);
        
        const index = tabs.findIndex(tab => tab === event.target);
        console.log(tabs[index].children);
       // tabs[index].style.setProperty('color',"#cd5c5c");
        tab_selector.style.setProperty('width',tabs[index].clientWidth+"px") ;
        tab_selector.style.setProperty('transform',"translateX("+ tabs[index].offsetLeft +"px)") ;
        tab_selector.style.setProperty('transition',".5s") ;

         
         
     }
    render(){

        return (
            <div className="navbar">
                <div className="navfront">
                   
                    <div className="logo">Logo</div> 
                   
                    <div className="tabs">
                    <div className="tab_selector"></div>
                        <a href="#" className="tab current_tab" onClick={this.click}>
                            
                        
                            tab1
                        </a>
                        <a href="#" className="tab " onClick={this.click}>
                        
                            tab2
                        </a>
                        <a href="#" className="tab" onClick={this.click}>
                        
                            tab
                        </a>
                        <a href="#" className="tab" onClick={this.click}>
                        
                        tab
                    </a>
                    </div>
        
                </div>
                
            </div>
          );
    }
  
}

export default Navbar;