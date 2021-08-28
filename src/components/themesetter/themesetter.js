import { Component } from 'react';

import './themesetter.css';

class Themesetter extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
        themesetter:null,
        lighttheme:{
          textcolor:'#252422',
          sectextcolor:'#403d39',
          backroundcolor:'#fffcf2',
          sectioncolor:'#ccc5b9',
        },
        darktheme:{
            textcolor:'white',
            sectextcolor:'#299cfa',
            backroundcolor:'#061522',
            sectioncolor:'#00213d',
        },
        darktheme2:{
            textcolor:'#242423',
            sectextcolor:'#333533',
            backroundcolor:'#e8eddf',
            sectioncolor:'#f5cb5c',
        }
    };
  }
setthemecolor =(theme) =>{
    const rootstyle = document.getElementById('root').style;
    rootstyle.setProperty('--textColor',theme.textcolor);
    rootstyle.setProperty('--secTextColor',theme.sectextcolor);
    rootstyle.setProperty('--backgroundColor',theme.backroundcolor);
    rootstyle.setProperty('--sectionColor',theme.sectioncolor);

}
togglethemebar = ()=>{
   console.log("clicked");
    this.state.themestter.classList.toggle('barvisible');
    console.log(this.state.themestter);
}
  
componentDidMount =() =>{
    this.setthemecolor(this.state.darktheme);
    const themestter = document.getElementsByClassName('Themesetter').item(0);
    this.setState({themestter:themestter});
   
}

render(){

  return (
    
    <div className="Themesetter">
      
        <h3>Change theme</h3>
     
        <button style={{backgroundColor:this.state.lighttheme.sectioncolor,borderColor: this.state.lighttheme.sectextcolor }} onClick={()=>this.setthemecolor(this.state.lighttheme)}></button>
        <button style={{backgroundColor:this.state.darktheme.sectioncolor,borderColor: this.state.darktheme.sectextcolor }} onClick={()=>this.setthemecolor(this.state.darktheme)}></button>
        <button style={{backgroundColor:this.state.darktheme2.sectioncolor,borderColor: this.state.darktheme2.sectextcolor }} onClick={()=>this.setthemecolor(this.state.darktheme2)}></button>
        <button className="sidebutton" onClick={() => this.togglethemebar()}>
            <p>Themes</p>
        </button>
    </div>
  );

}
 
}

export default Themesetter ;